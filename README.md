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

*Documento em construção — sujeito a alterações à medida que o produto evolui.*
