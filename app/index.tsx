import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Button } from '../src/components/ui/Button';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background items-center justify-center p-4">
      <Text className="text-3xl font-bold text-primary">FinApp</Text>
      <Text className="text-text-secondary mt-2">
        Gestão financeira pessoal
      </Text>

      <View className="mt-8">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Feather name="grid" size={16} color="#3B82F6" />}
          onPress={() => router.push('/demo')}
        >
          Ver Componentes
        </Button>
      </View>
    </View>
  );
}
