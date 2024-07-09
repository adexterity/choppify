/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/images/header-bg.png')",
        "product1-bg": "url('/images/product-image1.png')",
        "product2-bg": "url('/images/product-image2.png')",
        "product3-bg": "url('/images/product-image3.png')",
        "product4-bg": "url('/images/product-image4.png')",
        "product5-bg": "url('/images/product-image5.png')",
        "product6-bg": "url('/images/product-image6.png')",
        "subscribe-bg": "url('/images/subscribe-bg.png')",
      },
      fontFamily: {
        custom: ['futura', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
