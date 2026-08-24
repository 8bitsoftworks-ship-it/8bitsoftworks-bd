/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121319",
          soft: "#1B1D25",
          line: "#2B2E38",
        },
        paper: {
          DEFAULT: "#F1F2EC",
          soft: "#E7E8E0",
          line: "#D6D7CC",
        },
        mint: {
          DEFAULT: "#39D9A0",
          dim: "#1F8F69",
        },
        signal: "#FF4F3F",
        muted: "#787C74",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        serif: ["'Fraunces'", "serif"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "3px",
      },
      transitionTimingFunction: {
        studio: "cubic-bezier(.16,.84,.44,1)",
      },
    },
  },
  plugins: [],
};
