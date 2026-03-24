# Database - SQLite

> Schema, migrations e repositórios do FinApp.

---

## 1. Visão Geral

A base de dados usa **expo-sqlite** para persistência local offline-first.

---

## 2. Estrutura

```
src/database/
├── connection.ts       # Inicialização da BD
├── migrations.ts      # Schema e migrations
├── seeds.ts            # Dados iniciais (categorias)
├── index.ts           # Export principal
└── repositories/      # (futuro) Repositórios por entidade
```

---

## 3. Schema SQLite

### 3.1 Tabela categories

```sql
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  icon TEXT,
  is_custom INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0
);
```

### 3.2 Tabela accounts

```sql
CREATE TABLE accounts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  balance REAL NOT NULL DEFAULT 0,
  color TEXT NOT NULL,
  icon TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  is_deleted INTEGER NOT NULL DEFAULT 0
);
```

### 3.3 Tabela transactions

```sql
CREATE TABLE transactions (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id),
  category_id TEXT REFERENCES categories(id),
  type TEXT NOT NULL CHECK (type IN ('income', 'expense', 'transfer')),
  amount REAL NOT NULL,
  description TEXT,
  date TEXT NOT NULL,
  attachment_path TEXT,
  transfer_id TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  is_deleted INTEGER NOT NULL DEFAULT 0
);
```

### 3.4 Tabela budgets

```sql
CREATE TABLE budgets (
  id TEXT PRIMARY KEY,
  category_id TEXT NOT NULL REFERENCES categories(id),
  limit_amount REAL NOT NULL,
  month INTEGER NOT NULL,
  year INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(category_id, month, year)
);
```

### 3.5 Tabela recurring_transactions

```sql
CREATE TABLE recurring_transactions (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id),
  category_id TEXT REFERENCES categories(id),
  type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  amount REAL NOT NULL,
  description TEXT,
  frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly', 'yearly')),
  start_date TEXT NOT NULL,
  end_date TEXT,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

---

## 4. Operações CRUD (Exemplos)

### 4.1 Inserir Conta

```typescript
import { getDb } from './connection';
import * as Crypto from 'expo-crypto';

const db = getDb();

const account = {
  id: Crypto.randomUUID(),
  name: 'Carteira',
  balance: 100,
  color: '#3B82F6',
};

db.execute(
  `INSERT INTO accounts (id, name, balance, color) VALUES (?, ?, ?, ?)`,
  [account.id, account.name, account.balance, account.color]
);
```

### 4.2 Listar Contas

```typescript
const result = db.execute(
  `SELECT * FROM accounts WHERE is_deleted = 0 ORDER BY created_at DESC`
);
// result.rows._array contém os dados
```

### 4.3 Atualizar Saldo

```typescript
// Despesa: subtrair
db.execute(
  `UPDATE accounts SET balance = balance - ?, updated_at = datetime('now') WHERE id = ?`,
  [amount, accountId]
);

// Receita: adicionar
db.execute(
  `UPDATE accounts SET balance = balance + ?, updated_at = datetime('now') WHERE id = ?`,
  [amount, accountId]
);
```

### 4.4 Soft Delete

```typescript
// Nunca usar DELETE, usar is_deleted = 1
db.execute(
  `UPDATE accounts SET is_deleted = 1, updated_at = datetime('now') WHERE id = ?`,
  [accountId]
);
```

---

## 5. Migrations

As migrations são aplicadas automaticamente na inicialização:

```typescript
// src/database/migrations.ts
export const migrations = [
  {
    version: 1,
    up: `
      CREATE TABLE IF NOT EXISTS categories (...);
      CREATE TABLE IF NOT EXISTS accounts (...);
      CREATE TABLE IF NOT EXISTS transactions (...);
    `,
  },
  // Adicionar novas migrations aqui
];
```

---

## 6. Seeds (Dados Iniciais)

Categorias predefinidas são inseridas na primeira execução:

```typescript
// src/database/seeds.ts
export const defaultCategories = [
  // Receitas
  { name: 'Salário', type: 'income', icon: 'briefcase' },
  { name: 'Freelance', type: 'income', icon: 'laptop' },
  { name: 'Presentes', type: 'income', icon: 'gift' },
  { name: 'Outros', type: 'income', icon: 'circle' },
  // Despesas
  { name: 'Habitação', type: 'expense', icon: 'home' },
  { name: 'Alimentação', type: 'expense', icon: 'utensils' },
  { name: 'Transporte', type: 'expense', icon: 'car' },
  // ... mais categorias
];
```

---

## 7. Referências

| Recurso | Link |
|---------|------|
| expo-sqlite Docs | https://docs.expo.dev/versions/latest/sdk/sqlite |
| Especificação | `SPEC.md` - Secção 6 (Modelo de Dados) |

---

> **Última atualização:** 24/03/2026
