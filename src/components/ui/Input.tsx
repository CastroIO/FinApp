import { forwardRef } from 'react';
import {
  TextInput,
  View,
  Text,
  TextInputProps,
} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <View className="w-full">
        {label && (
          <Text className="text-sm font-medium text-text-secondary mb-2">
            {label}
          </Text>
        )}
        <View className="flex-row items-center bg-background-tertiary rounded-xl border border-border">
          {leftIcon && (
            <View className="pl-3">{leftIcon}</View>
          )}
          <TextInput
            ref={ref}
            className={`flex-1 px-4 py-3 text-text text-base ${leftIcon ? '' : ''} ${className || ''}`}
            placeholderTextColor="#71717A"
            {...props}
          />
          {rightIcon && (
            <View className="pr-3">{rightIcon}</View>
          )}
        </View>
        {error && (
          <Text className="text-expense text-sm mt-1">{error}</Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

// Numeric input variant for currency
interface CurrencyInputProps extends Omit<InputProps, 'value' | 'onChangeText'> {
  value: number;
  onChangeText: (value: number) => void;
}

export const CurrencyInput = forwardRef<TextInput, CurrencyInputProps>(
  ({ value, onChangeText, label, error, ...props }, ref) => {
    const handleChangeText = (text: string) => {
      // Remove non-numeric characters except comma and dot
      const cleaned = text.replace(/[^0-9.,]/g, '');
      // Replace comma with dot for parsing
      const normalized = cleaned.replace(',', '.');
      const numValue = parseFloat(normalized) || 0;
      onChangeText(numValue);
    };

    const displayValue = value === 0 ? '' : value.toString().replace('.', ',');

    return (
      <Input
        ref={ref}
        label={label}
        error={error}
        value={displayValue}
        onChangeText={handleChangeText}
        keyboardType="decimal-pad"
        {...props}
      />
    );
  }
);

CurrencyInput.displayName = 'CurrencyInput';
