/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './qr/index.html',
    './qr.html',
    './privacy.html',
  ],
  theme: {
    extend: {
      colors: {
        // QR 페이지 커스텀 팔레트 (기존 inline tailwind.config와 동일)
        ink: '#0a0a0a',
        paper: '#f7f5ef',
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        warm: '#f4a524',
      },
    },
  },
  plugins: [],
};
