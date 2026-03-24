import { View, Text, ViewProps } from 'react-native';

interface BadgeProps extends ViewProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<string, { bg: string; text: string }> = {
  default: {
    bg: 'bg-background-tertiary',
    text: 'text-text',
  },
  success: {
    bg: 'bg-income/20',
    text: 'text-income',
  },
  warning: {
    bg: 'bg-warning/20',
    text: 'text-warning',
  },
  danger: {
    bg: 'bg-expense/20',
    text: 'text-expense',
  },
  info: {
    bg: 'bg-primary/20',
    text: 'text-primary',
  },
};

const sizeStyles: Record<string, { container: string; text: string; iconSize: number }> = {
  sm: {
    container: 'px-2 py-0.5',
    text: 'text-xs',
    iconSize: 12,
  },
  md: {
    container: 'px-3 py-1',
    text: 'text-sm',
    iconSize: 14,
  },
  lg: {
    container: 'px-4 py-1.5',
    text: 'text-base',
    iconSize: 16,
  },
};

export function Badge({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className,
  ...props
}: BadgeProps) {
  const { bg, text } = variantStyles[variant];
  const { container, text: textSize, iconSize } = sizeStyles[size];

  return (
    <View
      className={`${bg} ${container} rounded-full flex-row items-center self-start ${className || ''}`}
      {...props}
    >
      {icon && <View className="mr-1" style={{ width: iconSize, height: iconSize }}>{icon}</View>}
      <Text className={`${text} ${textSize} font-medium`}>
        {children}
      </Text>
    </View>
  );
}
