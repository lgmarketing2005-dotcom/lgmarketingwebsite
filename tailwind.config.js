/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    'hover:border-[#000000]', // ✅ this is the one you need
    'hover:border-[#F15B29]', // ✅ Swelect orange hover'
    'hover-border-[#00A652]',
    'text-[#75BD29]',
    'text-[#4D4D4D]',
    'text-[#0147B9]',
    'text-[#2F2F2F]',
    'text-[#000000]'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
