/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
  // FIX: Ini saklar paling penting supaya skrip di Header.astro bisa jalan!
  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        // Warna khas Amina & Mode Gelap
        dark: '#0b1c3c', 
        primary: '#00695c', // Hijau Amina
        secondary: '#004d40',
        accent: '#ea580c', // Orange Amina
      },
      fontFamily: {
        // Font Inter biar kelihatan modern & clean
        primary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Plugin wajib buat portal berita agar artikelnya rapi
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};