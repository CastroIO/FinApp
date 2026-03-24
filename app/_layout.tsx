import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, ActivityIndicator } from 'react-native';

import { runMigrations } from '../src/database/migrations';
import { seedCategories, seedTestAccount } from '../src/database/seeds';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        await runMigrations();
        await seedCategories();
        await seedTestAccount();
      } catch (error) {
        console.error('Error initializing database:', error);
      } finally {
        setIsReady(true);
      }
    }

    initialize();
  }, []);

  if (!isReady) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F0F0F',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '600',
          },
          contentStyle: {
            backgroundColor: '#0F0F0F',
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'FinApp' }} />
        <Stack.Screen
          name="demo/index"
          options={{
            title: 'Componentes',
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
