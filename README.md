# FinApp

Aplicação de gestão financeira pessoal simples e offline-first.

## Problema

A maioria das pessoas tem dificuldade em acompanhar e controlar as suas finanças pessoais. Sem uma visão clara das receitas e despesas, torna-se difícil tomar decisões financeiras conscientes.

## Solução

Uma aplicação mobile que permite gerir múltiplas contas, registar transações (despesas, receitas, transferências) e acompanhar o saldo em tempo real — tudo guardado localmente no dispositivo.

## Funcionalidades

- **Contas múltiplas** — Cria contas para diferentes objetivos (ex: Carteira, Poupanças, Fundo de Férias)
- **Transações** — Regista despesas e receitas com categoria, data e descrição
- **Transferências** — Move dinheiro entre contas
- **Dashboard** — Vê saldo total, resumo mensal e evolução vs mês anterior
- **Offline-first** — Todos os dados guardados localmente, funciona sem internet

## Screens

```
├── Dashboard        — Saldo total, resumo mensal, gráfico de despesas
├── Contas           — Lista de contas, criar/editar conta
├── Transações       — Lista de transações com filtros
└── Onboarding       — 3 ecrãs explicativos (apenas na primeira vez)
```

## Stack

| Camada        | Tecnologia           |
| ------------- | -------------------- |
| Mobile        | React Native + Expo  |
| Linguagem     | TypeScript           |
| Base de dados | SQLite (expo-sqlite) |
| Navegação     | React Navigation     |
| Estado        | Zustand              |

## Roadmap

| Versão | Funcionalidades                               |
| ------ | --------------------------------------------- |
| MVP    | Contas, transações, transferências, dashboard |
| v1.1   | Backup/export, empty states                   |
| v1.2   | Categorias personalizadas                     |
| v2.0   | Autenticação, sincronização cloud             |

---

_Desenvolvido com foco em simplicidade e usabilidade._
