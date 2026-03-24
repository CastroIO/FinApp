export type TransactionType = 'income' | 'expense' | 'transfer';

export interface Transaction {
  id: string;
  accountId: string;
  categoryId: string | null;
  type: TransactionType;
  amount: number;
  description: string | null;
  date: string;
  attachmentPath: string | null;
  transferId: string | null;
  createdAt: string;
  updatedAt: string;
  isDeleted: number;
}

export interface CreateTransactionDTO {
  accountId: string;
  categoryId?: string;
  type: TransactionType;
  amount: number;
  description?: string;
  date: string;
  attachmentPath?: string;
  transferId?: string;
}

export interface UpdateTransactionDTO {
  categoryId?: string;
  amount?: number;
  description?: string;
  date?: string;
  attachmentPath?: string;
}

export interface TransactionWithDetails extends Transaction {
  categoryName: string | null;
  categoryIcon: string | null;
  accountName: string;
  accountColor: string;
}
