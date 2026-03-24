import { useState } from 'react';
import { ScrollView, View, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Button } from '../../src/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../src/components/ui/Card';
import { Input, CurrencyInput } from '../../src/components/ui/Input';
import { Badge } from '../../src/components/ui/Badge';
import { Text, NativeText } from '../../src/components/ui/Text';
import { EmptyState } from '../../src/components/ui/EmptyState';

export default function ComponentsDemoScreen() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [currencyValue, setCurrencyValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 gap-6">
        {/* Header */}
        <View className="flex-row items-center gap-3">
          <Button variant="ghost" size="sm" onPress={() => router.back()}>
            <Feather name="chevron-left" size={20} color="#FFFFFF" />
          </Button>
          <Text variant="h2">Componentes UI</Text>
        </View>

        {/* ============ BUTTON ============ */}
        <View>
          <Text variant="h3" className="mb-4">Button</Text>

          <Card>
            <CardContent className="gap-3">
              <Text variant="label" color="secondary">Variantes</Text>
              <View className="flex-row flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </View>

              <Text variant="label" color="secondary" className="mt-4">Tamanhos</Text>
              <View className="flex-row items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </View>

              <Text variant="label" color="secondary" className="mt-4">Com ícones</Text>
              <View className="flex-row flex-wrap gap-2">
                <Button
                  leftIcon={<Feather name="plus" size={18} color="#FFFFFF" />}
                >
                  Adicionar
                </Button>
                <Button
                  variant="outline"
                  rightIcon={<Feather name="heart" size={18} color="#3B82F6" />}
                >
                  Favorito
                </Button>
              </View>

              <Text variant="label" color="secondary" className="mt-4">Estados</Text>
              <View className="flex-row gap-2">
                <Button isLoading>Carregando</Button>
                <Button disabled>Disabled</Button>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* ============ CARD ============ */}
        <View>
          <Text variant="h3" className="mb-4">Card</Text>

          <View className="gap-3">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Card Default</CardTitle>
                <CardDescription>Variante padrão sem sombra</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="bodySmall" color="secondary">
                  Este é um card com o estilo padrão do FinApp.
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Card Elevated</CardTitle>
                <CardDescription>Com sombra destacada</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="bodySmall" color="secondary">
                  Este card tem sombra para se destacar do fundo.
                </Text>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Card Outlined</CardTitle>
                <CardDescription>Com borda visível</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="bodySmall" color="secondary">
                  Este card tem uma borda definida.
                </Text>
              </CardContent>
            </Card>
          </View>
        </View>

        {/* ============ INPUT ============ */}
        <View>
          <Text variant="h3" className="mb-4">Input</Text>

          <Card>
            <CardContent className="gap-4">
              <Input
                label="Input padrão"
                placeholder="Escreva algo..."
                value={inputValue}
                onChangeText={setInputValue}
              />

              <Input
                label="Com erro"
                placeholder="Campo obrigatório"
                value=""
                error="Este campo é obrigatório"
              />

              <Input
                label="Com ícone esquerda"
                placeholder="Pesquisar..."
                leftIcon={<Feather name="search" size={20} color="#71717A" />}
              />

              <CurrencyInput
                label="Input monetário"
                placeholder="0,00 €"
                value={currencyValue}
                onChangeText={setCurrencyValue}
              />
            </CardContent>
          </Card>
        </View>

        {/* ============ BADGE ============ */}
        <View>
          <Text variant="h3" className="mb-4">Badge</Text>

          <Card>
            <CardContent className="gap-4">
              <View>
                <Text variant="label" color="secondary" className="mb-2">Variantes</Text>
                <View className="flex-row flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Receita</Badge>
                  <Badge variant="warning">Aviso</Badge>
                  <Badge variant="danger">Despesa</Badge>
                  <Badge variant="info">Info</Badge>
                </View>
              </View>

              <View>
                <Text variant="label" color="secondary" className="mb-2">Tamanhos</Text>
                <View className="flex-row flex-wrap items-center gap-2">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </View>
              </View>

              <View>
                <Text variant="label" color="secondary" className="mb-2">Com ícone</Text>
                <View className="flex-row flex-wrap gap-2">
                  <Badge variant="success" icon={<Feather name="check" size={12} color="#22C55E" />}>
                    Confirmado
                  </Badge>
                  <Badge variant="danger" icon={<Feather name="x" size={12} color="#EF4444" />}>
                    Cancelado
                  </Badge>
                  <Badge variant="warning" icon={<Feather name="alert-circle" size={12} color="#F97316" />}>
                    Pendente
                  </Badge>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* ============ TEXT ============ */}
        <View>
          <Text variant="h3" className="mb-4">Text</Text>

          <Card>
            <CardContent className="gap-3">
              <View>
                <Text variant="label" color="secondary" className="mb-2">Variantes</Text>
                <Text variant="h1">Heading 1</Text>
                <Text variant="h2">Heading 2</Text>
                <Text variant="h3">Heading 3</Text>
                <Text variant="body">Body text - texto padrão da aplicação</Text>
                <Text variant="bodySmall">Body Small - texto secundário</Text>
                <Text variant="caption">Caption - texto pequeno</Text>
                <Text variant="label">Label - para formulários</Text>
              </View>

              <View>
                <Text variant="label" color="secondary" className="mb-2">Cores</Text>
                <Text color="default">Texto padrão (branco)</Text>
                <Text color="secondary">Texto secundário</Text>
                <Text color="tertiary">Texto terciário</Text>
                <Text color="primary">Texto primary (azul)</Text>
                <Text color="income">Rendimento (verde)</Text>
                <Text color="expense">Despesa (vermelho)</Text>
                <Text color="warning">Aviso (laranja)</Text>
              </View>

              <View>
                <Text variant="label" color="secondary" className="mb-2">Pesos</Text>
                <Text weight="regular">Regular weight</Text>
                <Text weight="medium">Medium weight</Text>
                <Text weight="semibold">Semibold weight</Text>
                <Text weight="bold">Bold weight</Text>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* ============ EMPTY STATE ============ */}
        <View>
          <Text variant="h3" className="mb-4">Empty State</Text>

          <Card variant="outlined" padding="none">
            <EmptyState
              icon={<Ionicons name="star" size={32} color="#71717A" />}
              title="Nenhum item encontrado"
              description="Adicione o seu primeiro item para começar"
              action={
                <Button size="sm" leftIcon={<Feather name="plus" size={16} color="#FFFFFF" />}>
                  Adicionar
                </Button>
              }
            />
          </Card>
        </View>

        {/* ============ THEME COLORS ============ */}
        <View>
          <Text variant="h3" className="mb-4">Cores do Tema</Text>

          <Card>
            <CardContent>
              <View className="flex-row flex-wrap gap-2">
                <View className="w-12 h-12 rounded-lg bg-primary" />
                <View className="w-12 h-12 rounded-lg bg-income" />
                <View className="w-12 h-12 rounded-lg bg-expense" />
                <View className="w-12 h-12 rounded-lg bg-warning" />
                <View className="w-12 h-12 rounded-lg bg-background-secondary" />
                <View className="w-12 h-12 rounded-lg bg-background-tertiary" />
              </View>
              <Text variant="caption" color="tertiary" className="mt-2">
                Primary • Income • Expense • Warning • Background Secondary • Tertiary
              </Text>
            </CardContent>
          </Card>
        </View>

        {/* Spacer */}
        <View className="h-8" />
      </View>
    </ScrollView>
  );
}
