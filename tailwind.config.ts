import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E2A38",
        softwhite: "#F4F4F2",
        charcoal: "#2B2B2B",
        terracotta: "#C66B3D",
        sage: "#7A8C7D",
        beige: "#D8CFC4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "Montserrat", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
        wider: "0.08em",
      },
      maxWidth: {
        prose: "68ch",
        editorial: "1240px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
