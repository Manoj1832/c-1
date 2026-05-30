import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#374151",
          light: "#F3F4F6",
          dark: "#1F2937",
        },
        primary: "#374151", // mapping primary to brand to not break existing classes
        "surface-light": "#F4F4F4",
        "surface-alt": "#EEEEEE",
        border: "#DCDCDC",
        silver: "#AAAAAA",
        "silver-light": "#F0F0F0",
        "dark-text": "#111111",
        accent: "#222222",
        teal: "#2563EB",
        "bg-dark": "#111111",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      fontSize: {
        display: ["72px", { lineHeight: "1.1" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
        hover:
          "0 4px 12px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
