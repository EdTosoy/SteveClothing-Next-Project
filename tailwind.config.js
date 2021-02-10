module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
      },
      backgroundImage: (theme) => ({
        "hero-bg": "url('/images/banner.png')",
        "category-1-bg": "url('/images/advert1.png')",
        "category-2-bg": "url('/images/advert2.png')",
        "category-3-bg": "url('/images/advert3.png')",
      }),

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
