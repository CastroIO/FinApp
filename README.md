# FinApp

Aplicação de gestão financeira pessoal simples e offline-first.

## Problema

A maioria das pessoas tem dificuldade em acompanhar e controlar as suas finanças pessoais. Sem uma visão clara das receitas e despesas, torna-se difícil tomar decisões financeiras conscientes.

## Solução

Uma aplicação mobile que permite gerir múltiplas contas, registar transações (despesas, receitas, transferências) e acompanhar o saldo em tempo real — tudo guardado localmente no dispositivo.

## Funcionalidades

- **Dashboard** — Vê saldo total, resumo mensal (receitas e despesas) e evolução vs mês anterior e listagem de transações
- **Contas múltiplas** — Cria contas para diferentes objetivos (ex: Carteira, Poupanças, Fundo de Férias)
- **Transações** — Regista despesas e receitas com valor, categoria associada, data, descrição e anexos (opcional)
- **Transferências** — Mover dinheiro entre contas
- **Offline-first** — Todos os dados guardados localmente, funciona sem internet e com possibilidade de backup

## Ecrãs

```
└── Onboarding       — 3 ecrãs explicativos (apenas na primeira vez)
├── Dashboard        — Saldo total, resumo mensal, gráfico de despesas
├── Contas/Carteiras — Lista de contas, criar/editar conta
├── Configurações

```

## Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Mobile | React Native + Expo |
| Linguagem | TypeScript |
| Base de dados | SQLite |
| Design System/Estilos | por definir

## Planeamento
---

*Desenvolvido com foco em simplicidade e usabilidade.*
