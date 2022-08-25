module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          "slide-in": {
            "0%": {
              "-webkit-transform": "translateX(120%)",
              transform: "translateX(120%)",
            },
            "100%": {
              "-webkit-transform": "translateX(0%)",
              transform: "translateX(0%)",
            },
          },
          "fade-in": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        },
        animation: {
          "slide-in": "slide-in 0.5s ease-out",
          "fade-in": "fade-in 0.5s ease-out",
        },
      },
    },
    plugins: [],
}