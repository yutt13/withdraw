/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // เพิ่มเส้นทางไฟล์ในโฟลเดอร์ src
  ],
  theme: {
    extend: { 
      fontFamily: {
      sans: ['Prompt', 'sans-serif'], // ตั้งค่าให้ Prompt เป็นฟอนต์หลัก
    },},
  },
  plugins: [],
}
