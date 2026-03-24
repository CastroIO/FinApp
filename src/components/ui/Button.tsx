import { forwardRef } from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  PressableProps,
} from 'react-native';

interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-background-tertiary',
  outline: 'bg-transparent border border-border-light',
  ghost: 'bg-transparent',
  danger: 'bg-expense',
};

const variantTextStyles: Record<string, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-text',
  ghost: 'text-text',
  danger: 'text-white',
};

const sizeStyles: Record<string, { container: string; text: string }> = {
  sm: {
    container: 'px-3 py-2 rounded-md',
    text: 'text-sm',
  },
  md: {
    container: 'px-4 py-3 rounded-lg',
    text: 'text-base',
  },
  lg: {
    container: 'px-6 py-4 rounded-xl',
    text: 'text-lg',
  },
};

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <Pressable
        ref={ref}
        className={`flex-row items-center justify-center ${variantStyles[variant]} ${sizeStyles[size].container} ${isDisabled ? 'opacity-50' : ''} ${className || ''}`}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'outline' || variant === 'ghost' ? '#3B82F6' : '#FFFFFF'}
          />
        ) : (
          <>
            {leftIcon && <View className="mr-2">{leftIcon}</View>}
            <Text className={`font-semibold ${variantTextStyles[variant]} ${sizeStyles[size].text}`}>
              {children}
            </Text>
            {rightIcon && <View className="ml-2">{rightIcon}</View>}
          </>
        )}
      </Pressable>
    );
  }
);

Button.displayName = 'Button';
