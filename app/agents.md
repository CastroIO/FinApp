# App - Expo Router

> Estrutura de ecrãs e navegação do FinApp.

---

## 1. Visão Geral

Este diretório contém todos os ecrãs da aplicação usando **Expo Router** (file-based routing).

---

## 2. Estrutura de Rotas

```
app/
├── _layout.tsx                 # Root layout (providers, tema)
├── index.tsx                   # Redirect ou onboarding
│
├── onboarding/                 # Primeira experiência
│   └── index.tsx               # 3 ecrãs (slider)
│
├── (tabs)/                     # Grupo de tabs
│   ├── _layout.tsx             # Bottom tabs config
│   ├── index.tsx               # Dashboard
│   ├── contas/
│   │   ├── index.tsx           # Lista contas
│   │   ├── nova.tsx            # Criar conta
│   │   └── [id].tsx            # Editar conta
│   ├── transacoes/
│   │   ├── index.tsx           # Lista com filtros
│   │   └── [id].tsx            # Detalhe transação
│   └── configuracoes/
│       └── index.tsx           # Configurações
│
├── transacao/                   # Ecrãs modais
│   ├── nova.tsx                 # Criar transação
│   └── editar/
│       └── [id].tsx             # Editar transação
│
├── transferencia/
│   └── nova.tsx                 # Criar transferência
│
└── orcamentos/
    ├── index.tsx                # Lista orçamentos
    └── nova.tsx                 # Criar orçamento
```

---

## 3. Convenções de Naming

```typescript
// Ficheiros de ecrã: kebab-case
nova-conta.tsx
editar-transacao.tsx

// Dynamic routes: [param].tsx
[accountId].tsx
[id].tsx

// Layouts: _layout.tsx
_layout.tsx          // Raiz
(tabs)/_layout.tsx  // Layout de tabs
```

---

## 4. Padrões de Ecrã

### 4.1 Ecrã com Header Custom

```typescript
// app/contas/nova.tsx
import { Stack } from 'expo-router';

export default function NovaContaScreen() {
  return (
    <Stack.Screen
      options={{
        title: 'Nova Conta',
        presentation: 'modal',
      }}
    />
    // Conteúdo...
  );
}
```

### 4.2 Ecrã com Tabs

```typescript
// app/(tabs)/contas/index.tsx
import { useRouter } from 'expo-router';

export default function ContasScreen() {
  const router = useRouter();

  return (
    <View>
      {/* Lista de contas */}
      <Button onPress={() => router.push('/contas/nova')}>
        Nova Conta
      </Button>
    </View>
  );
}
```

### 4.3 Navegação com Parâmetros

```typescript
// Navigar para ecrã com ID
router.push(`/transacoes/${transactionId}`);

// Passar parâmetros
router.push({
  pathname: '/transacao/editar/[id]',
  params: { id: transactionId }
});
```

---

## 5. Tipos de Ecrã

| Tipo | Característica | Exemplo |
|------|----------------|---------|
| **Lista** | Lista com FlatList, pull-to-refresh | `contas/index.tsx` |
| **Formulário** | Criar/editar entidades | `contas/nova.tsx` |
| **Detalhe** | Ver detalhes de uma entidade | `transacoes/[id].tsx` |
| **Modal** | Presentation: modal | `_layout.tsx` ou `Stack.Screen` |

---

## 6. Store de Referência

Quando trabalhar com ecrãs, usar as stores Zustand:

| Store | Ficheiro | Uso |
|-------|----------|-----|
| Accounts | `src/store/useAccountStore.ts` | Gerir contas |
| Transactions | `src/store/useTransactionStore.ts` | Gerir transações |
| Categories | `src/store/useCategoryStore.ts` | Gerir categorias |

---

## 7. Referências

| Recurso | Link |
|---------|------|
| Expo Router Docs | https://docs.expo.dev/router/introduction |
| Navegação | Consultar `src/store/` para stores |

---

> **Última atualização:** 24/03/2026
