export type CategoryType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  icon: string | null;
  isCustom: number;
  sortOrder: number;
}

export interface CreateCategoryDTO {
  name: string;
  type: CategoryType;
  icon?: string;
}

export interface UpdateCategoryDTO {
  name?: string;
  icon?: string;
}
