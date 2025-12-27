import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Ambil ID Properti
const propertyId = import.meta.env.GA_PROPERTY_ID;

// Ambil Sandi Base64
const base64Key = import.meta.env.GA_KEY_BASE64;

let analyticsDataClient;

if (base64Key) {
  try {
    // 1. DECODE & PARSE secara aman untuk lingkungan Node.js maupun Edge
    const decodedKey = Buffer.from(base64Key, 'base64').toString('utf-8');
    const credentials = JSON.parse(decodedKey);

    // 2. Inisialisasi Google Analytics Client
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials,
    });
  } catch (err) {
    // Gunakan warn agar build Vercel tidak berhenti total jika terjadi kesalahan key
    console.warn("Gagal inisialisasi GA Client (Cek Base64 Key):", err.message);
  }
}

export async function getVisitorStats() {
  // Pastikan client dan ID tersedia sebelum melakukan fetch
  if (!analyticsDataClient || !propertyId) {
    console.warn("Analytics: GA_KEY_BASE64 atau GA_PROPERTY_ID belum diisi di Environment Variables.");
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }

  try {
    // A. Realtime (Sedang Online)
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
    // Mengembalikan angka 0 jika API gagal (misal: kuota habis atau gangguan koneksi saat build)
    console.error("Gagal mengambil data Analytics:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}