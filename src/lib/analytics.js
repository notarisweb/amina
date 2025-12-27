import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Ambil ID Properti
const propertyId = import.meta.env.GA_PROPERTY_ID;

// Ambil Sandi Base64
const base64Key = import.meta.env.GA_KEY_BASE64;

let analyticsDataClient;

if (base64Key) {
  try {
    // 1. DECODE: Ubah Base64 kembali menjadi text biasa
    const decodedKey = Buffer.from(base64Key, 'base64').toString('utf-8');
    
    // 2. PARSE: Ubah text menjadi JSON Object
    const credentials = JSON.parse(decodedKey);

    // 3. Masukkan ke Google Analytics Client
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials, // Langsung masukkan object utuh, lebih aman!
    });
    
  } catch (err) {
    console.error("Gagal Decode GA Key (Base64 Error):", err.message);
  }
}

export async function getVisitorStats() {
  if (!analyticsDataClient || !propertyId) {
    console.warn("Analytics: GA_KEY_BASE64 atau GA_PROPERTY_ID belum diisi.");
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }

  try {
    // A. Realtime (Online User)
    const [realtime] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }],
    });
    const online = realtime.rows?.[0]?.metricValues?.[0]?.value || 0;

    // B. Historis (Hari ini, Kemarin, Total)
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        { startDate: 'today', endDate: 'today' },
        { startDate: 'yesterday', endDate: 'yesterday' },
        { startDate: '2024-01-01', endDate: 'today' } 
      ],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
    });

    const today = response.rows?.[0]?.metricValues?.[0]?.value || 0;
    const yesterday = response.rows?.[1]?.metricValues?.[0]?.value || 0;
    const total = response.rows?.[2]?.metricValues?.[1]?.value || 0;

    return {
      online: parseInt(online),
      today: parseInt(today),
      yesterday: parseInt(yesterday),
      total: parseInt(total)
    };

  } catch (error) {
    console.error("Error fetching Analytics data:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}