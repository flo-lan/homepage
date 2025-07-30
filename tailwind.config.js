module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      minHeight: {
        '128': '32rem'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],

  daisyui: {
    // styled: true,
    themes: [{light: {   ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
      neutral: "#131D2A",
      primary: "#f59f00",
      "primary-focus": "#B87700"
    }}],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}