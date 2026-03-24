import { forwardRef } from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  PressableProps,
  ViewStyle,
} from 'react-native';

interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<string, ViewStyle> = {
  primary: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#27272A',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3F3F46',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: '#EF4444',
  },
};

const variantTextStyles: Record<string, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-text',
  ghost: 'text-text',
  danger: 'text-white',
};

const sizeStyles: Record<string, { container: ViewStyle; text: string }> = {
  sm: {
    container: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 6,
    },
    text: 'text-sm',
  },
  md: {
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
    text: 'text-base',
  },
  lg: {
    container: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderRadius: 10,
    },
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
        className={`flex-row items-center justify-center ${isDisabled ? 'opacity-50' : ''} ${className || ''}`}
        style={[variantStyles[variant], sizeStyles[size].container]}
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
