/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "28.5px",
        17.5: "17.5px",
        circle: "50%",
      },
      padding: {
        15: "15px",
        100: "100px",
      },
      gap: {
        70: "70px",
        50: "50px",
        30: "30px",
      },
      margin: {
        "-4": "-4px",
        30: "30px",
        40: "40px",
        55: "55px",
        15: "15px",
      },
      minHeight: {
        799: "799px",
      },
      minWidth: {
        1489: "1489px",
      },
      maxWidth: {
        1140: "1140px",
        1000: "1000px",
        750: "750px",
        640: "640px",
        530: "530px",
        450: "450px",
        290: "290px",
        280: "280px",
      },
      width: {
        88: "88px",
        50: "50px",
        42: "170px",
        35: "35px",
        32: "32px",
        mlg: "810px",
      },
      height: {
        25: "25px",
        32: "32px",
        35: "35px",
        50: "50px",
        88: "88px",
      },
      lineHeight: {
        46: "46px",
        50: "50px",
        75: "75px",
      },
      colors: {
        primary: "#616368",
        darkBlue: "#2500f9",
        darkPurple: "#242f51",
        white: "#ffffff",
        darkGray: "#fdfdfe",
        orange: "#fcae61",
        darkOrange: "#feaa25",
        lightGray: "#e2eaed",
        lightBlack: "#343d52",
        darkBlack: "#273043",
        black: {
          900: "#09142e",
        },
        gray: {
          100: "#ebebeb",
          200: "#fafcfc",
          300: "#e7e7e7",
          400: "#eff3f8",
          500: "#f5f5f5",
          600: "#616368",
          700: "#999ca5",
          800: "#f5f7fa",
          900: "#ffecef",
          1000: "#f4f4ff",
          1100: "#e4ffee",
          1200: "#bcbbba",
          1300: "#eaf9ff",
          1400: "#fdeee4",
        },
        blue: {
          500: "#2563ff",
        },
        darkGreen: "#40975f",
        lightGreen: "#64ab7d",
        darkRed: "#f55767",
        lightOrange: "#fff6d3",
      },
      fontSize: {
        60: "60px",
        48: "48px",
        42: "42px",
        40: "40px",
        36: "36px",
        32: "32px",
        30: "30px",
        20: "20px",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1200px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "600px" },
        "container-sm": { min: "575.98px" },
        "container-md": { min: "767.98px" },
        "container-lg": { min: "991.98px" },
        "container-xl": { min: "1199.98px" },
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        "container-sm": "540px",
        "container-md": "720px",
        "container-lg": "960px",
        "container-xl": "1200px",
      },
    },
  },
  plugins: [],
};
