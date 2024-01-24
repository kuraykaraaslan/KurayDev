import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        softBounceShadow: {
          '0%, 100%': {
            backgroundColor: 'transparent',
            height: '12px',
            blur: '0',
            backdropFilter: 'blur(0)',
          },
          '50%': {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            height: '8px',
            blur: '0.5rem',
            backdropFilter: 'blur(0.5rem)',
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        egg: {
          "50%": {
            ringColor: "transparent"
          },
          "100%": {
            ringColor: "white"
          }
        },
        neo: {
          '50%': {
            transform: 'translateY(-50%) scale(0)',
            opacity: '0',
          },
          '100%': { transform: 'translateY(-50%) scale(0)' },
        },
        neocomes: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeout: {
          '0%': { opacity: '1' },
          '20%': {
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        softBounce: 'softBounce 3s ease-in-out infinite',
        softBounceShadow: 'softBounceShadow 3s ease-in-out infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        neo: "neo 10s forwards",
        neocomes: "neocomes 5s forwards",
        fadeout: "fadeout 5s forwards"
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#aef49c",

          "secondary": "#31167f",

          "accent": "#2d990c",

          "neutral": "#281a2e",

          "base-100": "#342f37",

          "info": "#93d7eb",

          "success": "#12685e",

          "warning": "#efcc1a",

          "error": "#fd5e83",
        },
        barbie: {
          "primary": "#ff1493",    // Barbie Pink
          "secondary": "#ffffff",  // White
          "accent": "#ff69b4",     // Hot Pink
          "neutral": "#f8c6e5",    // Light Pink
          "base-100": "#f4c2d7",   // Lighter Pink
          "info": "#87ceeb",       // Sky Blue
          "success": "#205aee",    // Spring Green
          "warning": "#a86a05",    // Gold
          "error": "#ff0000",      // Red
        },
        light: {

          "primary": "#e0400f",

          "secondary": "#bcbcf4",

          "accent": "#c613a9",

          "neutral": "#201f2d",

          "base-100": "#f8f5f9",

          "info": "#8eadf5",

          "success": "#25b179",

          "warning": "#a96404",

          "error": "#ed789f",
        },
        contrast: {          
          "primary": "#d85108",          
          "secondary": "#b7dff4",                   
          "accent": "#e3ef73",                   
          "neutral": "#1f2533",                   
          "base-100": "#3b343c",                   
          "info": "#62a8f3",                   
          "success": "#1e8047",                   
          "warning": "#f8bd4f",                   
          "error": "#ea3b2e",
        },
      },
    ],
  },
}
export default config
