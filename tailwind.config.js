/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary':'#030712',
        'ebony':'#0F1827',
        'ebony-600':'#1F2937',
        'gray':'#58606B ',
        'silver':'#B9BCC0'
      },
    },
  },
  plugins: [],
}

