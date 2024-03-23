import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'


const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-120': {
      transform: 'rotateY(120deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-270': {
      transform: 'rotateY(270deg)',
    },
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
  })
})



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
  plugins: [require("daisyui"), require('@tailwindcss/typography'), rotateY],
  daisyui: {
    themes: [
      {
        dark: {



          "primary": "#00aaff",

          "secondary": "#00dea6",

          "accent": "#00ae79",

          "neutral": "#311e1d",

          "base-100": "#3d3f4d",

          "base-200": "#282a3a",

          "base-300": "#242534",

          "base-400": "#20212e",

          "base-500": "#101017",

          "info": "#00b1d2",

          "success": "#33f16a",

          "warning": "#d52d00",

          "error": "#fd0e3d",
        },
        light: {

          "primary": "#7100ff",

          "secondary": "#007e9b",

          "accent": "#005bef",

          "neutral": "#0b0200",

          "base-100": "#ffffd8",

          "base-200": "#f3f3f3",

          "base-300": "#e9e9e9",

          "base-400": "#dfdfdf",

          "base-500": "#cfcfcf",


          "info": "#00d6ff",

          "success": "#00ff7c",

          "warning": "#fb6d00",

          "error": "#ff5365",
        }
      },
    ],
  },
}
export default config
