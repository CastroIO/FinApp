import { View } from 'react-native';
import { Text } from './Text';
import { LucideIcon } from 'lucide-react-native';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <View className="w-16 h-16 rounded-full bg-background-tertiary items-center justify-center mb-4">
        <Icon size={32} color="#71717A" />
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
