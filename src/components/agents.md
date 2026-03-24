# Components - UI Kit

> Componentes reutilizáveis do FinApp usando NativeWind.

---

## 1. Visão Geral

O projeto usa um conjunto de componentes baseados em **NativeWind** (Tailwind CSS para React Native). Os componentes estão em `src/components/ui/`.

---

## 2. Estrutura

```
src/components/
├── ui/                    # Componentes base
│   ├── Button.tsx         # Botões
│   ├── Card.tsx           # Cards
│   ├── Input.tsx          # Inputs
│   ├── Badge.tsx          # Tags/Badges
│   ├── Text.tsx           # Texto
│   ├── EmptyState.tsx     # Estado vazio
│   └── index.ts           # Export principal
└── index.ts               # Re-exports
```

---

## 3. Button

### Props

| Prop | Tipo | Default | Descrição |
|------|------|---------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho |
| `isLoading` | `boolean` | `false` | Mostrar loading |
| `leftIcon` | `ReactNode` | - | Ícone à esquerda |
| `rightIcon` | `ReactNode` | - | Ícone à direita |

### Uso

```typescript
import { Button } from '@/components/ui';
import { Plus } from 'lucide-react-native';

<Button variant="primary" size="md">
  Guardar
</Button>

<Button variant="outline" leftIcon={<Plus size={20} />}>
  Adicionar
</Button>

<Button variant="danger" isLoading={isDeleting}>
  Eliminar
</Button>
```

### Variantes

| Variante | Descrição | Uso típico |
|----------|-----------|------------|
| `primary` | Fundo azul | Ações principais |
| `secondary` | Fundo cinza | Ações secundárias |
| `outline` | Borda, sem fundo | Cancelar |
| `ghost` | Sem fundo | Links, ícones |
| `danger` | Fundo vermelho | Eliminar |

---

## 4. Card

### Props

| Prop | Tipo | Default | Descrição |
|------|------|---------|-----------|
| `variant` | `'default' \| 'elevated' \| 'outlined'` | `'default'` | Estilo |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Padding interno |

### Sub-componentes

- `CardHeader` - Cabeçalho
- `CardTitle` - Título
- `CardDescription` - Descrição
- `CardContent` - Conteúdo principal
- `CardFooter` - Rodapé

### Uso

```typescript
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

<Card variant="default" padding="md">
  <CardHeader>
    <CardTitle>Total de Despesas</CardTitle>
  </CardHeader>
  <CardContent>
    <Text className="text-3xl font-bold text-expense">
      -1.250,00 €
    </Text>
  </CardContent>
</Card>
```

---

## 5. Input

### Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `label` | `string` | Label acima do input |
| `error` | `string` | Mensagem de erro |
| `leftIcon` | `ReactNode` | Ícone à esquerda |
| `rightIcon` | `ReactNode` | Ícone à direita |

### Uso

```typescript
import { Input } from '@/components/ui';
import { User, Eye, EyeOff } from 'lucide-react-native';

<Input
  label="Nome da Conta"
  placeholder="Ex: Carteira"
  error={errors.name}
/>

<Input
  placeholder="Senha"
  secureTextEntry
  rightIcon={<Eye size={20} />}
/>
```

### CurrencyInput

Para valores monetários, usar `CurrencyInput`:

```typescript
import { CurrencyInput } from '@/components/ui';

const [amount, setAmount] = useState(0);

<CurrencyInput
  label="Valor"
  value={amount}
  onChangeText={setAmount}
/>
// Input formata automaticamente para "1.234,56"
```

---

## 6. Badge

### Props

| Prop | Tipo | Default | Descrição |
|------|------|---------|-----------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Cor |
| `size` | `'sm' \| 'md'` | `'md'` | Tamanho |

### Uso

```typescript
import { Badge } from '@/components/ui';

<Badge variant="success">Receita</Badge>
<Badge variant="danger">Despesa</Badge>
<Badge variant="warning">Orçamento</Badge>
```

---

## 7. EmptyState

### Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `icon` | `ReactNode` | Ícone central |
| `title` | `string` | Título |
| `description` | `string` | Descrição |
| `action` | `ReactNode` | Botão de ação |

### Uso

```typescript
import { EmptyState } from '@/components/ui';
import { Wallet } from 'lucide-react-native';

<EmptyState
  icon={<Wallet size={48} />}
  title="Sem transações"
  description="Adicione a sua primeira transação para começar."
  action={<Button>Nova Transação</Button>}
/>
```

---

## 8. Text

Wrapper simples para texto com estilos predefinidos:

```typescript
import { Text } from '@/components/ui';

// Estilos disponíveis via className (NativeWind)
<Text variant="title">Título</Text>
<Text variant="body">Corpo</Text>
<Text variant="caption">Legenda</Text>
```

---

## 9. Export Principal

```typescript
// src/components/ui/index.ts
export { Button } from './Button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export { Input, CurrencyInput } from './Input';
export { Badge } from './Badge';
export { EmptyState } from './EmptyState';
export { Text } from './Text';
```

---

## 10. Referências

| Recurso | Ficheiro |
|---------|----------|
| Componentes | `src/components/ui/` |
| Tema/Cores | `src/theme/colors.ts` |
| NativeWind | https://www.nativewind.dev |

---

> **Última atualização:** 24/03/2026
