import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Ambil ID Properti (Angka saja dari Admin GA4)
const propertyId = import.meta.env.GA_PROPERTY_ID;

// Ambil Kredensial dalam format Base64 (Untuk keamanan di Vercel/Hosting)
const base64Key = import.meta.env.GA_KEY_BASE64;

let analyticsDataClient;

if (base64Key) {
  try {
    // 1. DECODE: Mengonversi Base64 kembali ke format JSON string asli
    // Mendukung runtime Node.js (Vercel) maupun browser/edge
    const decodedKey = typeof Buffer !== 'undefined' 
      ? Buffer.from(base64Key, 'base64').toString('utf-8')
      : atob(base64Key);
    
    // 2. PARSE: Mengubah string menjadi objek JSON
    const credentials = JSON.parse(decodedKey);

    // 3. INISIALISASI: Menghubungkan ke layanan Google Analytics Data API
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials,
    });
  } catch (err) {
    // Memberikan peringatan jika terjadi kesalahan kunci agar proses build tidak terhenti
    console.warn("Gagal inisialisasi GA Client (Cek Environment Variables):", err.message);
  }
}

export async function getVisitorStats() {
  // Validasi ketersediaan kredensial sebelum memanggil API
  if (!analyticsDataClient || !propertyId) {
    console.warn("Analytics: Kredensial atau Property ID belum diisi.");
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }

  try {
    // A. PENGAMBILAN DATA REAL-TIME (Sedang Online)
    // Mengambil jumlah pengguna yang aktif dalam 30 menit terakhir
    const [realtime] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }],
    });
    const online = realtime.rows?.[0]?.metricValues?.[0]?.value || 0;

    // B. PENGAMBILAN DATA HISTORIS (Hari Ini, Kemarin, Total)
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        { startDate: 'today', endDate: 'today' },           // Index 0: Hari ini
        { startDate: 'yesterday', endDate: 'yesterday' },   // Index 1: Kemarin
        { startDate: '2024-01-01', endDate: 'today' }       // Index 2: Total sejak awal
      ],
      // Menggunakan 'activeUsers' agar angka Total sinkron dengan angka harian
      metrics: [{ name: 'activeUsers' }], 
    });

    // Ekstraksi nilai dari baris laporan historis
    const today = response.rows?.[0]?.metricValues?.[0]?.value || 0;
    const yesterday = response.rows?.[1]?.metricValues?.[0]?.value || 0;
    
    // Total Hits kini menggunakan akumulasi activeUsers (Pengguna Aktif)
    const total = response.rows?.[2]?.metricValues?.[0]?.value || 0; 

    return {
      online: parseInt(online),
      today: parseInt(today),
      yesterday: parseInt(yesterday),
      total: parseInt(total)
    };

  } catch (error) {
    // Mengembalikan angka nol jika terjadi gangguan koneksi atau kuota API habis
    console.error("Error fetching Analytics data:", error.message);
    return { online: 0, today: 0, yesterday: 0, total: 0 };
  }
}