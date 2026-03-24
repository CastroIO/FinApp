import { View } from 'react-native';
import { Text } from './Text';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <View className="w-16 h-16 rounded-full bg-background-tertiary items-center justify-center mb-4">
        {icon}
      </View>
      <Text variant="body" color="secondary" className="text-center">
        {title}
      </Text>
      {description && (
        <Text variant="bodySmall" color="tertiary" className="text-center mt-1">
          {description}
        </Text>
      )}
      {action && <View className="mt-4">{action}</View>}
    </View>
  );
}
