# FinApp - Especificação do Projeto

> Documento base para desenvolvimento. Qualquer agente ou pessoa deve consultar este ficheiro antes de implementar funcionalidades.

---

## 1. Visão Geral

| Campo | Valor |
|-------|-------|
| **Nome** | FinApp |
| **Tipo** | Aplicação de gestão financeira pessoal |
| **Princípio** | Offline-first, simplicidade, usabilidade |
| **Moeda** | EUR (apenas) |
| **Plataformas** | iOS + Android |
| **Autenticação** | Nenhuma |

---

## 2. Stack Tecnológica

| Camada | Tecnologia | Notas |
|--------|------------|-------|
| **Framework** | React Native + Expo SDK 52+ | Expo Router para navegação |
| **Linguagem** | TypeScript | Strict mode |
| **UI Kit** | NativeUI | Modelo copy-paste (como shadcn/ui) |
| **CSS** | Nativewind (Tailwind CSS para RN) | Para estilos e theming |
| **Navegação** | Expo Router | File-based routing |
| **Estado** | Zustand | Estado em memória |
| **Base de Dados** | expo-sqlite | Persistência local |
| **Ícones** | Lucide React Native | Mesmo conjunto usado pelo NativeUI |
| **Imagens** | expo-image-picker | Para anexos (recibos, etc.) |
| **Backup** | expo-file-system + expo-sharing | Exportar/importar JSON |

---

## 3. Design System

### 3.1 Tema

| Propriedade | Valor |
|-------------|-------|
| **Estilo** | Minimalista |
| **Tema** | Dark (por defeito) |
| **Tipografia** | Inter ou similar |
| **Cantos** | Arredondados (8-12px) |

### 3.2 Paleta de Cores

| Uso | Cor | Hex |
|-----|-----|-----|
| **Primária** | Azul | `#3B82F6` |
| **Receitas** | Verde | `#22C55E` |
| **Despesas** | Vermelho | `#EF4444` |
| **Aviso/orçamento** | Laranja | `#F97316` |
| **Fundo principal** | Cinza escuro | `#0F0F0F` |
| **Card** | Cinza | `#1A1A1A` |
| **Texto principal** | Branco | `#FFFFFF` |
| **Texto secundário** | Cinza claro | `#A1A1AA` |
| **Borda** | Cinza | `#27272A` |

### 3.3 Componentes (do NativeUI)

Button, Card, Input, Badge, Switch, Dialog, Toast, List, Tabs, Select

---

## 4. Funcionalidades

### 4.1 Dashboard
- Saldo total (destaque)
- Resumo mensal: receitas vs despesas
- Gráfico por categoria
- Indicador vs mês anterior
- Últimas transações
- Pull-to-refresh

### 4.2 Contas
- **Campos:** nome, saldo inicial, cor, ícone (opcional)
- Mínimo 1 conta, não é possível apagar a última

### 4.3 Transações
- **Campos:** valor, tipo (receita/despesa/transferência), categoria, conta, data, descrição, anexos (opcional)

**Categorias predefinidas:**

| Receitas | Despesas |
|----------|----------|
| Salário | Habitação |
| Freelance | Alimentação |
| Presentes | Transporte |
| Outros | Saúde |
| | Lazer |
| | Educação |
| | Vestuário |
| | Utilidades |
| | Subscrições |
| | Outros |

Utilizador pode criar categorias personalizadas (sem hierarquia).

### 4.4 Transferências
- Conta origem → conta destino
- Cria duas transações internas (débito + crédito)

### 4.5 Transações Recorrentes
- Frequência: diária, semanal, mensal, anual
- Data início e fim opcional
- Job gera transações automaticamente

### 4.6 Orçamentos
- Limite mensal por categoria
- Visual: barra de progresso com cores
  - < 50%: neutro
  - 50-80%: amarelo
  - 80-100%: laranja (highlight)
  - > 100%: vermelho forte
- **Nunca impede** o registo de despesas

### 4.7 Backup
- **Exportar:** JSON no dispositivo (expo-sharing para partilhar)
- **Importar:** ler JSON do dispositivo, validar, merge ou substituir

---

## 5. Ecrãs e Navegação

```
app/
├── _layout.tsx                 # Root layout (providers, tema)
├── onboarding/
│   └── index.tsx               # 3 ecrãs (primeira vez)
├── (tabs)/
│   ├── _layout.tsx             # Bottom tabs
│   ├── index.tsx               # Dashboard
│   ├── contas/
│   │   ├── index.tsx           # Lista contas
│   │   ├── nova.tsx
│   │   └── [id].tsx
│   ├── transacoes/
│   │   ├── index.tsx           # Lista com filtros
│   │   └── [id].tsx
│   └── configuracoes/
│       └── index.tsx
├── transacao/
│   ├── nova.tsx
│   └── editar/[id].tsx
├── transferencia/
│   └── nova.tsx
└── orcamentos/
    ├── index.tsx
    └── nova.tsx
```

---

## 6. Modelo de Dados (Schema SQLite)

### 6.1 Tabela categories

| Coluna | Tipo | Constraints |
|--------|------|-------------|
| id | TEXT | PRIMARY KEY |
| name | TEXT | NOT NULL |
| type | TEXT | NOT NULL, CHECK IN ('income', 'expense') |
| icon | TEXT | |
| is_custom | INTEGER | NOT NULL, DEFAULT 0 |
| sort_order | INTEGER | NOT NULL, DEFAULT 0 |

### 6.2 Tabela accounts

| Coluna | Tipo | Constraints |
|--------|------|-------------|
| id | TEXT | PRIMARY KEY |
| name | TEXT | NOT NULL |
| balance | REAL | NOT NULL, DEFAULT 0 |
| color | TEXT | NOT NULL |
| icon | TEXT | |
| created_at | TEXT | NOT NULL, DEFAULT datetime('now') |
| updated_at | TEXT | NOT NULL, DEFAULT datetime('now') |
| is_deleted | INTEGER | NOT NULL, DEFAULT 0 |

### 6.3 Tabela transactions

| Coluna | Tipo | Constraints |
|--------|------|-------------|
| id | TEXT | PRIMARY KEY |
| account_id | TEXT | NOT NULL, FK -> accounts(id) |
| category_id | TEXT | FK -> categories(id) |
| type | TEXT | NOT NULL, CHECK IN ('income', 'expense', 'transfer') |
| amount | REAL | NOT NULL |
| description | TEXT | |
| date | TEXT | NOT NULL |
| attachment_path | TEXT | |
| transfer_id | TEXT | |
| created_at | TEXT | NOT NULL, DEFAULT datetime('now') |
| updated_at | TEXT | NOT NULL, DEFAULT datetime('now') |
| is_deleted | INTEGER | NOT NULL, DEFAULT 0 |

### 6.4 Tabela recurring_transactions

| Coluna | Tipo | Constraints |
|--------|------|-------------|
| id | TEXT | PRIMARY KEY |
| account_id | TEXT | NOT NULL, FK -> accounts(id) |
| category_id | TEXT | FK -> categories(id) |
| type | TEXT | NOT NULL, CHECK IN ('income', 'expense') |
| amount | REAL | NOT NULL |
| description | TEXT | |
| frequency | TEXT | NOT NULL, CHECK IN ('daily', 'weekly', 'monthly', 'yearly') |
| start_date | TEXT | NOT NULL |
| end_date | TEXT | |
| is_active | INTEGER | NOT NULL, DEFAULT 1 |
| created_at | TEXT | NOT NULL, DEFAULT datetime('now') |

### 6.5 Tabela budgets

| Coluna | Tipo | Constraints |
|--------|------|-------------|
| id | TEXT | PRIMARY KEY |
| category_id | TEXT | NOT NULL, FK -> categories(id) |
| limit_amount | REAL | NOT NULL |
| month | INTEGER | NOT NULL |
| year | INTEGER | NOT NULL |
| created_at | TEXT | NOT NULL, DEFAULT datetime('now') |
| | | UNIQUE(category_id, month, year) |

---

## 7. Regras de Negócio

### 7.1 Saldo de Conta
- Ao criar transação de despesa: `saldo -= valor`
- Ao criar transação de receita: `saldo += valor`
- Ao transferir: `conta_origem -= valor` + `conta_destino += valor`
- Editar/apagar transação: recalcular saldo

### 7.2 Orçamentos
- Orçamento aplica-se ao mês atual por defeito
- Validação: valor limite > 0
- Não permite duplicados (mesma categoria + mesmo mês/ano)

### 7.3 Transações Recorrentes
- Gerar transação automaticamente na data de vencimento
- Se end_date definido e data atual > end_date: desativar
- Poder desativar/reactivar manualmente

---

## 8. Formatação (Português)

| Item | Formato |
|------|---------|
| **Moeda** | `1.250,00 €` |
| **Data** | DD/MM/YYYY |
| **Decimal** | vírgula (`,`), milhar (`.`) |
| **Idioma** | PT-PT |

---

## 9. Estrutura de Código

```
src/
├── store/
│   ├── useAccountStore.ts
│   ├── useTransactionStore.ts
│   ├── useCategoryStore.ts
│   ├── useBudgetStore.ts
│   ├── useRecurringStore.ts
│   └── useSettingsStore.ts
│
├── database/
│   ├── connection.ts
│   ├── migrations.ts
│   ├── seeds.ts
│   └── repositories/
│       ├── accountRepository.ts
│       ├── transactionRepository.ts
│       ├── categoryRepository.ts
│       ├── budgetRepository.ts
│       └── recurringRepository.ts
│
├── components/
│   └── ui/               # Componentes do NativeUI copiados
│
├── theme/
│   ├── colors.ts
│   ├── typography.ts
│   └── index.ts
│
└── utils/
    ├── formatters.ts     # Formatação de moeda, data
    └── constants.ts
```

---

## 10. Fases de Implementação

### Fase 1 — MVP (Core)
1. Setup do projeto (Expo + TypeScript + Nativewind + SQLite)
2. Tema dark + componentes base do NativeUI
3. Categorias predefinidas (seeds)
4. Contas (CRUD)
5. Transações (criar, listar, editar, apagar)
6. Dashboard básico (saldo, resumo, últimas transações)
7. Backup exportar JSON

### Fase 2 — Funcionalidades
8. Filtros e pesquisa de transações
9. Transferências entre contas
10. Onboarding (3 ecrãs)
11. Importar backup JSON
12. Anexos (fotos)

### Fase 3 — Avançadas
13. Orçamentos por categoria
14. Transações recorrentes
15. Gráficos detalhados
16. Notificações

---

## 11. Referências

| Recurso | URL |
|---------|-----|
| NativeUI | https://nativeui.io |
| Expo Router | https://docs.expo.dev/router/introduction |
| Nativewind | https://www.nativewind.dev |
| Zustand | https://docs.pmnd.rs/zustand |
| expo-sqlite | https://docs.expo.dev/versions/latest/sdk/sqlite |
| Lucide Icons | https://lucide.dev/icons |

---

> **Última atualização:** 24/03/2026
> Este documento é a fonte da verdade para o projeto. Atualizar sempre que houver decisões novas.
