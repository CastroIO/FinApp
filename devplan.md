# FinApp — Plano de Desenvolvimento

Plano dividido em sprints progressivos, cada um com um objetivo claro e entregável. A ordem é intencional — cada sprint depende do anterior.

---

## Sprint 1 — Fundações

**Objetivo:** a app abre, navega entre tabs, tem o visual correto e a base de dados está pronta.

- Setup do projeto (React Native + Expo + TypeScript)
- Estrutura de pastas conforme arquitetura definida
- Tema global: cores, tipografia, espaçamentos, dark/light mode
- Navegação base: tab bar em baixo + stack navigator
- Floating Action Button (FAB) contextual
- Schema da base de dados (Account, Transaction, Category)
- Repositórios base (AccountRepository, TransactionRepository)
- Seed das categorias pré-definidas

---

## Sprint 2 — Contas

**Objetivo:** é possível criar contas e ver o seu saldo.

- Ecrã de lista de contas com saldo individual
- Ecrã de criação de nova conta
- Ecrã de detalhe de conta (com lista de transações associadas)
- Lógica de cálculo de saldo em tempo real (`initial_balance + Σ income − Σ expenses`)

---

## Sprint 3 — Transações

**Objetivo:** fluxo central completo — criar conta → adicionar transação → ver saldo atualizado.

- Ecrã de lista de todas as transações
- Ecrã de criação de transação (conta, categoria, tipo, valor, data, descrição)
- Ecrã de detalhe de transação
- Filtragem de categorias por tipo (expense / income) no formulário
- Atualização do saldo da conta após cada transação

---

## Sprint 4 — Dashboard

**Objetivo:** MVP completo e funcional.

- Saldo total de todas as contas
- Resumo do mês: receitas vs. despesas
- Gráfico de despesas por categoria do mês atual

---

## Sprint 5 — Polish & Qualidade

**Objetivo:** app pronta para ser mostrada / publicada.

- Refinamento visual geral
- Animações e micro-interações
- Estados vazios (sem contas, sem transações)
- Validações nos formulários
- Testes manuais em iOS e Android

---

*Este plano é flexível e pode ser ajustado à medida que o desenvolvimento avança.*
