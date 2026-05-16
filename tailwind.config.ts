import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F1",
        sand: "#F4E6D7",
        ink: "#2B2B2B",
        coral: "#FF6F61",
        fuchsia: "#E5418F",
        blush: "#FFB5C5",
        tangerine: "#FFA552",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "blush-wash":
          "linear-gradient(135deg, #FFF8F1 0%, #FFE8EC 50%, #FFF1E0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
