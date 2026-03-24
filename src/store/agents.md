# Store - Zustand

> Estado global da aplicação usando Zustand.

---

## 1. Visão Geral

O projeto usa **Zustand** para gestão de estado em memória. Cada domínio tem a sua própria store.

---

## 2. Estrutura

```
src/store/
├── useAccountStore.ts        # Contas
├── useTransactionStore.ts    # Transações
├── useCategoryStore.ts       # Categorias
├── useBudgetStore.ts         # Orçamentos
└── useRecurringStore.ts      # Transações recorrentes
```

---

## 3. Padrão de Store

```typescript
// src/store/useAccountStore.ts
import { create } from 'zustand';
import { accountRepository } from '@/database';

interface Account {
  id: string;
  name: string;
  balance: number;
  color: string;
  // ...
}

interface AccountStore {
  // Estado
  accounts: Account[];
  isLoading: boolean;
  
  // Ações
  fetchAccounts: () => Promise<void>;
  createAccount: (account: Omit<Account, 'id'>) => Promise<void>;
  updateAccount: (id: string, data: Partial<Account>) => Promise<void>;
  deleteAccount: (id: string) => Promise<void>;
}

export const useAccountStore = create<AccountStore>((set, get) => ({
  accounts: [],
  isLoading: false,
  
  fetchAccounts: async () => {
    set({ isLoading: true });
    try {
      const accounts = await accountRepository.getAll();
      set({ accounts, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  
  // ... mais ações
}));
```

---

## 4. Uso nos Componentes

### 4.1 Hook Básico

```typescript
import { useAccountStore } from '@/store/useAccountStore';

export function AccountList() {
  const { accounts, fetchAccounts, isLoading } = useAccountStore();
  
  useEffect(() => {
    fetchAccounts();
  }, []);
  
  if (isLoading) return <Text>Carregando...</Text>;
  
  return (
    <View>
      {accounts.map(account => (
        <Text key={account.id}>{account.name}</Text>
      ))}
    </View>
  );
}
```

### 4.2 Selecionar Estado Específico

```typescript
// Selecionar apenas uma parte do estado (evita re-renders)
const totalBalance = useAccountStore(state => 
  state.accounts.reduce((sum, acc) => sum + acc.balance, 0)
);
```

### 4.3 Acesso Estático (fora de componentes)

```typescript
// Para operações não-UI (ex: callbacks)
const store = useAccountStore.getState();
store.fetchAccounts();
```

---

## 5. Stores Disponíveis

### 5.1 useAccountStore

```typescript
// Estado
accounts: Account[]
isLoading: boolean

// Ações
fetchAccounts()
createAccount(data)
updateAccount(id, data)
deleteAccount(id)
recalculateBalance(accountId)
```

### 5.2 useTransactionStore

```typescript
// Estado
transactions: Transaction[]
isLoading: boolean
filters: { type?, categoryId?, accountId?, startDate?, endDate? }

// Ações
fetchTransactions(filters?)
createTransaction(data)
updateTransaction(id, data)
deleteTransaction(id)
```

### 5.3 useCategoryStore

```typescript
// Estado
categories: Category[]
isLoading: boolean

// Ações
fetchCategories()
createCategory(data)
updateCategory(id, data)
deleteCategory(id)
```

### 5.4 useBudgetStore

```typescript
// Estado
budgets: Budget[]
currentMonthBudget: Budget | null
spentByCategory: Record<string, number>

// Ações
fetchBudgets(month, year)
createBudget(data)
updateBudget(id, data)
deleteBudget(id)
getBudgetProgress(categoryId)
```

---

## 6. Padrão para Nova Store

```typescript
// 1. Criar interface do estado + ações
interface MyStore {
  items: Item[];
  isLoading: boolean;
  fetchItems: () => Promise<void>;
}

// 2. Criar store com create
export const useMyStore = create<MyStore>((set, get) => ({
  items: [],
  isLoading: false,
  
  fetchItems: async () => {
    set({ isLoading: true });
    const items = await myRepository.getAll();
    set({ items, isLoading: false });
  },
}));

// 3. Exportar do index se necessário
export { useMyStore } from './useMyStore';
```

---

## 7. Boas Práticas

```typescript
// ✅ Fazer: separates actions em funções
const addItem = () => {
  set(state => ({ items: [...state.items, newItem] }));
};

// ❌ Evitar: lógica complexa no set
const addItem = () => {
  set(state => {
    // Não fazer lógica complexa aqui
    return { items: state.items.concat([newItem]) };
  });
};

// ✅ Considerar: selectors para performance
const selectCount = (state) => state.items.length;
const count = useMyStore(selectCount);
```

---

## 8. Referências

| Recurso | Link |
|---------|------|
| Zustand Docs | https://docs.pmnd.rs/zustand |
| Padrões | `SPEC.md` - Secção 9 (Estrutura de Código) |

---

> **Última atualização:** 24/03/2026
