/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'category-1': "url('./src/assets/images/products/apparel/Cat-1-pro.jpg')",
        'category-2': "url('./src/assets/images/products/apparel/Cat-2-pro.jpg')",
        'category-3': "url('./src/assets/images/products/apparel/Cat-3-pro.jpg')",
      }
    },
  },
  plugins: [],
}

