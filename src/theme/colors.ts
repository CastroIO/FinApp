export const colors = {
  // Primary
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

  // Income (green)
  income: {
    DEFAULT: '#22C55E',
    light: '#86EFAC',
    dark: '#16A34A',
  },

  // Expense (red)
  expense: {
    DEFAULT: '#EF4444',
    light: '#FCA5A5',
    dark: '#DC2626',
  },

  // Warning (orange) - for budget alerts
  warning: {
    DEFAULT: '#F97316',
    light: '#FDBA74',
    dark: '#EA580C',
  },

  // Background
  background: {
    DEFAULT: '#0F0F0F',
    secondary: '#1A1A1A',
    tertiary: '#27272A',
  },

  // Text
  text: {
    DEFAULT: '#FFFFFF',
    secondary: '#A1A1AA',
    tertiary: '#71717A',
  },

  // Border
  border: {
    DEFAULT: '#27272A',
    light: '#3F3F46',
  },

  // Budget progress colors
  budget: {
    neutral: '#3B82F6',    // < 50%
    caution: '#EAB308',    // 50-80%
    alert: '#F97316',      // 80-100%
    danger: '#EF4444',     // > 100%
  },

  // Account colors (for selection)
  accountColors: [
    '#3B82F6', // Blue
    '#22C55E', // Green
    '#EF4444', // Red
    '#F97316', // Orange
    '#A855F7', // Purple
    '#EC4899', // Pink
    '#14B8A6', // Teal
    '#F59E0B', // Amber
    '#6366F1', // Indigo
    '#84CC16', // Lime
  ],

  // Category colors
  categoryColors: {
    housing: '#3B82F6',
    food: '#22C55E',
    transport: '#F97316',
    health: '#EF4444',
    leisure: '#A855F7',
    education: '#EC4899',
    clothing: '#14B8A6',
    utilities: '#F59E0B',
    subscriptions: '#6366F1',
    other: '#71717A',
    salary: '#22C55E',
    freelance: '#3B82F6',
    gifts: '#A855F7',
  },
} as const;
