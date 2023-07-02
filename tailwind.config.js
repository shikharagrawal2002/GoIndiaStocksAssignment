/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max':'639px'},

      'sm': {'min': '640px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    extend: {
      colors: {
        'grey' : '#e7e7e7',
        'red': '#FC1818',
        'green': '#1CE630',
        'skyblue': '#CEE6EA',
        'yellow': '#FFB800',
        'blue': '#1058AC',
        'darkgrey': '#D9D9D9',
        'darkred': '#CE0606',
        'darkBlue': '#190A39',
        'blue2': '#0C2447'
      },
      keyframes: {
        marquee: {
          '0%': { left: '0%' },
          '100%': { left: '-100%' },
        },
        marquee2: {
          '0%': { left: '0%' },
          '100%': { left: '-300%' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 10s linear infinite'
      }
    },
  },
  plugins: [],
}