import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption' | 'label';
  color?: 'default' | 'secondary' | 'tertiary' | 'primary' | 'income' | 'expense' | 'warning';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

const variantStyles: Record<string, string> = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  body: 'text-base',
  bodySmall: 'text-sm',
  caption: 'text-xs',
  label: 'text-sm font-medium',
};

const colorStyles: Record<string, string> = {
  default: 'text-text',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  primary: 'text-primary',
  income: 'text-income',
  expense: 'text-expense',
  warning: 'text-warning',
};

const weightStyles: Record<string, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Text({
  variant = 'body',
  color = 'default',
  weight,
  className,
  ...props
}: TextProps) {
  const weightClass = weight ? weightStyles[weight] : '';

  return (
    <RNText
      className={`${variantStyles[variant]} ${colorStyles[color]} ${weightClass} ${className || ''}`}
      {...props}
    />
  );
}

// Export default RN Text for convenience (use when you need unstyled native text)
export { RNText as NativeText };
