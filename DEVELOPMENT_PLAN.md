# FinApp — Plano de Desenvolvimento

---

## 🎯 Objetivo Geral

Implementar um MVP funcional de uma aplicação de gestão financeira pessoal em React Native + Expo, com suporte a múltiplas contas, transações e transferências entre contas, tudo guardado localmente em SQLite.

**Timeline Estimada:** 3 sprints (3-4 semanas)

---

## 📊 Estrutura de Sprints

### Sprint 1: Fundações & CRUD Base (1-1.5 semanas)

**Objetivo:** Setup do projeto, navegação, e operações básicas de CRUD para contas e transações.

#### Tarefas

| ID | Tarefa | Estimativa | Prioridade |
|---|---|---|---|
| 1.1 | Configurar React Native + Expo com TypeScript | 2h | 🔴 Alta |
| 1.2 | Setup de navegação (Tab Bar + Stack Navigator) | 3h | 🔴 Alta |
| 1.3 | Criar estrutura de pastas (features, shared, db) | 1h | 🔴 Alta |
| 1.4 | Definir tema visual (cores, tipografia, spacing) | 2h | 🟠 Média |
| 1.5 | Criar componentes shared (Button, Card, Input, Modal) | 4h | 🔴 Alta |
| 1.6 | Implementar SQLite schema (Account, Transaction, Category) | 3h | 🔴 Alta |
| 1.7 | Criar AccountRepository (CRUD de contas) | 3h | 🔴 Alta |
| 1.8 | Criar TransactionRepository (CRUD de transações) | 3h | 🔴 Alta |
| 1.9 | Criar CategoryRepository (seed de categorias) | 2h | 🔴 Alta |
| 1.10 | Implementar hook `useAccounts` (listar, criar, editar, deletar) | 2h | 🔴 Alta |
| 1.11 | Implementar hook `useTransactions` (listar, criar, editar, deletar) | 2h | 🔴 Alta |
| 1.12 | Criar ecrã Accounts (lista + FAB para criar conta) | 3h | 🔴 Alta |
| 1.13 | Criar formulário NewAccount (criar conta) | 2h | 🔴 Alta |
| 1.14 | Criar ecrã Transactions (lista com filtros básicos) | 3h | 🔴 Alta |
| 1.15 | Criar formulário NewTransaction (criar transação simples) | 3h | 🔴 Alta |
| 1.16 | Testes: CRUD de contas e transações | 3h | 🟠 Média |

**Total Sprint 1:** ~42 horas

**Entregáveis:**
- ✅ Navegação funcional (3 tabs)
- ✅ CRUD de contas (criar, listar, editar, deletar)
- ✅ CRUD de transações (criar, listar, editar, deletar)
- ✅ SQLite com dados persistidos
- ✅ Componentes básicos prontos

---

### Sprint 2: Transferências, Dashboard & Filtros (1-1.5 semanas)

**Objetivo:** Implementar transferências entre contas, dashboard com métricas e filtros avançados.

#### Tarefas

| ID | Tarefa | Estimativa | Prioridade |
|---|---|---|---|
| 2.1 | Implementar lógica de transferências (criar 2 transações ligadas) | 3h | 🔴 Alta |
| 2.2 | Criar formulário NewTransfer (interface para transferências) | 2h | 🔴 Alta |
| 2.3 | Integrar transferências no formulário de transações | 2h | 🔴 Alta |
| 2.4 | Implementar hook `useBalance` (calcular saldo de conta) | 2h | 🔴 Alta |
| 2.5 | Implementar hook `useTotalBalance` (saldo total) | 1h | 🔴 Alta |
| 2.6 | Implementar hook `useMonthlySummary` (receitas, despesas, balanço) | 2h | 🔴 Alta |
| 2.7 | Implementar hook `useMonthlyComparison` (evolução vs mês anterior) | 2h | 🔴 Alta |
| 2.8 | Implementar hook `useCategoryBreakdown` (despesas por categoria) | 2h | 🔴 Alta |
| 2.9 | Criar componentes Dashboard (BalanceCard, SummaryCard, ChartCard) | 4h | 🟠 Média |
| 2.10 | Criar ecrã Dashboard (layout completo com todos os dados) | 3h | 🔴 Alta |
| 2.11 | Implementar filtros (por data, tipo, conta) no ecrã Transactions | 3h | 🟠 Média |
| 2.12 | Criar ecrã AccountDetail (com lista de transações filtradas) | 2h | 🔴 Alta |
| 2.13 | Criar formulário EditAccount (editar nome/saldo inicial) | 2h | 🔴 Alta |
| 2.14 | Melhorar UX com confirmações de delete, feedback visual | 2h | 🟠 Média |
| 2.15 | Testes: Transferências, cálculos de saldo, filtros | 3h | 🟠 Média |

**Total Sprint 2:** ~35 horas

**Entregáveis:**
- ✅ Transferências entre contas totalmente funcionais
- ✅ Dashboard com métricas completas (saldo, receitas, despesas, balanço, gráfico)
- ✅ Filtros avançados (data, tipo, conta)
- ✅ Detalhe de conta com transações filtradas
- ✅ Edição de contas

---

### Sprint 3: Onboarding, Polish & Testes Finais (1-1.5 semanas)

**Objetivo:** Finalizar a aplicação com onboarding, conta default automática, micro-interações e testes completos.

#### Tarefas

| ID | Tarefa | Estimativa | Prioridade |
|---|---|---|---|
| 3.1 | Implementar verificação de primeira utilização (localStorage/preferences) | 1h | 🔴 Alta |
| 3.2 | Criar ecrã Onboarding (2-3 ecrãs explicativos) | 3h | 🟠 Média |
| 3.3 | Implementar conta default automática ("Carteira Principal") | 1h | 🔴 Alta |
| 3.4 | Criar empty states para todos os ecrãs | 2h | 🟠 Média |
| 3.5 | Implementar swipe-to-delete para transações | 2h | 🟠 Média |
| 3.6 | Adicionar haptic feedback em ações críticas | 1h | 🟠 Média |
| 3.7 | Implementar animações de transição suave | 2h | 🟠 Média |
| 3.8 | Implementar undo rápido para delete (toast notification) | 2h | 🟠 Média |
| 3.9 | Testar responsividade em múltiplos tamanhos de ecrã | 2h | 🟠 Média |
| 3.10 | Testes end-to-end: fluxo completo (onboarding → criar conta → transação) | 3h | 🔴 Alta |
| 3.11 | Testes de performance (cálculos com muitas transações) | 2h | 🟠 Média |
| 3.12 | Bug fixing e refinamento de UX | 4h | 🟠 Média |
| 3.13 | Documentação de deployment e build | 1h | 🟠 Média |
| 3.14 | Preparar para production (otimizar bundle, remover logs debug) | 2h | 🟠 Média |

**Total Sprint 3:** ~28 horas

**Entregáveis:**
- ✅ Onboarding completo (apenas primeira vez)
- ✅ Conta default automática criada no primeiro acesso
- ✅ Empty states em todos os ecrãs
- ✅ Micro-interações (swipe, haptic, animações)
- ✅ Aplicação pronta para MVP release
- ✅ Documentação de deployment

---

## 📋 Detalhamento Técnico por Sprint

### Sprint 1: Fundações

#### 1.1 - Setup do Projeto
- Criar novo projeto Expo com `expo init FinApp`
- Configurar TypeScript
- Instalar dependências: `@react-navigation/*`, `expo-sqlite`, `zustand` (ou Context API)
- Setup de ESLint e Prettier

#### 1.2 - Navegação
- Implementar Bottom Tab Navigator com 3 tabs (Dashboard, Contas, Transações)
- Cada tab com seu próprio Stack Navigator
- Suporte a deep linking básico

#### 1.3 - Estrutura de Pastas
```
src/
├── features/
│   ├── dashboard/
│   ├── accounts/
│   ├── transactions/
│   └── onboarding/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── theme/
├── db/
│   ├── schema.ts
│   └── repositories/
├── utils/
└── types/
```

#### 1.4 - Tema Visual
- Definir paleta de cores (azul primária, verde receitas, vermelho despesas, cinzento transferências)
- Tipografia (Roboto/SF Pro Display)
- Sistema de spacing (8px base)
- Temas dark/light (seguir preferência do sistema)

#### 1.5 - Componentes Shared
- `Button` — primário, secundário, outline
- `Card` — com shadow e padding
- `Input` — text, number, com validação inline
- `Select` — dropdown para categorias e contas
- `Modal` — para confirmações
- `FAB` — floating action button com ações contextuais
- `Toast` — notificações temporárias

#### 1.6 - SQLite Schema
```sql
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  initial_balance REAL NOT NULL,
  is_default BOOLEAN DEFAULT 0,
  created_at TEXT NOT NULL,
  deleted_at TEXT
);

CREATE TABLE transactions (
  id INTEGER PRIMARY KEY,
  account_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  type TEXT NOT NULL, -- 'expense', 'income', 'transfer'
  amount REAL NOT NULL,
  date TEXT NOT NULL,
  description TEXT,
  destination_account_id INTEGER,
  transfer_id TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  deleted_at TEXT,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL, -- 'expense', 'income', 'both'
  icon TEXT,
  display_order INTEGER
);
```

#### 1.7-1.9 - Repositórios
- `AccountRepository`: create, read, update, delete, list, getBalance
- `TransactionRepository`: create, read, update, delete, list, listByAccount, getByType
- `CategoryRepository`: list, seed (pré-definidas)

#### 1.10-1.11 - Custom Hooks
- `useAccounts()`: retorna lista de contas, funções CRUD
- `useTransactions()`: retorna lista de transações, funções CRUD
- Usar Context API ou Zustand para state management

#### 1.12-1.15 - Ecrãs & Formulários
- Ecrã Accounts: lista com FAB, toque para detalhe
- Formulário NewAccount: inputs para nome e saldo inicial
- Ecrã Transactions: lista com filtros básicos (Este mês / Tudo)
- Formulário NewTransaction: inputs para valor, tipo, data, descrição, categoria, conta

---

### Sprint 2: Transferências & Dashboard

#### 2.1-2.3 - Lógica de Transferências
- Função que cria 2 transações ligadas (mesmo `transfer_id`)
- Uma é `expense` na conta origem
- Uma é `income` na conta destino
- Validar que conta destino ≠ conta origem

#### 2.4-2.8 - Hooks de Cálculos
- `useBalance(accountId)`: calcula saldo de uma conta
- `useTotalBalance()`: soma saldos de todas as contas ativas
- `useMonthlySummary()`: total receitas, despesas, balanço do mês atual
- `useMonthlyComparison()`: percentagem de evolução vs mês anterior
- `useCategoryBreakdown()`: agrupa despesas por categoria, top 5

#### 2.9-2.10 - Dashboard
- BalanceCard: exibe saldo total com mudança de cor (verde/vermelho)
- SummaryCard: receitas, despesas, balanço do mês
- ComparisonCard: evolução vs mês anterior em %
- ChartCard: gráfico de pizza (top 5 categorias)
- RecentTransactionsCard: últimas 5 transações
- Ecrã principal: layout com todos os cards

#### 2.11-2.13 - Filtros & Detalhe de Conta
- Filtros no ecrã Transactions: por data (Este mês / 3 meses / Tudo), tipo, conta
- Ecrã AccountDetail: nome da conta, saldo, lista de transações, botão editar, botão deletar
- Formulário EditAccount: editar nome e saldo inicial

#### 2.14 - UX Improvements
- Modal de confirmação para delete
- Feedback visual (toast) após ações bem-sucedidas
- Desabilitar botão enquanto aguarda resposta do banco de dados
- Indicador de carregamento

#### 2.15 - Testes
- Testes de cálculo de saldo com múltiplas transações
- Verificar que transferências mantêm soma total igual
- Testar filtros (data, tipo, conta)
- Edge cases (conta vazia, transação futura bloqueada, etc.)

---

### Sprint 3: Onboarding & Polish

#### 3.1-3.3 - Onboarding & Conta Default
- Verificar `@react-native-async-storage/async-storage` para persistir "first_time_user"
- Se primeira vez, mostrar ecrã de onboarding antes da navegação
- Criar conta default "Carteira Principal" automaticamente
- Marcar como `is_default = true`

#### 3.2 - Ecrã Onboarding
- Ecrã 1: "Bem-vindo ao FinApp"
- Ecrã 2: "Gerencie múltiplas contas"
- Ecrã 3: "Controle suas despesas"
- Botões de navegação (próximo, ignorar)
- Animações suaves

#### 3.4 - Empty States
- Quando não há contas: "Crie sua primeira conta"
- Quando não há transações: "Nenhuma transação registrada"
- Quando não há dados no dashboard: "Comece adicionando uma transação"
- Cada empty state com CTA clara (botão FAB destacado)

#### 3.5-3.8 - Micro-interações
- Swipe-to-delete em linhas de transação
- Undo toast que aparece por 5s
- Haptic feedback em: delete, criar, editar
- Animações de entrada de modal e navegação
- Loading spinner em operações assíncronas

#### 3.9-3.14 - Testes & Finalização
- Testar em múltiplos tamanhos de ecrã (iPhone, Android)
- Verificar performance com muitos dados (1000+ transações)
- Testes end-to-end: onboarding → criar conta → adicionar transação → ver dashboard
- Remover logs de debug
- Otimizar bundle size
- Documentar como buildar e fazer deploy

---

## 🔄 Fluxo de Desenvolvimento

### Cada Sprint Segue:

1. **Kickoff** — review das tarefas, estimativas, dependências
2. **Desenvolvimento** — implementação das tarefas em paralelo onde possível
3. **Integração** — merge de features, testes de integração
4. **QA & Polish** — bug fixes, micro-ajustes, performance
5. **Retrospectiva** — o que funcionou bem, o que melhorar

---

## 📦 Dependências Externas

### Necessárias (MVP)
```json
{
  "react": "^18.3.1",
  "react-native": "^0.73.x",
  "expo": "^50.x",
  "@react-navigation/bottom-tabs": "^6.x",
  "@react-navigation/native": "^6.x",
  "@react-navigation/stack": "^6.x",
  "expo-sqlite": "^13.x",
  "react-native-gesture-handler": "^2.x",
  "react-native-reanimated": "^3.x",
  "@react-native-async-storage/async-storage": "^1.x",
  "zustand": "^4.x",
  "react-native-svg": "^13.x",
  "date-fns": "^2.x"
}
```

### Opcionais (para micro-interações)
- `react-native-haptic-feedback` — feedback tátil
- `react-native-swiper-list` — swipe-to-delete
- `react-native-charts-wrapper` — gráficos avançados

---

## ✅ Critérios de Sucesso do MVP

- [ ] Criar múltiplas contas
- [ ] Editar e deletar contas
- [ ] Criar, editar, deletar transações
- [ ] Transferências entre contas funcionam corretamente
- [ ] Saldo calculado corretamente em tempo real
- [ ] Dashboard mostra métricas do mês atual
- [ ] Filtros funcionam (data, tipo, conta)
- [ ] Onboarding exibe apenas primeira vez
- [ ] Conta default criada automaticamente
- [ ] Dados persistem após fechar e reabrir app
- [ ] Aplicação funciona offline
- [ ] UI é responsiva (múltiplos tamanhos de ecrã)
- [ ] Nenhum erro de console ou crash

---

## 🚀 Próximos Passos Após MVP

1. **MVP+1:** Backup/export de dados, relatórios, melhorias de UX
2. **MVP+2:** Autenticação local, sincronização em cloud
3. **MVP+3:** Metas de poupança, anexo de imagens, categorias personalizadas

---

## 📞 Notas Importantes

- **Data Importante:** Datas futuras devem ser bloqueadas (máximo: hoje)
- **Soft Delete:** Usar `deleted_at` para permitir undo
- **Cálculos:** Sempre em tempo real, nunca cachear saldos
- **Testes:** Implementar testes unitários desde o Sprint 1
- **Git:** Commits pequenos e descritivos

---

*Plano de Desenvolvimento — Versão 1.0 (Março 2026)*
