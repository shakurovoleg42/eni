import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "hsl(var(--foreground))",
        forms: "rgba(251, 210, 24, 1)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundColor: {
        header: "rgba(254, 211, 0, 1)",
        forms: "rgba(251, 210, 24, 1)",
      },
      backgroundImage: {
        main: "url('/main-page-banner.jpeg')",
        second: "url('/second.png')",
        other: "url('/other.png')",
        leftCardCatalog: "url('/left-card-catalog.png')",
        rightCardCatalog: "url('/right-card-catalog.png')",
        modal: "url('/modal_image.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        gilroy: ["Gilroy-Regular ☞", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold ☞", "sans-serif"],
        "gilroy-heavy": ["Gilroy-Heavy ☞", "sans-serif"],
        "gilroy-light": ["Gilroy-Light ☞", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium ☞", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 15.63px 2.84px #1D192921",
      },

      //Анимации
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.2s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
