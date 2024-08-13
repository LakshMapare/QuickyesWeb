
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    fontFamily:{
      sansSerif: "eina01,sans-serif"
    }

  },
  extend:{
    Animation:{
      slide: "slide 25s linear infinite"
    },
    keyframes: {
      slide:{
        "0%,100%" :{transform:"translateX(5%)"},
        "50%":{transform:"translateX(-120%)"}
      }
    }
  },
  screens:{
    xs: "480px",
    sm: "768px",
    md: "1068px",
  },
  plugins: [],
}

