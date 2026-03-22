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
- O utilizador pode editar o nome e saldo inicial de uma conta.
- O utilizador pode eliminar uma conta (com confirmação).

**Transações**
- Cada transação (despesa, receita ou transferência) contém:
  - **Valor** — montante da operação (sempre positivo)
  - **Tipo** — despesa, receita ou transferência
  - **Data** — data em que ocorreu (máximo: hoje)
  - **Descrição** — nota livre sobre a transação
  - **Categoria** — classificação da operação (ex: alimentação, transporte, lazer, saúde, etc.)
  - **Conta associada** — a conta a que a transação pertence
  - **Conta destino** (apenas transferências) — conta para a qual o valor é transferido
- O utilizador pode editar uma transação registada.
- O utilizador pode eliminar uma transação (com confirmação).
- As transações futuras são bloqueadas; apenas transações passadas (até hoje) são permitidas.

**Transferências Entre Contas**
- Transferências são um tipo especial de transação que automaticamente:
  - Debitam valor da conta de origem
  - Creditam o mesmo valor na conta de destino
  - Aparecem ligadas nas duas contas com referência comum
  - Mantêm a soma total de dinheiro invariável (apenas movem entre contas)

### Visão
Tornar a gestão financeira pessoal acessível a qualquer pessoa, independentemente do seu nível de literacia financeira, através de uma experiência simples, clara e motivadora.

---

## 2. Definição de MVP (Mínimo Produto Viável)

O objetivo do MVP é validar o fluxo central da aplicação: **criar uma conta → registar uma transação → editar/eliminar se necessário → ver o impacto no saldo**. O MVP deve ser totalmente funcional para uso real, incluindo correção de erros.

### Ecrãs

| Ecrã | Descrição |
|---|---|
| **Onboarding** | 2-3 ecrãs simples explicando a app (exibido apenas no primeiro uso) |
| **Dashboard** | Saldo total de todas as contas + resumo de receitas vs. despesas do mês atual + evolução vs. mês anterior + gráfico de despesas por categoria |
| **Contas** | Lista de contas com saldo individual + criação de nova conta |
| **Detalhe de Conta** | Lista de transações da conta + edição de nome/saldo inicial + eliminação da conta |
| **Transações** | Registo de nova transação + listagem de todas as transações com filtros |
| **Novo/Editar Transação** | Formulário para criar ou editar uma transação |
| **Novo/Editar Conta** | Formulário para criar ou editar uma conta |

### Dados de uma Conta

- Nome / descrição (1-50 caracteres)
- Saldo inicial (pode ser 0, valor não negativo)
- Saldo atual (calculado automaticamente: `initial_balance + Σ income − Σ expenses`)
- Data de criação

### Dados de uma Transação

- Valor (maior que 0)
- Tipo (despesa / receita / transferência)
- Data (máximo hoje; permite datas passadas)
- Descrição (máximo 200 caracteres)
- Categoria (lista pré-definida, não editável pelo utilizador)
- Conta associada
- Conta destino (apenas para transferências)
- ID de transferência (para ligar duas transações no caso de transferências)

### Categorias Pré-definidas

| Categoria | Tipo | Descrição |
|---|---|---|
| Alimentação | despesa | Comida, supermercado, restaurantes |
| Transportes | despesa | Combustível, transportes públicos, táxi |
| Habitação | despesa | Renda, condomínio, serviços de casa |
| Saúde | despesa | Farmácia, consultas, saúde geral |
| Lazer | despesa | Cinema, viagens, atividades recreativas |
| Educação | ambos | Cursos, formação |
| Vestuário | despesa | Roupas, acessórios |
| Subscrições | despesa | Netflix, Spotify, planos mensais |
| Salário | receita | Ordenado, salário principal |
| Outras Receitas | receita | Freelance, bónus, presentes |
| Investimentos | receita/despesa | Ações, depósitos, aplicações financeiras |
| Outro | ambos | Despesas ou receitas que não se encaixam |

### O que fica fora do MVP

- Anexo de imagens às transações
- Metas e planos de poupança
- Autenticação de utilizadores e sincronização em cloud
- Gestão de categorias pelo utilizador
- Relatórios avançados
- Notificações e alertas

> **Nota importante:** Dados são guardados localmente no dispositivo. Se o utilizador desinstalar a app ou trocar de telemóvel, os dados serão perdidos. Backup manual será implementado em versões futuras.

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
- **Soft delete** — transações e contas deletadas marcam-se com `deleted_at` em vez de serem removidas, permitindo "desfazer" acidental e mantendo histórico.

---

## 4. Design & UX

### Identidade Visual
- **Tema:** escuro moderno como base, com suporte a light mode seguindo as preferências do sistema
- **Paleta:**
  - Azul como cor primária
  - Verde para receitas e valores positivos
  - Vermelho para despesas e valores negativos
  - Cinzento/neutro para transferências
  - Tons neutros para backgrounds
- **Estilo:** minimalista, com cor usada como elemento de destaque
- **Tipografia:** máximo 3 pesos de fonte; tamanhos consistentes para hierarquia clara
- **Espaçamento:** sistema de 8px; alinhamento rigoroso

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
Onboarding (apenas primeira vez)
↓
Tab Bar
├── Dashboard
│   ├── Saldo total de todas as contas
│   ├── Receitas vs. despesas do mês atual
│   ├── Balanço mensal (receitas - despesas)
│   ├── Evolução vs. mês anterior (%)
│   ├── Gráfico de despesas por categoria (top 5)
│   ├── Últimas transações
│   └── FAB → Novo ecrã: Nova Transação
│
├── Contas
│   ├── Lista de contas com saldo individual
│   ├── Conta default criada automaticamente ("Carteira Principal") no primeiro acesso
│   ├── FAB → Novo ecrã: Nova Conta
│   └── Toque numa conta → Novo ecrã: Detalhe de Conta
│       ├── Editar nome/saldo inicial da conta (botão no topo)
│       ├── Eliminar conta (botão com confirmação)
│       ├── Lista de transações da conta com filtro "Este mês" vs "Tudo"
│       └── FAB → Novo ecrã: Nova Transação (pré-associada à conta)
│
└── Transações
    ├── Lista de todas as transações com filtros:
    │   ├── Por data (Este mês / Últimas 3 meses / Tudo)
    │   ├── Por tipo (Receita / Despesa / Transferência / Tudo)
    │   └── Por conta
    ├── FAB → Novo ecrã: Nova Transação
    └── Toque numa transação → Novo ecrã: Editar Transação
```

### Feedback Visual & Micro-interações
- Animação suave quando saldo atualiza
- Confirmação tátil (haptic feedback) em ações importantes (criar, eliminar)
- Empty states bem desenhados com mensagens claras e CTAs
- Swipe para eliminar transação (com undo rápido)
- Animação de confirmação ao eliminar/criar

---

## 5. Modelo de Dados

Todas as entidades são guardadas localmente em SQLite. O saldo de uma conta é sempre calculado em tempo real (`initial_balance + Σ income − Σ expenses`), garantindo consistência mesmo quando transações são editadas ou eliminadas no futuro.

### Account

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `name` | TEXT | Nome da conta (1-50 caracteres) |
| `initial_balance` | REAL | Saldo de partida (não negativo, pode ser 0) |
| `created_at` | TEXT ISO 8601 | Data de criação |
| `deleted_at` | TEXT ISO 8601 (nullable) | Data de "soft delete"; null se ativa |
| `is_default` | BOOLEAN | True para a conta default criada no primeiro uso |

### Transaction

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `account_id` | INTEGER FK | Referência à conta |
| `category_id` | INTEGER FK | Referência à categoria |
| `type` | TEXT | `expense`, `income`, ou `transfer` |
| `amount` | REAL | Valor sempre positivo (> 0) |
| `date` | TEXT ISO 8601 | Data da operação (máximo: hoje) |
| `description` | TEXT | Nota livre (máximo 200 caracteres) |
| `destination_account_id` | INTEGER FK (nullable) | Referência à conta destino (apenas para `transfer`) |
| `transfer_id` | TEXT UUID (nullable) | ID comum para ligar duas transações de transferência |
| `created_at` | TEXT ISO 8601 | Data de registo |
| `updated_at` | TEXT ISO 8601 | Data da última atualização |
| `deleted_at` | TEXT ISO 8601 (nullable) | Data de "soft delete"; null se ativa |

> **Nota:** Transferências criam sempre 2 registos: uma `expense` na conta origem e uma `income` na conta destino, ambas com o mesmo `transfer_id`.

### Category

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER PK | Identificador único |
| `name` | TEXT | Nome da categoria |
| `type` | TEXT | `expense`, `income`, ou `both` |
| `icon` | TEXT | Identificador do ícone para uso na UI |
| `display_order` | INTEGER | Ordem de exibição na lista de categorias |

### Categorias Pré-definidas

| Nome | Tipo | Descrição |
|---|---|---|
| Alimentação | expense | Comida, supermercado, restaurantes |
| Transportes | expense | Combustível, transportes públicos, táxi |
| Habitação | expense | Renda, condomínio, serviços de casa |
| Saúde | expense | Farmácia, consultas, saúde geral |
| Lazer | expense | Cinema, viagens, atividades recreativas |
| Educação | both | Cursos, formação |
| Vestuário | expense | Roupas, acessórios |
| Subscrições | expense | Netflix, Spotify, planos mensais |
| Salário | income | Ordenado, salário principal |
| Outras Receitas | income | Freelance, bónus, presentes |
| Investimentos | both | Ações, depósitos, aplicações financeiras |
| Outro | both | Despesas ou receitas que não se encaixam |

### Notas Futuras
- **Categorias personalizadas** — o campo `type` já suporta esta evolução sem alterações ao schema.
- **Backup & Export** — versão futura com exportação de dados em CSV/JSON.
- **Sincronização em Cloud** — autenticação e backup remoto planejado para versão +1.

---

## 6. Validações & Regras de Negócio

### Transações
- **Valor:** deve ser maior que 0
- **Data:** máximo hoje (data futura rejeitada); permite datas passadas
- **Descrição:** máximo 200 caracteres
- **Transferências:** requerem conta destino diferente da conta origem

### Contas
- **Nome:** mínimo 1 caracter, máximo 50 caracteres, obrigatório
- **Saldo inicial:** não negativo (≥ 0), obrigatório
- **Conta default:** criada automaticamente no primeiro uso com nome "Carteira Principal"

### Cálculos
- **Saldo de uma conta:** `initial_balance + Σ (transações income) − Σ (transações expense)` onde transações ativas (não deletadas)
- **Saldo total:** soma dos saldos de todas as contas ativas
- **Transferências:** mantêm a soma total de dinheiro invariável (um débito numa conta = crédito noutra)

---

## 7. Arquitetura do Código

### Padrão
Feature-based com MVVM simplificado — o código é organizado por funcionalidade, não por tipo de ficheiro. Cada feature é autónoma e contém os seus próprios ecrãs, componentes e lógica. O acesso aos dados é isolado numa camada de repositórios, separando completamente a base de dados da UI.

### Estrutura de Pastas

```
src/
├── app/                          # Navegação e layout raiz (tabs, stack)
├── features/
│   ├── onboarding/
│   │   ├── components/           # Componentes do onboarding
│   │   └── screen.tsx            # Ecrã de onboarding
│   ├── dashboard/
│   │   ├── components/           # Componentes visuais (BalanceCard, ChartCard, etc.)
│   │   ├── hooks/                # useViewModel de dashboard
│   │   └── screen.tsx            # Ecrã principal
│   ├── accounts/
│   │   ├── components/           # AccountCard, AccountForm, etc.
│   │   ├── hooks/                # useViewModel de contas
│   │   ├── screens/
│   │   │   ├── list.tsx          # Lista de contas
│   │   │   ├── detail.tsx        # Detalhe de conta
│   │   │   └── form.tsx          # Criar/editar conta
│   ├── transactions/
│   │   ├── components/           # TransactionCard, TransactionForm, etc.
│   │   ├── hooks/                # useViewModel de transações
│   │   └── screens/
│   │       ├── list.tsx          # Lista de transações
│   │       └── form.tsx          # Criar/editar transação
│   └── shared/
│       ├── components/           # Button, Card, FAB, Modal, etc.
│       ├── hooks/                # Hooks genéricos (useLocalStorage, etc.)
│       └── theme/                # Cores, tipografia, espaçamentos
└── db/
    ├── schema.ts                 # Definição das tabelas SQLite
    ├── migrations.ts             # Migrações para inicializar dados
    └── repositories/
        ├── accountRepository.ts  # CRUD de contas
        ├── transactionRepository.ts # CRUD de transações
        └── categoryRepository.ts # Acesso a categorias
```

### Princípios
- **Feature-first** — cada funcionalidade vive na sua própria pasta, fácil de localizar e expandir
- **Repositórios** — toda a lógica de acesso à base de dados está isolada em `db/repositories/`, nunca diretamente nos componentes ou ecrãs
- **Shared** — componentes e utilitários reutilizáveis entre features vivem em `shared/`, evitando duplicação
- **TypeScript first** — tipagem estática em todo o código
- **Soft delete** — transações e contas não são fisicamente removidas, apenas marcadas com `deleted_at`

---

## 8. Testes & Validação

### Testes Unitários
- Cálculo de saldo com múltiplas transações (income, expense, transfer)
- Transferências mantêm soma total igual (origem perde X, destino ganha X)
- Filtros de data funcionam corretamente (Este mês, últimas 3 meses, tudo)
- Validação de entrada (valores negativos rejeitados, datas futuras bloqueadas)

### Testes de Integração
- Criar conta → editar → deletar → verificar dados
- Criar transação → editar → deletar → verificar saldo
- Transferência cria 2 transações ligadas corretamente

### Testes de UX
- Onboarding exibe apenas primeira vez
- Empty states aparecem corretamente
- Feedback visual em todas as ações críticas
- Swipe para deletar funciona e permite undo

---

## 9. Roadmap Futuro (Fora do MVP)

### MVP+1
- Backup local (exportar para ficheiro JSON/CSV)
- Importar dados de backup
- Relatórios mensais/anuais
- Melhorias visuais baseadas em feedback de utilizadores

### MVP+2
- Autenticação simples (sem email, apenas local)
- Sincronização em cloud (opcional)
- Múltiplos dispositivos
- Categorias personalizadas

### MVP+3
- Metas e planos de poupança
- Anexo de imagens (recibos, faturas)
- Previsões e tendências
- Notificações de limites de gastos

---

## Resumo Executivo

**FinApp** é uma aplicação de gestão financeira pessoal focada em **simplicidade** e **offline-first**, permitindo ao utilizador gerir múltiplas contas e transações sem fricção. O MVP é totalmente funcional, permitindo criar, editar e eliminar contas e transações, incluindo transferências entre contas. Dados são persistidos localmente em SQLite, com planos para sincronização em cloud em versões futuras.

A app é **completamente gratuita** e sem publicidade, com foco em proporcionar valor real ao utilizador.

---

*Documento versão 2.0 — Atualizado com feedback de MVP refinado (Março 2026)*
