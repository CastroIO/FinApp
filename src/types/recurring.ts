export type RecurrenceFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type RecurringType = 'income' | 'expense';

export interface RecurringTransaction {
  id: string;
  accountId: string;
  categoryId: string | null;
  type: RecurringType;
  amount: number;
  description: string | null;
  frequency: RecurrenceFrequency;
  startDate: string;
  endDate: string | null;
  isActive: number;
  createdAt: string;
}

export interface CreateRecurringTransactionDTO {
  accountId: string;
  categoryId?: string;
  type: RecurringType;
  amount: number;
  description?: string;
  frequency: RecurrenceFrequency;
  startDate: string;
  endDate?: string;
}

export interface UpdateRecurringTransactionDTO {
  categoryId?: string;
  amount?: number;
  description?: string;
  frequency?: RecurrenceFrequency;
  endDate?: string;
  isActive?: boolean;
}

export interface RecurringTransactionWithDetails extends RecurringTransaction {
  categoryName: string | null;
  categoryIcon: string | null;
  accountName: string;
  accountColor: string;
}
