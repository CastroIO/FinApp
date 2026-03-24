import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../shared/hooks';

import AccountsScreen from './accounts/index';
import TransactionsScreen from './transactions/index';
import DashboardScreen from './index';

export type TabParamList = {
  Dashboard: undefined;
  Accounts: undefined;
  Transactions: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          paddingTop: theme.spacing[1],
          paddingBottom: theme.spacing[2],
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSizes.xs,
          fontWeight: theme.fontWeights.medium,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarLabel: 'Contas',
          tabBarIcon: ({ color, size }) => <Ionicons name="wallet" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Transacções',
          tabBarIcon: ({ color, size }) => <Ionicons name="receipt" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
