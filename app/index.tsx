import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background items-center justify-center p-4">
      <Text className="text-3xl font-bold text-primary">FinApp</Text>
      <Text className="text-text-secondary mt-2">
        Gestão financeira pessoal
      </Text>
    </View>
  );
}
