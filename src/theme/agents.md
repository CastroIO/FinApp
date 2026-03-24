# Theme - Estilos Globais

> Cores, tipografia e design tokens do FinApp.

---

## 1. Visão Geral

O tema define as cores, tipografia e estilos reutilizáveis da aplicação. Baseia-se em **NativeWind** (Tailwind CSS para React Native).

---

## 2. Estrutura

```
src/theme/
├── colors.ts       # Paleta de cores
├── typography.ts   # Tipografia
└── index.ts        # Export principal
```

---

## 3. Paleta de Cores

### 3.1 Cores Semânticas

| Nome | Hex | Uso | Classes Tailwind |
|------|-----|-----|-----------------|
| **Primary** | `#3B82F6` | Ações, destaques | `bg-primary`, `text-primary` |
| **Income** | `#22C55E` | Receitas, valores positivos | `bg-income`, `text-income` |
| **Expense** | `#EF4444` | Despesas, valores negativos | `bg-expense`, `text-expense` |
| **Warning** | `#F97316` | Alertas, orçamentos | `bg-warning`, `text-warning` |

### 3.2 Cores de Fundo

| Nome | Hex | Uso | Classes |
|------|-----|-----|---------|
| **Background** | `#0F0F0F` | Fundo principal | `bg-background` |
| **Secondary** | `#1A1A1A` | Cards, áreas | `bg-background-secondary` |
| **Tertiary** | `#27272A` | Inputs, campos | `bg-background-tertiary` |

### 3.3 Cores de Texto

| Nome | Hex | Uso | Classes |
|------|-----|-----|---------|
| **Default** | `#FFFFFF` | Texto principal | `text-text` |
| **Secondary** | `#A1A1AA` | Texto secundário | `text-text-secondary` |
| **Tertiary** | `#71717A` | Placeholders | - |

### 3.4 Cores de Bordas

| Nome | Hex | Uso |
|------|-----|-----|
| **Default** | `#27272A` | Bordas normais |
| **Light** | `#3F3F46` | Bordas destacadas |

### 3.5 Cores de Budget

| Percentagem | Cor | Uso |
|------------|-----|-----|
| < 50% | `#3B82F6` (Azul) | Neutro |
| 50-80% | `#EAB308` (Amarelo) | Atenção |
| 80-100% | `#F97316` (Laranja) | Alerta |
| > 100% | `#EF4444` (Vermelho) | Excedido |

---

## 4. Cores de Conta (Seleção)

```typescript
// Cores disponíveis para o utilizador escolher
const accountColors = [
  '#3B82F6', // Blue
  '#22C55E', // Green
  '#EF4444', // Red
  '#F97316', // Orange
  '#A855F7', // Purple
  '#EC4899', // Pink
  '#14B8A6', // Teal
  '#F59E0B', // Amber
  '#6366F1', // Indigo
  '#84CC16', // Lime
];
```

---

## 5. Cores de Categoria

```typescript
const categoryColors = {
  // Despesas
  housing: '#3B82F6',
  food: '#22C55E',
  transport: '#F97316',
  health: '#EF4444',
  leisure: '#A855F7',
  education: '#EC4899',
  clothing: '#14B8A6',
  utilities: '#F59E0B',
  subscriptions: '#6366F1',
  other: '#71717A',
  // Receitas
  salary: '#22C55E',
  freelance: '#3B82F6',
  gifts: '#A855F7',
};
```

---

## 6. Tipografia

### 6.1 Tamanhos

```typescript
const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
};
```

### 6.2 Pesos

```typescript
const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};
```

### 6.3 Altura de Linha

```typescript
const lineHeight = {
  tight: 1.2,    // Títulos
  normal: 1.5,   // Corpo
  relaxed: 1.75, // Texto longo
};
```

### 6.4 Família da Fonte

```typescript
// Sistema nativo (System no iOS, Roboto no Android)
const fontFamily = {
  regular: 'System',
  medium: 'System',
  semibold: 'System',
  bold: 'System',
};
```

---

## 7. Uso com NativeWind

### 7.1 Cores

```typescript
// Fundos
<View className="bg-background">
  <View className="bg-background-secondary">
    <View className="bg-background-tertiary">
```

### 7.2 Texto

```typescript
// Textos
<Text className="text-text">Principal</Text>
<Text className="text-text-secondary">Secundário</Text>
<Text className="text-text-tertiary">Terciário</Text>

// Cores semânticas
<Text className="text-income">+1.000,00 €</Text>
<Text className="text-expense">-500,00 €</Text>
<Text className="text-primary">Ação</Text>
```

### 7.3 Bordas

```typescript
<View className="border border-border">
<View className="border border-border-light">
```

### 7.4 Cantos Arredondados

| Classe | Uso |
|--------|-----|
| `rounded-md` | Inputs, badges |
| `rounded-lg` | Botões |
| `rounded-xl` | Cards, modais |

---

## 8. Exemplo Completo

```typescript
import { Card, Text } from '@/components/ui';
import { colors } from '@/theme/colors';

export function AccountCard({ account }) {
  return (
    <Card variant="default" padding="md" className="mb-3">
      <View className="flex-row items-center">
        <View 
          className="w-10 h-10 rounded-full mr-3"
          style={{ backgroundColor: account.color }}
        />
        <View className="flex-1">
          <Text className="text-base font-semibold text-text">
            {account.name}
          </Text>
          <Text className="text-sm text-text-secondary">
            Saldo atual
          </Text>
        </View>
        <Text 
          className={`text-lg font-bold ${
            account.balance >= 0 ? 'text-income' : 'text-expense'
          }`}
        >
          {formatCurrency(account.balance)}
        </Text>
      </View>
    </Card>
  );
}
```

---

## 9. Ficheiros de Configuração

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Definido automaticamente de colors.ts
        primary: '#3B82F6',
        income: '#22C55E',
        expense: '#EF4444',
        // ... etc
      },
    },
  },
};
```

---

## 10. Referências

| Recurso | Ficheiro |
|---------|----------|
| Definição de cores | `src/theme/colors.ts` |
| Definição de tipografia | `src/theme/typography.ts` |
| Tailwind CSS | https://tailwindcss.com |
| NativeWind | https://www.nativewind.dev |

---

> **Última atualização:** 24/03/2026
