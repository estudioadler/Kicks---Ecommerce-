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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'cinza1': '#fafafa',
      'cinza2': '#e7e7e3',
      'Cinza3': '#70706e',
      'Cinza4': '#232321',
      'RoyalBlue': '#4a69e2',
      'Sunshade': '#ffa52f',
    },
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        opensans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
}