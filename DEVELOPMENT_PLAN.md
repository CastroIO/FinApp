# FinApp — Plano de Desenvolvimento

---

## 1. Regras de Negócio

### Transações

| Regra         | Descrição                                  |
| ------------- | ------------------------------------------ |
| Valor         | Deve ser maior que 0                       |
| Data          | Máximo hoje (datas futuras bloqueadas)     |
| Descrição     | Máximo 200 caracteres                      |
| Transferência | Conta destino deve ser diferente da origem |

### Contas

| Regra         | Descrição                                                          |
| ------------- | ------------------------------------------------------------------ |
| Nome          | Obrigatório, 1-50 caracteres                                       |
| Saldo inicial | Obrigatório, ≥ 0                                                   |
| Conta default | "Carteira Principal" criada automaticamente na primeira utilização |

### Cálculos

```
Saldo de conta = initial_balance + Σ(income) − Σ(expense)
Saldo total = soma dos saldos de todas as contas ativas
Transferências mantêm soma total invariável
```

### Soft Delete

Transações e contas não são removidas fisicamente — são marcadas com `deleted_at`, permitindo undo e mantendo histórico.

---

## 2. Modelo de Dados

### Account

| Campo           | Tipo          | Descrição                 |
| --------------- | ------------- | ------------------------- |
| id              | INTEGER PK    | Identificador             |
| name            | TEXT          | Nome da conta             |
| initial_balance | REAL          | Saldo de partida          |
| is_default      | BOOLEAN       | True se for conta default |
| created_at      | TEXT ISO 8601 | Data de criação           |
| deleted_at      | TEXT ISO 8601 | Null se ativa             |

### Transaction

| Campo                  | Tipo          | Descrição                             |
| ---------------------- | ------------- | ------------------------------------- |
| id                     | INTEGER PK    | Identificador                         |
| account_id             | INTEGER FK    | Conta associada                       |
| category_id            | INTEGER FK    | Categoria                             |
| type                   | TEXT          | expense, income, transfer             |
| amount                 | REAL          | Valor (sempre > 0)                    |
| date                   | TEXT ISO 8601 | Data da operação                      |
| description            | TEXT          | Nota livre                            |
| destination_account_id | INTEGER FK    | Conta destino (só transfer)           |
| transfer_id            | TEXT UUID     | Liga duas transações de transferência |
| created_at             | TEXT ISO 8601 | Data de registo                       |
| updated_at             | TEXT ISO 8601 | Data de atualização                   |
| deleted_at             | TEXT ISO 8601 | Null se ativa                         |

### Category (seed)

| Nome            | Tipo    |
| --------------- | ------- |
| Alimentação     | expense |
| Transportes     | expense |
| Habitação       | expense |
| Saúde           | expense |
| Lazer           | expense |
| Educação        | both    |
| Vestuário       | expense |
| Subscrições     | expense |
| Salário         | income  |
| Outras Receitas | income  |
| Investimentos   | both    |
| Outro           | both    |

---

## 3. Estrutura de Pastas

```
src/
├── app/                    # Navegação raiz (tabs, stack)
├── features/
│   ├── onboarding/
│   ├── dashboard/
│   ├── accounts/
│   └── transactions/
├── shared/
│   ├── components/         # Button, Card, FAB, Modal, Input, etc.
│   ├── hooks/              # Hooks genéricos
│   └── theme/             # Cores, tipografia, spacing
└── db/
    ├── schema.ts           # Definição das tabelas
    ├── migrations.ts      # Seed de categorias
    └── repositories/      # AccountRepository, TransactionRepository, CategoryRepository
```

---

## 4. Sprints

---

### Sprint 1: Setup + Navegação + Theme

**Objetivo:** Projeto criado, navegação funcional e tema base definido.

| Tarefa                                                     | Estimativa |
| ---------------------------------------------------------- | ---------- |
| Criar projeto Expo + TypeScript                            | 2h         |
| Configurar ESLint + Prettier                               | 1h         |
| Instalar dependências (navigation, sqlite, zustand)        | 1h         |
| Setup Bottom Tab Navigator (Dashboard, Contas, Transações) | 3h         |
| Setup Stack Navigators por tab                             | 2h         |
| Definir tema: cores, tipografia, spacing                   | 3h         |
| Configurar suporte a dark/light mode                       | 2h         |
| Verificar build inicial                                    | 1h         |

**Entregáveis:** App compila e navega entre tabs.

---

### Sprint 2: SQLite + Repositories

**Objetivo:** Base de dados configurada e repositories implementados.

| Tarefa                                                   | Estimativa |
| -------------------------------------------------------- | ---------- |
| Criar schema SQLite (accounts, transactions, categories) | 2h         |
| Implementar migrations (seed de categorias)              | 1h         |
| Implementar AccountRepository (CRUD completo)            | 3h         |
| Implementar TransactionRepository (CRUD completo)        | 3h         |
| Implementar CategoryRepository (list, getByType)         | 1h         |
| Criar store Zustand com dados carregados do SQLite       | 2h         |

**Entregáveis:** Dados persistidos em SQLite, repositories funcionais.

---

### Sprint 3: Componentes Base

**Objetivo:** Componentes partilhados prontos para usar.

| Tarefa                                          | Estimativa |
| ----------------------------------------------- | ---------- |
| Button (primário, secundário, outline, loading) | 2h         |
| Card (com shadow e padding)                     | 1h         |
| Input (text, number, com validação inline)      | 2h         |
| Select (dropdown para categorias e contas)      | 2h         |
| Modal (confirmações)                            | 1h         |
| FAB (floating action button)                    | 1h         |
| Toast (notificações temporárias)                | 1h         |
| EmptyState (estado vazio com CTA)               | 1h         |

**Entregáveis:** Biblioteca de componentes pronta.

---

### Sprint 4: CRUD Contas

**Objetivo:** Gestão completa de contas funcional.

| Tarefa                                            | Estimativa |
| ------------------------------------------------- | ---------- |
| Criar ecrã AccountsList                           | 2h         |
| Criar AccountCard (nome, saldo)                   | 1h         |
| Criar formulário NewAccount                       | 2h         |
| Criar formulário EditAccount                      | 2h         |
| Criar ecrã AccountDetail                          | 2h         |
| Implementar delete com confirmação                | 1h         |
| Hook useAccounts (listar, criar, editar, deletar) | 2h         |

**Entregáveis:** Criar, editar, eliminar contas funciona.

---

### Sprint 5: CRUD Transações

**Objetivo:** Gestão completa de transações funcional.

| Tarefa                                                | Estimativa |
| ----------------------------------------------------- | ---------- |
| Criar ecrã TransactionsList                           | 2h         |
| Criar TransactionCard (valor, tipo, categoria, data)  | 1h         |
| Criar formulário NewTransaction                       | 3h         |
| Criar formulário EditTransaction                      | 2h         |
| Implementar filtros básicos (Este mês / Tudo)         | 2h         |
| Hook useTransactions (listar, criar, editar, deletar) | 2h         |

**Entregáveis:** Criar, editar, eliminar transações funciona.

---

### Sprint 6: Transferências + Cálculos

**Objetivo:** Transferências entre contas e hooks de cálculo.

| Tarefa                                                          | Estimativa |
| --------------------------------------------------------------- | ---------- |
| Implementar lógica de transferência (cria 2 transações ligadas) | 3h         |
| Criar formulário NewTransfer                                    | 2h         |
| Hook useBalance(accountId)                                      | 1h         |
| Hook useTotalBalance()                                          | 1h         |
| Hook useMonthlySummary()                                        | 2h         |
| Hook useMonthlyComparison()                                     | 2h         |
| Hook useCategoryBreakdown()                                     | 2h         |
| Melhorar filtros Transactions (tipo, conta)                     | 2h         |

**Entregáveis:** Transferências funcionam, saldos calculados corretamente.

---

### Sprint 7: Dashboard

**Objetivo:** Dashboard com métricas e gráficos.

| Tarefa                                           | Estimativa |
| ------------------------------------------------ | ---------- |
| BalanceCard (saldo total)                        | 1h         |
| SummaryCard (receitas, despesas, balanço mensal) | 2h         |
| ComparisonCard (evolução vs mês anterior %)      | 1h         |
| ChartCard (gráfico de pizza - top 5 categorias)  | 3h         |
| RecentTransactionsCard (últimas 5 transações)    | 2h         |
| Layout completo do ecrã Dashboard                | 2h         |
| Conectar todos os hooks ao dashboard             | 2h         |

**Entregáveis:** Dashboard mostra todas as métricas.

---

### Sprint 8: Onboarding + Polish

**Objetivo:** Finalizar UX e preparação para release.

| Tarefa                                       | Estimativa |
| -------------------------------------------- | ---------- |
| Verificar primeira utilização (AsyncStorage) | 1h         |
| Criar ecrã Onboarding (3 ecrãs)              | 3h         |
| Criar conta default automática               | 1h         |
| Empty states em todos os ecrãs               | 2h         |
| Swipe-to-delete para transações              | 2h         |
| Undo toast após delete                       | 2h         |
| Animações de transição                       | 1h         |
| Testes end-to-end do fluxo completo          | 3h         |

**Entregáveis:** App pronta para MVP release.

---

## 5. Dependências

```json
{
  "expo": "^55.x",
  "react": "19.x",
  "react-native": "0.83.x",
  "@react-navigation/native": "^7.x",
  "@react-navigation/bottom-tabs": "^7.x",
  "@react-navigation/native-stack": "^7.x",
  "expo-sqlite": "latest",
  "react-native-gesture-handler": "^2.30.x",
  "react-native-safe-area-context": "^5.7.x",
  "react-native-screens": "^4.24.x",
  "@react-native-async-storage/async-storage": "latest",
  "zustand": "^5.x",
  "react-native-svg": "latest",
  "date-fns": "^4.x"
}
```

> **Nota:** Todas as dependências devem ser instaladas via `npx expo install` para garantir compatibilidade.

---

## 6. Critérios de Sucesso

- [ ] CRUD de contas funciona
- [ ] CRUD de transações funciona
- [ ] Transferências mantêm soma total correta
- [ ] Saldos calculados em tempo real
- [ ] Dashboard mostra métricas corretas
- [ ] Onboarding aparece apenas na primeira vez
- [ ] Conta default criada automaticamente
- [ ] Dados persistem após fechar app
- [ ] App funciona offline

---

_Plano de Desenvolvimento v2.0 — Refatorado (Março 2026)_
