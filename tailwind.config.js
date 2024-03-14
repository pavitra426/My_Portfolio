const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'compact' : '0px',
      'medium' : '600px',
      'expanded' : '840px',
      'large' : '1200px',
      'extra-large' : '1600px'
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        colors: {
          background: "#191C1E",
          foreground: '#E1E2E4',
          // background: '#000000',
          primary: {
            DEFAULT: '#61D4FF',
            foreground: '#003545',
            primaryContainer: '#004D63',
            onPrimaryContainer: '#BCE9FF',
          },
          secondary: {
            DEFAULT: "#B4CAD5",
            foreground: "#1E333C",
            secondaryContainer: '#354A53',
            onSecondaryContainer: '#CFE6F2',
          },
          tertiary: {
            DEFAULT: "#C5C3EA",
            foreground: "#2E2D4D",
            tertiaryContainer: '#444364',
            onTertiaryContainer: '#E2DFFF',
          },
          danger: {
            DEFAULT: '#FFB4AB',
            foreground: "#690005",
            errorContainer: '#93000A',
            onErrorContainer: '#FFDAD6',
          },
          surfaceVariant: {
            DEFAULT: '#40484C',
            foreground: "#C0C8CC",
          },
          utils: {
            DEFAULT: '#40484C',
            foreground: "#C0C8CC",
            outline: '#8A9296',
            outlineVariant: '#40484C',
            inversePrimary: '#006783',
            shadow: '#000000',
          }
        }
      },
      "dark": {
        colors: {
          background: "#191C1E",
          foreground: '#E1E2E4',
          primary: {
            DEFAULT: '#61D4FF',
            foreground: '#003545',
            primaryContainer: '#004D63',
            onPrimaryContainer: '#BCE9FF',
          },
          secondary: {
            DEFAULT: "#B4CAD5",
            foreground: "#1E333C",
            secondaryContainer: '#354A53',
            onSecondaryContainer: '#CFE6F2',
          },
          tertiary: {
            DEFAULT: "#C5C3EA",
            foreground: "#2E2D4D",
            tertiaryContainer: '#444364',
            onTertiaryContainer: '#E2DFFF',
          },
          danger: {
            DEFAULT: '#FFB4AB',
            foreground: "#690005",
            errorContainer: '#93000A',
            onErrorContainer: '#FFDAD6',
          },
          surfaceVariant: {
            DEFAULT: '#40484C',
            foreground: "#C0C8CC",
          },
          utils: {
            DEFAULT: '#40484C',
            foreground: "#C0C8CC",
            outline: '#8A9296',
            outlineVariant: '#40484C',
            inversePrimary: '#006783',
            shadow: '#000000',
          }
        }
      }
    }
  },
  'autoprefixer',
  )],
};
