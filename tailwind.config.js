/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Tema dark - FinApp
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        income: {
          DEFAULT: '#22C55E',
          light: '#86EFAC',
          dark: '#16A34A',
        },
        expense: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
          dark: '#DC2626',
        },
        warning: {
          DEFAULT: '#F97316',
          light: '#FDBA74',
          dark: '#EA580C',
        },
        background: {
          DEFAULT: '#0F0F0F',
          secondary: '#1A1A1A',
          tertiary: '#27272A',
        },
        text: {
          DEFAULT: '#FFFFFF',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
        },
        border: {
          DEFAULT: '#27272A',
          light: '#3F3F46',
        },
      },
    },
  },
  plugins: [],
};
