export interface Account {
  id: string;
  name: string;
  balance: number;
  color: string;
  icon: string | null;
  createdAt: string;
  updatedAt: string;
  isDeleted: number;
}

export interface CreateAccountDTO {
  name: string;
  balance: number;
  color: string;
  icon?: string;
}

export interface UpdateAccountDTO {
  name?: string;
  color?: string;
  icon?: string;
}
