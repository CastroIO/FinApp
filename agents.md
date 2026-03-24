# FinApp - Agente IA

> Ficheiro principal com contexto global do projeto. Qualquer agente deve consultar este ficheiro antes de trabalhar no código.

---

## 0. Regras para Agentes (OBRIGATÓRIO)

> **Esta secção deve ser lida e seguida por TODOS os agentes antes de qualquer trabalho.**

### 0.1 Ler Contexto Inicial
Antes de começar qualquer tarefa, o agente DEVE:
1. Ler este ficheiro (`agents.md`) para contexto global
2. Ler o ficheiro `agents.md` da pasta relevante (se existir)
3. Consultar `SPEC.md` para entender as funcionalidades
4. Consultar `SPRINTS.md` para conhecer o planeamento

### 0.2 Anotar Detalhes Importantes
Durante o trabalho, o agente DEVE:
- Documentar decisões técnicas importantes
- Notar convenções descobertas no código existente
- Atualizar os `agents.md` quando encontrar novas informações úteis

### 0.3 Criar Novos agents.md
Ao criar uma nova **feature**, **módulo** ou **pasta** significativa, o agente DEVE:
1. Criar um ficheiro `agents.md` dentro dessa pasta
2. Incluir:
   - Visão geral do módulo
   - Estrutura de ficheiros
   - Convenções específicas
   - Exemplos de uso
   - Referências a documentação relevante

**Exemplo - Nova feature "Notificações":**
```markdown
# Notificações - Agente IA

## Visão Geral
Módulo para enviar notificações locais...

## Estrutura
```
src/notifications/
├── agents.md
├── notificationService.ts
└── useNotificationPermission.ts
```

## Convenções
- Usar expo-notifications
- Pedir permissão antes de enviar
...
```

### 0.4 Atualizar agents.md Existentes
Após implementar uma feature, o agente DEVE:
- Adicionar a nova funcionalidade aos `agents.md` relevantes
- Incluir exemplos de código se aplicável
- Documentar novas regras ou exceções descobertas

---

## 1. Visão Geral

| Campo | Valor |
|-------|-------|
| **Nome** | FinApp |
| **Tipo** | Aplicação mobile de gestão financeira pessoal |
| **Princípio** | Offline-first, simplicidade, usabilidade |
| **Moeda** | EUR (apenas) |
| **Plataformas** | iOS + Android |
| **Idioma** | PT-PT |

---

## 2. Stack Tecnológica

| Camada | Tecnologia | Ficheiro de Config |
|--------|------------|-------------------|
| Framework | React Native + Expo SDK 55 | `package.json` |
| Linguagem | TypeScript (strict) | `tsconfig.json` |
| CSS | NativeWind (Tailwind CSS) | `tailwind.config.js` |
| Navegação | Expo Router | `app/` |
| Estado | Zustand | `src/store/` |
| Base de Dados | expo-sqlite | `src/database/` |
| Ícones | Lucide React Native | `src/components/ui/` |

---

## 3. Comandos npm

```bash
# Desenvolvimento
npm start              # Iniciar Expo (default)
npm run android        # Iniciar para Android
npm run ios            # Iniciar para iOS

# Build
npx expo prebuild      # Gerar android/ e ios/
npx expo run:android    # Build APK Android
npx expo run:ios       # Build iOS

# Expo (se instalado globalmente)
expo start
expo start --android
expo start --ios
```

---

## 4. Convenções TypeScript

### 4.1 Nomenclatura

```typescript
// Ficheiros: kebab-case
useAccountStore.ts
transactionRepository.ts

// Tipos/Interfaces: PascalCase
interface AccountProps { ... }
type TransactionType = 'income' | 'expense' | 'transfer';

// Constantes: SCREAMING_SNAKE_CASE
const MAX_ACCOUNTS = 50;

// Funções: camelCase
function formatCurrency(value: number): string { ... }
```

### 4.2 IDs

Usar sempre `crypto.randomUUID()` para gerar IDs:

```typescript
import * as Crypto from 'expo-crypto';

const id = Crypto.randomUUID();
// Resultado: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
```

### 4.3 Imports

```typescript
// 1. React / Expo
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// 2. Bibliotecas externas
import { useRouter } from 'expo-router';

// 3. Stores (Zustand)
import { useAccountStore } from '@/store/useAccountStore';

// 4. Repositórios (SQLite)
import { accountRepository } from '@/database';

// 5. Componentes locais
import { Button, Card } from '@/components/ui';

// 6. Utils
import { formatCurrency, formatDate } from '@/utils/formatters';
```

---

## 5. Regras de Negócio

### 5.1 Formatação (PT-PT)

```typescript
// Moeda: usar sempre formatCurrency do utils
import { formatCurrency } from '@/utils/formatters';
formatCurrency(1250.50); // "1.250,50 €"

// Data: usar sempre formatDate do utils
import { formatDate } from '@/utils/formatters';
formatDate('2026-03-24'); // "24/03/2026"

// Mês/Ano: formatMonthYear
import { formatMonthYear } from '@/utils/formatters';
formatMonthYear('2026-03-24'); // "Março 2026"
```

### 5.2 Tipos de Transação

```typescript
type TransactionType = 'income' | 'expense' | 'transfer';

type CategoryType = 'income' | 'expense';
```

### 5.3 Cores Semânticas

| Tipo | Cor | Tailwind | Uso |
|------|-----|----------|-----|
| Receita | Verde | `text-income` / `bg-income` | Valores positivos |
| Despesa | Vermelho | `text-expense` / `bg-expense` | Valores negativos |
| Alerta | Laranja | `text-warning` / `bg-warning` | Orçamentos |

---

## 6. Estrutura de Pastas

```
FinApp/
├── agents.md                    # Contexto global (LER SEMPRE)
├── app/                        # Expo Router (ecrãs)
│   └── agents.md              # Estrutura de rotas
├── src/
│   ├── database/              # SQLite + Repositórios
│   │   └── agents.md          # Schema, migrations, CRUD
│   ├── store/                 # Zustand stores
│   │   └── agents.md         # Estado global
│   ├── components/            # Componentes UI
│   │   └── agents.md         # Button, Card, Input, etc.
│   ├── theme/                 # Cores, tipografia
│   │   └── agents.md         # Design tokens
│   ├── types/                 # TypeScript types
│   └── utils/                 # Helpers
├── SPEC.md                     # Especificação completa
├── SPRINTS.md                 # Planeamento
└── README.md                  # Visão geral do projeto
```

---

## 7. Referências

| Recurso | Ficheiro | Notas |
|---------|----------|-------|
| Especificação completa | `SPEC.md` | Schema, funcionalidades, regras |
| Planeamento | `SPRINTS.md` | Tarefas e prioridades |
| Componentes UI | `src/components/ui/` | Button, Card, Input, etc. |
| Schema SQLite | `src/database/` | Tabelas e migrations |
| Stores | `src/store/` | Estado da aplicação |

---

## 8. Exemplos Rápidos

### Criar uma conta
```typescript
import { accountRepository } from '@/database';
import { useAccountStore } from '@/store/useAccountStore';
import * as Crypto from 'expo-crypto';

const store = useAccountStore.getState();
const newAccount = {
  id: Crypto.randomUUID(),
  name: 'Carteira',
  balance: 100,
  color: '#3B82F6',
};
await accountRepository.create(newAccount);
store.fetchAccounts();
```

### Criar uma transação
```typescript
import { transactionRepository } from '@/database';
import { useTransactionStore } from '@/store/useTransactionStore';
import * as Crypto from 'expo-crypto';
import { getCurrentDateString } from '@/utils/formatters';

const transaction = {
  id: Crypto.randomUUID(),
  account_id: 'uuid-da-conta',
  category_id: 'uuid-da-categoria',
  type: 'expense',
  amount: 25.50,
  description: 'Almoço',
  date: getCurrentDateString(),
};
await transactionRepository.create(transaction);
```

---

> **Última atualização:** 24/03/2026
