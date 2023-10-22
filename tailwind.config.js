module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c: {
          primary: "#BF9FE8",
          secondary: "#fff",
          txt:"#0C0C0C",
        },
      },
      fontFamily: {
        custom: ['Cedarville Cursive', 'sans'],
        main: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
