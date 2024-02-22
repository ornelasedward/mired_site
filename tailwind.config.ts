import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backgroundImage: {
      "home-bg": "url('/images/home-bg.png')",
      "s-bg": "url('/images/contact_bg.png')",
    },
    extend: {
      colors: {
        border: "#CFC9D4",
        input: "#CFC9D4",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        active_link: "rgba(146, 194, 235, 0.37)",
        skin: {
          "blue-800": "#420FB0",
          "pink-300": "#FF92B2",
          "pink-200": "#F5E3E9",
          "yellow-600": "#F7BE08",
          "yellow-200": "#F5EFD9",
          "pink-50": "#F4F2F6",
          "slate-800": "#080F22",
        },
      },
      fontFamily: {
        poppins: "var(--poppins)",
        manrope: "var(--monrope)",
        montserrat: "var(--montserrat)",
        clash_display: "var(--clash-display)",
        orbitron: "var(--orbitron)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "10px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "heading-1": [
          "4.25rem",
          {
            lineHeight: "80px",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-2": [
          "2.375rem",
          {
            lineHeight: "50px",
            letterSpacing: "-0.01em",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
