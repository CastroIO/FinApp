# FinApp — Plano de Implementação

> Divisão do projeto em sprints com tarefas pequenas e concretas. Cada sprint resulta num incremento funcional.

---

## Sprint 1 — Setup e Fundação ✅ CONCLUÍDO

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 1.1 | Inicializar projeto Expo (TypeScript) | Projeto Expo a correr | ✅ |
| 1.2 | Instalar e configurar Nativewind | Tailwind a funcionar em RN | ✅ |
| 1.3 | Definir tema dark (colors, typography) | Arquivo `theme/` pronto | ✅ |
| 1.4 | Criar estrutura de pastas | `src/store/`, `src/database/`, etc. | ✅ |
| 1.5 | Definir tipos TypeScript (Account, Transaction, Category, Budget, RecurringTransaction) | `src/types/` | ✅ |
| 1.6 | Configurar expo-sqlite + migrações | BD inicializada | ✅ |
| 1.7 | Criar seeds (categorias predefinidas em inglês) | Categorias populadas | ✅ |
| 1.8 | Copiar componentes base do NativeUI (Button, Card, Input, Badge) | `src/components/ui/` | ✅ |

---

## Sprint 2 — Contas (CRUD)

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 2.1 | Criar accountRepository (create, getAll, getById, update, delete) | CRUD BD funcional | ⬜ |
| 2.2 | Criar useAccountStore (Zustand) | Estado em memória | ⬜ |
| 2.3 | Ecrã lista de contas (`contas/index.tsx`) | Lista com saldo por conta | ⬜ |
| 2.4 | Ecrã criar conta (`contas/nova.tsx`) | Formulário (nome, saldo inicial, cor) | ⬜ |
| 2.5 | Ecrã editar conta (`contas/[id].tsx`) | Edição + opção apagar | ⬜ |
| 2.6 | Picker de cores para conta | Seletor visual de cores | ⬜ |

---

## Sprint 3 — Transações (CRUD)

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 3.1 | Criar transactionRepository | CRUD BD funcional | ⬜ |
| 3.2 | Criar useTransactionStore | Estado em memória | ⬜ |
| 3.3 | Criar useCategoryStore + expor categorias | Categorias disponíveis | ⬜ |
| 3.4 | Ecrã criar transação (`transacao/nova.tsx`) | Formulário completo | ⬜ |
| 3.5 | Ecrã listar transações (`transacoes/index.tsx`) | Lista com data, valor, categoria | ⬜ |
| 3.6 | Ecrã detalhe/editar transação (`transacoes/[id].tsx`) | Detalhe + editar + apagar | ⬜ |
| 3.7 | Formatação (moeda EUR, data PT-PT) | `src/utils/formatters.ts` | ⬜ |
| 3.8 | Atualizar saldo da conta ao criar/editar/apagar transação | Lógica de saldo | ⬜ |

---

## Sprint 4 — Dashboard

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 4.1 | Componente Saldo Total | Card grande com valor | ⬜ |
| 4.2 | Componente Resumo Mensal (receitas vs despesas) | Cards separados | ⬜ |
| 4.3 | Componente Indicador vs Mês Anterior | Seta + percentagem | ⬜ |
| 4.4 | Componente Últimas Transações | Lista de 5-10 transações | ⬜ |
| 4.5 | Montar ecrã Dashboard | Todos os componentes juntos | ⬜ |
| 4.6 | Pull-to-refresh | Atualização de dados | ⬜ |

---

## Sprint 5 — Transferências

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 5.1 | Ecrã criar transferência (`transferencia/nova.tsx`) | Conta origem, destino, valor | ⬜ |
| 5.2 | Lógica de transferência (débito + crédito) | Dois movimentos criados | ⬜ |
| 5.3 | Visualizar transferências no histórico | Ícone identificador | ⬜ |

---

## Sprint 6 — Backup

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 6.1 | Definir schema JSON de backup | `src/types/backup.ts` | ⬜ |
| 6.2 | Implementar exportar backup | Ficheiro JSON + partilha | ⬜ |
| 6.3 | Implementar importar backup | Ler + validar + inserir | ⬜ |
| 6.4 | Ecrã configurações (`configuracoes/index.tsx`) | Botões exportar/importar | ⬜ |

---

## Sprint 7 — Onboarding

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 7.1 | Definir conteúdo dos 3 ecrãs | Texto + ícones | ⬜ |
| 7.2 | Criar componentes de onboarding | Swipeable pages | ⬜ |
| 7.3 | Lógica "primeira vez" (AsyncStorage) | Mostrar só no primeiro abrir | ⬜ |

---

## Sprint 8 — Orçamentos

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 8.1 | Criar budgetRepository | CRUD BD | ⬜ |
| 8.2 | Criar useBudgetStore | Estado em memória | ⬜ |
| 8.3 | Ecrã criar orçamento (`orcamentos/nova.tsx`) | Categoria + limite mensal | ⬜ |
| 8.4 | Ecrã listar orçamentos (`orcamentos/index.tsx`) | Barras de progresso | ⬜ |
| 8.5 | Lógica de alertas visuais (50%, 80%, 100%) | Cores por threshold | ⬜ |

---

## Sprint 9 — Transações Recorrentes

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 9.1 | Criar recurringRepository | CRUD BD | ⬜ |
| 9.2 | Criar useRecurringStore | Estado em memória | ⬜ |
| 9.3 | Ecrã criar transação recorrente | Formulário + frequência | ⬜ |
| 9.4 | Ecrã listar recorrentes | Ativas/inativas | ⬜ |
| 9.5 | Lógica de geração automática | Job ao abrir app | ⬜ |

---

## Sprint 10 — Polimento

| # | Tarefa | Resultado | Status |
|---|--------|-----------|--------|
| 10.1 | Filtros avançados transações | Por conta, categoria, período, tipo | ⬜ |
| 10.2 | Pesquisa por descrição | Search bar | ⬜ |
| 10.3 | Anexos (fotos de recibos) | expo-image-picker | ⬜ |
| 10.4 | Gráfico de despesas por categoria | Visual no dashboard | ⬜ |
| 10.5 | Ajustes finais de UI | Espaçamentos, tipografia, animações | ⬜ |

---

## Resumo

| Sprint | Foco | Tarefas | Status |
|--------|------|---------|--------|
| 1 | Fundação | 8 | ✅ Concluído |
| 2 | Contas | 6 | ⬜ Por fazer |
| 3 | Transações | 8 | ⬜ Por fazer |
| 4 | Dashboard | 6 | ⬜ Por fazer |
| 5 | Transferências | 3 | ⬜ Por fazer |
| 6 | Backup | 4 | ⬜ Por fazer |
| 7 | Onboarding | 3 | ⬜ Por fazer |
| 8 | Orçamentos | 5 | ⬜ Por fazer |
| 9 | Recorrentes | 5 | ⬜ Por fazer |
| 10 | Polimento | 5 | ⬜ Por fazer |
| **Total** | | **53 tarefas** | **1/10 sprints** |

---

## Legenda de Status

| Sígnificado | Símbolo |
|-------------|---------|
| Por fazer | ⬜ |
| Em progresso | 🔄 |
| Concluído | ✅ |
| Bloqueado | 🚫 |

---

> **Última atualização:** 24/03/2026
> Consultar SPEC.md para detalhes técnicos e modelo de dados.
