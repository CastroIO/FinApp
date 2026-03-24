import { CategoryType } from '../types';

export const CURRENCY = 'EUR';
export const CURRENCY_SYMBOL = '€';

// Database
export const DATABASE_NAME = 'finapp.db';

// Storage keys
export const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: '@finapp_onboarding_completed',
  LAST_BACKUP: '@finapp_last_backup',
} as const;

// Default categories
export const DEFAULT_INCOME_CATEGORIES = [
  { name: 'Salário', icon: 'briefcase', sortOrder: 1 },
  { name: 'Freelance', icon: 'laptop', sortOrder: 2 },
  { name: 'Presentes', icon: 'gift', sortOrder: 3 },
  { name: 'Outros', icon: 'plus-circle', sortOrder: 4 },
] as const;

export const DEFAULT_EXPENSE_CATEGORIES = [
  { name: 'Habitação', icon: 'home', sortOrder: 1 },
  { name: 'Alimentação', icon: 'utensils', sortOrder: 2 },
  { name: 'Transporte', icon: 'car', sortOrder: 3 },
  { name: 'Saúde', icon: 'heart', sortOrder: 4 },
  { name: 'Lazer', icon: 'gamepad-2', sortOrder: 5 },
  { name: 'Educação', icon: 'book-open', sortOrder: 6 },
  { name: 'Vestuário', icon: 'shirt', sortOrder: 7 },
  { name: 'Utilidades', icon: 'zap', sortOrder: 8 },
  { name: 'Subscrições', icon: 'repeat', sortOrder: 9 },
  { name: 'Outros', icon: 'more-horizontal', sortOrder: 10 },
] as const;

// Budget thresholds
export const BUDGET_THRESHOLDS = {
  CAUTION: 0.5,    // 50%
  ALERT: 0.8,      // 80%
  DANGER: 1.0,     // 100%
} as const;

// Recurrence frequencies
export const RECURRENCE_FREQUENCIES: { value: string; label: string; days: number }[] = [
  { value: 'daily', label: 'Diária', days: 1 },
  { value: 'weekly', label: 'Semanal', days: 7 },
  { value: 'monthly', label: 'Mensal', days: 30 },
  { value: 'yearly', label: 'Anual', days: 365 },
];
