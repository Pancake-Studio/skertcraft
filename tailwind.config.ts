import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography'
import { PluginAPI } from "tailwindcss/types/config";
const {nextui} = require("@nextui-org/react");
interface TextShadowConfig {
  default: string;
  md: string;
  lg: string;
  white: string;
}

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.10)',
        'md': '0 4px 8px rgba(0,0,0,0.12)',
        'lg': '0 8px 16px rgba(0,0,0,0.15)',
        'white': '0 0 8px rgba(255,255,255,0.8)',
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fadeIn-delay-200': 'fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards',
        'fadeIn-delay-400': 'fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) 400ms forwards',
        'slideUp': 'slideUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slideUp-delay-200': 'slideUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards',
        'slideUp-delay-400': 'slideUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) 400ms forwards',
        'appear': 'appear 5s linear',
        'blur': 'blur 5s linear',
        'appear-mobile': 'appear-mobile 5s linear',
        aurora: "aurora 60s linear infinite",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
      keyframes: {
        appear: {
          'from': { opacity: '35%' },
          'to': { opacity: '5%' }
        },
        blur: {
          'from': { filter: 'blur(0px)' },
          'to': { filter: 'blur(8px)' }
        },
        'appear-mobile': {
        'from': { opacity: '55%' },
        'to': { opacity: '15%' }
      },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.45' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(2rem)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [
    nextui(),
    typography,
    ({ matchUtilities, theme }: PluginAPI) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { 
          values: theme('textShadow'),
        }
      )
    },
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },

    plugin(({ addUtilities }) => {
      addUtilities({
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
          '-webkit-backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur': {
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
      })
    }),
  ],
};

function addVariablesForColors({ addBase, theme }: {
  addBase: (base: Record<string, any>) => void;
  theme: (path: string) => any;
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
