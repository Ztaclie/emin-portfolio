/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          neon: "#0ff",
          pink: "#ff2a6d",
          purple: "#8a2be2",
          yellow: "#ffb800",
          dark: "#1a1a2e",
          darker: "#15151e",
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
    },
  },
  plugins: [],
};
