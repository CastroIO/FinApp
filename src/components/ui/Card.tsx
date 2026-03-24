import { View, Text, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles: Record<string, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const variantStyles: Record<string, string> = {
  default: 'bg-background-secondary',
  elevated: 'bg-background-secondary',
  outlined: 'bg-background-secondary border border-border',
};

export function Card({
  variant = 'default',
  padding = 'md',
  children,
  className,
  ...props
}: CardProps) {
  const roundedClass = 'rounded-xl';

  return (
    <View
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${roundedClass} ${className || ''}`}
      {...props}
    >
      {children}
    </View>
  );
}

interface CardHeaderProps extends ViewProps {}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <View className={`mb-4 ${className || ''}`} {...props}>
      {children}
    </View>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <Text className={`text-lg font-semibold text-text ${className || ''}`}>
      {children}
    </Text>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <Text className={`text-sm text-text-secondary ${className || ''}`}>
      {children}
    </Text>
  );
}

interface CardContentProps extends ViewProps {}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <View className={className || ''} {...props}>
      {children}
    </View>
  );
}

interface CardFooterProps extends ViewProps {}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <View className={`mt-4 flex-row items-center ${className || ''}`} {...props}>
      {children}
    </View>
  );
}
