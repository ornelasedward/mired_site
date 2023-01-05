module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: "Clash Display",
      body: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      xls: "400px",
      xxs: "460px",
      xs: "560px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1120px",
    },
    extend: {
      colors: {
        page: "#FEF8F5",
        primary: "#402B2B",
        accent: {
          DEFAULT: "#FEB702",
          hover: "#FFDb81",
        },
        tint: "#FDEDE8",
        darkblue: "#0F264C",
      },
      dropShadow: {
        primary: "0 20px 40px rgba(238, 77, 71, 0.1)",
        secondary: "0px 30px 40px rgba(244, 125, 103, 0.2)",
        tertiary: "0 20px 40px rgba(32, 56, 100, 0.3);",
      },
      backgroundImage: {
        hero: "url('/images/hero/scene.svg')",
        faq: "url('/images/faq/bg.svg')",
        footer: "url('/images/footer/bg.svg')",
      },
      animation: {
        spin: "spin 20s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
