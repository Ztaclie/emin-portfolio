/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyber-dark": {
          bg: "#1a1a1a",
          darker: "#252525",
          neon: "#0ff",
          purple: "#bf00ff",
          pink: "#ff00ff",
        },
        "cyber-light": {
          bg: "#ffffff",
          darker: "#f0f0f0",
          neon: "#00b4d8",
          purple: "#7209b7",
          pink: "#f72585",
        },
        dracula: {
          background: "#282a36",
          "current-line": "#44475a",
          selection: "#44475a",
          foreground: "#f8f8f2",
          comment: "#6272a4",
          cyan: "#8be9fd",
          green: "#50fa7b",
          orange: "#ffb86c",
          pink: "#ff79c6",
          purple: "#bd93f9",
          red: "#ff5555",
          yellow: "#f1fa8c",
        },
      },
      fontFamily: {
        cyber: ["Share Tech Mono", "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
