import { BetaAnalyticsDataClient } from '@google-analytics/data';

const privateKey = import.meta.env.GA_PRIVATE_KEY 
  ? import.meta.env.GA_PRIVATE_KEY.replace(/\\n/g, '\n') 
  : undefined;

const propertyId = import.meta.env.GA_PROPERTY_ID;
const clientEmail = import.meta.env.GA_CLIENT_EMAIL;

let analyticsDataClient;

if (privateKey && clientEmail) {
  try {
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
    });
  } catch (err) {
    console.error("Gagal inisialisasi GA Client:", err.message);
  }
}

export async function getVisitorStats() {
  if (!analyticsDataClient || !propertyId) {
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }

  try {
    // 1. DATA REALTIME (Sedang Online - 30 menit terakhir)
    const [realtime] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }],
    });
    const online = realtime.rows?.[0]?.metricValues?.[0]?.value || 0;

    // 2. DATA HISTORIS (Hari Ini, Kemarin, Total)
    // Kita request 3 rentang tanggal dalam satu panggilan
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        { startDate: 'today', endDate: 'today' },           // Index 0: Hari Ini
        { startDate: 'yesterday', endDate: 'yesterday' },   // Index 1: Kemarin
        { startDate: '2024-01-01', endDate: 'today' }       // Index 2: Total (Ganti tahun sesuai web dibuat)
      ],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }], // Gunakan sessions untuk total kunjungan
    });

    // Parsing hasil (GA4 mengembalikan array sesuai urutan dateRanges)
    const today = response.rows?.[0]?.metricValues?.[0]?.value || 0;     // activeUsers hari ini
    const yesterday = response.rows?.[1]?.metricValues?.[0]?.value || 0; // activeUsers kemarin
    
    // Untuk total, kita pakai 'sessions' (kunjungan) agar angkanya lebih representatif untuk "Total Hits"
    // Tapi jika ingin "Total Orang", gunakan metricValues[0]
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