module.exports = {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        animation: {
        word: "word 8s infinite ease-in-out",
        word1: "word1 10s infinite ease-in-out",
        word2: "word2 12s infinite ease-in-out",
        word3: "word3 9s infinite ease-in-out",
        word4: "word4 8s infinite ease-in-out",
        word5: "word5 7s infinite ease-in-out",
        },
        keyframes: {
        word: {
          "0%": {
              transform: "scale(1) rotate(10deg)",
          },
          "15%": {
              transform: "scale(1) rotate(15deg)",
          },
          "25%": {
              transform: "scale(1) rotate(35deg)",
          },
          "33%": {
              transform: "scale(1.05) rotate(45deg)",
          },
          "66%": {
              transform: "scale(0.9) rotate(-25deg)"
          },
          "80%": {
              transform: "scale(0.95) rotate(-10deg)"
          },
          "100%": {
              transform: "scale(1) rotate(10deg)"
          },
        },
        word1: {
          "0%": {
              transform: "scale(1) rotate(-20deg)",
          },
           "15%": {
              transform: "scale(1) rotate(15deg)",
           },
           "25%": {
              transform: "scale(1) rotate(35deg)",
           },
           "33%": {
              transform: "scale(1.05) rotate(45deg)",
           },
           "66%": {
              transform: "scale(0.9) rotate(-25deg)"
           },
           "80%": {
              transform: "scale(0.95) rotate(-10deg)"
           },
           "100%": {
              transform: "scale(1) rotate(-20deg)"
           },
        },
        word2: {
           "0%": {
              transform: "scale(1) rotate(30deg)",
           },
           "15%": {
              transform: "scale(1) rotate(15deg)",
           },
           "25%": {
              transform: "scale(1) rotate(35deg)",
           },
           "33%": {
              transform: "scale(1.05) rotate(45deg)",
           },
           "66%": {
              transform: "scale(0.9) rotate(-25deg)"
           },
           "80%": {
              transform: "scale(0.95) rotate(-10deg)"
           },
           "100%": {
              transform: "scale(1) rotate(30deg)"
           },
        },
        word3: {
           "0%": {
              transform: "scale(1) rotate(40deg)",
           },
           "15%": {
              transform: "scale(1) rotate(15deg)",
           },
           "25%": {
              transform: "scale(1) rotate(35deg)",
           },
           "33%": {
              transform: "scale(1.05) rotate(45deg)",
           },
           "66%": {
              transform: "scale(0.9) rotate(-25deg)"
           },
           "80%": {
              transform: "scale(0.95) rotate(-10deg)"
           },
           "100%": {
              transform: "scale(1) rotate(40deg)"
           },
        },
        word4: {
           "0%": {
              transform: "scale(1) rotate(45deg)",
           },
           "15%": {
              transform: "scale(1) rotate(15deg)",
           },
           "25%": {
              transform: "scale(1) rotate(35deg)",
           },
           "33%": {
              transform: "scale(1.05) rotate(45deg)",
           },
           "66%": {
              transform: "scale(0.9) rotate(-25deg)"
           },
           "80%": {
              transform: "scale(0.95) rotate(-10deg)"
           },
           "100%": {
              transform: "scale(1) rotate(45deg)"
           },
        },
        word5: {
           "0%": {
              transform: "scale(1) rotate(-20deg)",
           },
           "15%": {
              transform: "scale(1) rotate(15deg)",
           },
           "25%": {
              transform: "scale(1) rotate(35deg)",
           },
           "33%": {
              transform: "scale(1.05) rotate(45deg)",
           },
           "66%": {
              transform: "scale(0.9) rotate(-25deg)"
           },
           "80%": {
              transform: "scale(0.95) rotate(-10deg)"
           },
           "100%": {
              transform: "scale(1) rotate(-20deg)"
           },
        }
        }
     },
  },
  plugins: [
     require('flowbite/plugin'),
  ],
}
