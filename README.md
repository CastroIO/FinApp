# FinApp — Documentação do Produto

---

## 1. Ideia & Base Original

### Problema
A maioria das pessoas tem dificuldade em acompanhar e controlar as suas finanças pessoais. Sem uma visão clara das receitas e despesas, torna-se difícil tomar decisões financeiras conscientes, criar hábitos de poupança ou trabalhar em direção a objetivos concretos.

### Público-Alvo
Pessoas com menor capacidade de organização financeira — desde jovens adultos que estão a gerir o seu primeiro orçamento, até utilizadores que simplesmente nunca encontraram uma ferramenta simples e intuitiva o suficiente para manterem o controlo das suas finanças do dia a dia.

### Solução
Uma aplicação mobile intuitiva que permite ao utilizador gerir as suas finanças pessoais de forma centralizada. A app suporta a criação de múltiplas contas (por exemplo: conta principal, fundo de férias, poupanças, fundo para compra de carro, entre outras), permitindo uma organização clara e separada de diferentes objetivos financeiros.

### Funcionalidades Centrais

**Contas**
- Cada conta tem um nome/descrição e um saldo total calculado automaticamente com base nas transações registadas.
- O utilizador pode criar tantas contas quantas precisar, cada uma representando um propósito financeiro distinto.

**Transações**
- Cada transação (despesa ou receita) contém:
  - **Valor** — montante da operação
  - **Tipo** — despesa ou receita
  - **Data** — data em que ocorreu
  - **Descrição** — nota livre sobre a transação
  - **Categoria** — classificação da operação (ex: alimentação, transporte, lazer, saúde, etc.)
  - **Conta associada** — a conta a que a transação pertence
  - **Imagens** — possibilidade de anexar fotografias (ex: recibos, faturas)

### Visão
Tornar a gestão financeira pessoal acessível a qualquer pessoa, independentemente do seu nível de literacia financeira, através de uma experiência simples, clara e motivadora.

---

## 2. Definição de MVP (Mínimo Produto Viável)

O objetivo do MVP é validar o fluxo central da aplicação: **criar uma conta → registar uma transação → ver o impacto no saldo**. Tudo o resto é secundário nesta fase.

### Ecrãs

| Ecrã | Descrição |
|---|---|
| **Dashboard** | Saldo total de todas as contas + resumo de receitas vs. despesas do mês atual |
| **Contas** | Lista de contas com saldo individual + criação de nova conta |
| **Transações** | Registo de nova transação + listagem das transações de uma conta |

### Dados de uma Conta

- Nome / descrição
- Saldo (calculado automaticamente pelas transações)

### Dados de uma Transação

- Valor
- Tipo (despesa / receita)
- Data
- Descrição
- Categoria (lista pré-definida, não editável pelo utilizador)
- Conta associada

### Categorias Pré-definidas

Alimentação, Transportes, Habitação, Saúde, Lazer, Educação, Vestuário, Outros.

### O que fica fora do MVP

- Anexo de imagens às transações
- Metas e planos de poupança
- Edição e eliminação de transações
- Notificações e alertas
- Autenticação de utilizadores
- Gestão de categorias pelo utilizador

---

## 3. Decisões Técnicas

### Plataforma
iOS e Android a partir de uma única codebase, compilando para código nativo em ambas as plataformas.

### Stack

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | React Native + Expo | Cross-platform, nativo, desenvolvimento rápido, maior comunidade mobile |
| Linguagem | TypeScript | Tipagem estática, menos erros em runtime, melhor experiência de desenvolvimento |
| Base de dados | SQLite via `expo-sqlite` | Local, leve, relacional, sem necessidade de internet |

### Princípios
- **Offline-first** — todos os dados são guardados localmente no dispositivo, sem dependência de servidores externos.
- **Uma codebase** — o mesmo código serve iOS e Android, reduzindo esforço de manutenção.

---

## 4. Design & UX

### Identidade Visual
- **Tema:** escuro moderno como base, com suporte a light mode seguindo as preferências do sistema
- **Paleta:** tons de azul como cor principal, verde para receitas, vermelho para despesas
- **Estilo:** minimalista, com cor usada como elemento de destaque

### Navegação
Tab bar em baixo com 3 tabs principais: **Dashboard**, **Contas**, **Transações**.

Um Floating Action Button (FAB) está sempre visível, com ação contextual dependendo do ecrã:

| Ecrã | Ação do FAB |
|---|---|
| Dashboard | Adicionar transação |
| Contas | Criar nova conta |
| Transações | Adicionar transação |
| Detalhe de conta | Adicionar transação nessa conta |

### Fluxo de Ecrãs

```
Tab Bar
├── Dashboard
│   ├── Saldo total de todas as contas
│   ├── Receitas vs. despesas do mês
│   ├── Gráfico de despesas por categoria
│   └── FAB → Novo ecrã: Nova Transação
│
├── Contas
│   ├── Lista de contas com saldo individual
│   ├── FAB → Novo ecrã: Nova Conta
│   └── Toque numa conta → Novo ecrã: Detalhe de Conta
│       ├── Lista de transações da conta
│       └── FAB → Novo ecrã: Nova Transação (pré-associada à conta)
│
└── Transações
    ├── Lista de todas as transações
    ├── FAB → Novo ecrã: Nova Transação
    └── Toque numa transação → Novo ecrã: Detalhe de Transação
```

---

## 5. Modelo de Dados

Todas as entidades são guardadas localmente em SQLite. O saldo de uma conta é sempre calculado em tempo real (`initial_balance + Σ income − Σ expenses`), garantindo consistência mesmo quando transações são editadas ou eliminadas no futuro.

### Account

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `name` | TEXT | Nome da conta |
| `initial_balance` | REAL | Saldo de partida (pode ser 0) |
| `created_at` | TEXT | Data de criação |

> O saldo atual não é guardado — é calculado dinamicamente a partir das transações.

### Transaction

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `account_id` | INTEGER FK | Referência à conta |
| `category_id` | INTEGER FK | Referência à categoria |
| `type` | TEXT | `expense` ou `income` |
| `amount` | REAL | Valor sempre positivo |
| `date` | TEXT | Data da operação |
| `description` | TEXT | Nota livre |
| `created_at` | TEXT | Data de registo |

### Category

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `name` | TEXT | Nome da categoria |
| `type` | TEXT | `expense`, `income` ou `both` |
| `icon` | TEXT | Para uso futuro na UI |

> As categorias são globais (partilhadas entre todas as contas) e pré-definidas no MVP. A gestão pelo utilizador está prevista para uma versão futura.

### Categorias Pré-definidas

| Nome | Tipo |
|---|---|
| Food | expense |
| Transport | expense |
| Housing | expense |
| Health | expense |
| Leisure | expense |
| Education | both |
| Clothing | expense |
| Salary | income |
| Other Income | income |
| Other | both |

### Notas Futuras
- **Transferências entre contas** — serão implementadas como um par de transações ligadas por um `transfer_id`: uma `expense` na conta de origem e uma `income` na conta de destino.
- **Categorias personalizadas** — o campo `type` já suporta esta evolução sem alterações ao schema.

---

## 6. Arquitetura do Código

### Padrão
Feature-based com MVVM simplificado — o código é organizado por funcionalidade, não por tipo de ficheiro. Cada feature é autónoma e contém os seus próprios ecrãs, componentes e lógica. O acesso aos dados é isolado numa camada de repositórios, separando completamente a base de dados da UI.

### Estrutura de Pastas

```
src/
├── app/                  # Navegação e layout raiz (tabs, stack)
├── features/
│   ├── dashboard/
│   │   ├── components/   # Componentes visuais da feature
│   │   ├── hooks/        # Lógica de negócio (useViewModel)
│   │   └── screen.tsx    # Ecrã principal
│   ├── accounts/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── screen.tsx
│   └── transactions/
│       ├── components/
│       ├── hooks/
│       └── screen.tsx
├── shared/
│   ├── components/       # Componentes reutilizáveis (Button, Card, FAB...)
│   ├── hooks/            # Hooks genéricos
│   └── theme/            # Cores, tipografia, espaçamentos
└── db/
    ├── schema.ts         # Definição das tabelas SQLite
    └── repositories/     # Acesso aos dados (AccountRepository, TransactionRepository...)
```

### Princípios
- **Feature-first** — cada funcionalidade vive na sua própria pasta, fácil de localizar e expandir
- **Repositórios** — toda a lógica de acesso à base de dados está isolada em `db/repositories/`, nunca diretamente nos componentes ou ecrãs
- **Shared** — componentes e utilitários reutilizáveis entre features vivem em `shared/`, evitando duplicação

---

*Documento em construção — sujeito a alterações à medida que o produto evolui.*
