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
    const requestOptions = { timeout: 20000 }; 

    const [realtimeResponse, historisResponse] = await Promise.all([
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [
          { name: 'activeUsers' }, 
          { name: 'screenPageViews' } // Ambil juga views hari ini dari realtime
        ], 
      }, requestOptions),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
          { startDate: 'today', endDate: 'today' },
          { startDate: 'yesterday', endDate: 'yesterday' },
          { startDate: '2020-01-01', endDate: 'yesterday' } // Ambil total HANYA sampai kemarin
        ],
        metrics: [{ name: 'screenPageViews' }], 
      }, requestOptions)
    ]);

    // 1. Data Realtime
    const online = realtimeResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const viewsTodayRealtime = realtimeResponse[0].rows?.[0]?.metricValues?.[1]?.value || 0;

    // 2. Data Laporan (Historis)
    const todayReport = historisResponse[0].rows?.[0]?.metricValues?.[0]?.value || 0;
    const yesterday = historisResponse[0].rows?.[1]?.metricValues?.[0]?.value || 0;
    const totalUntilYesterday = historisResponse[0].rows?.[2]?.metricValues?.[0]?.value || 0;

    // 3. LOGIKA TOTAL HITS:
    // Menggunakan angka terbesar antara laporan hari ini vs realtime hari ini, 
    // lalu ditambahkan ke total historis agar angka tidak pernah turun.
    const effectiveToday = Math.max(parseInt(todayReport), parseInt(viewsTodayRealtime));
    const totalHits = parseInt(totalUntilYesterday) + effectiveToday;

    return {
      online: parseInt(online),
      today: effectiveToday,
      yesterday: parseInt(yesterday),
      total: totalHits 
    };

  } catch (error) {
    console.error("Analytics Timeout/Error:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}