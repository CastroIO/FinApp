export interface Budget {
  id: string;
  categoryId: string;
  limitAmount: number;
  month: number;
  year: number;
  createdAt: string;
}

export interface CreateBudgetDTO {
  categoryId: string;
  limitAmount: number;
  month: number;
  year: number;
}

export interface UpdateBudgetDTO {
  limitAmount?: number;
}

export interface BudgetWithDetails extends Budget {
  categoryName: string;
  categoryIcon: string | null;
  spentAmount: number;
  remainingAmount: number;
  percentageUsed: number;
}
