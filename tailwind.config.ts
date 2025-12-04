import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; 

const config: Config = {
  content: [
    // Ensuring 'src' is included for comprehensive file scanning
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        // --- EXISTING ACUMEN BRAND COLORS (PURPLES) ---
        acumen: {
          primary: "hsl(277,72%,26%)", // Deep Purple
          secondary: "hsl(277,72%,22%)", // Darker Purple (Hover)
          light: "hsl(277,72%,30%)", // Slightly Lighter Purple
        },
        // --- NEW ACCENT COLORS ADDED ---
        palette: {
          'Purple Heart': "#4F1271",
          'Pastel Lavender': "#BFACC8",
          'Royal Purple': "#783F8E",
        }
        // Note: The slate colors used throughout your components (e.g., text-slate-900)
        // are standard Tailwind colors and do not need to be redefined here.
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate], 
};

export default config;