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
      }),
      colors: {
        darkBlue: "#243a6f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
