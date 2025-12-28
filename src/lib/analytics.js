import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = import.meta.env.GA_PROPERTY_ID;
const base64Key = import.meta.env.GA_KEY_BASE64;

let analyticsDataClient;

if (base64Key) {
  try {
    const decodedKey = typeof Buffer !== 'undefined' 
      ? Buffer.from(base64Key, 'base64').toString('utf-8')
      : atob(base64Key);
    
    const credentials = JSON.parse(decodedKey);

    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials,
    });
  } catch (err) {
    console.warn("Gagal inisialisasi GA Client:", err.message);
  }
}

export async function getVisitorStats() {
  if (!analyticsDataClient || !propertyId) {
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }

  try {
    // Menambahkan opsi timeout untuk mencegah error DEADLINE_EXCEEDED di Vercel
    const requestOptions = { timeout: 20000 }; // Maksimal 20 detik

    // Menggunakan Promise.all agar data Realtime dan Report ditarik bersamaan (Paralel)
    // Ini jauh lebih cepat daripada menunggu satu per satu
    const [realtimeResponse, historisResponse] = await Promise.all([
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: 'activeUsers' }],
      }, requestOptions),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
          { startDate: 'today', endDate: 'today' },
          { startDate: 'yesterday', endDate: 'yesterday' },
          { startDate: '2024-01-01', endDate: 'today' } 
        ],
        metrics: [{ name: 'activeUsers' }],
      }, requestOptions)
    ]);

    const online = realtimeResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const today = historisResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const yesterday = historisResponse[0].rows?.[1]?.metricValues?.[0]?.value || 0;
    const total = historisResponse[0].rows?.[2]?.metricValues?.[0]?.value || 0;

    return {
      online: parseInt(online),
      today: parseInt(today),
      yesterday: parseInt(yesterday),
      total: parseInt(total)
    };

  } catch (error) {
    // Jika terjadi timeout atau DEADLINE_EXCEEDED, log tetap terekam tapi web tidak crash
    console.error("Analytics Timeout/Error:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}