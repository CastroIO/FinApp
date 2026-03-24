import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { colors, ColorPalette, ColorScheme } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';
import { fontSizes, fontWeights, lineHeights, typography } from '../theme/typography';

export interface Theme {
  colors: ColorPalette;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  typography: typeof typography;
  isDark: boolean;
}

const createTheme = (scheme: ColorScheme): Theme => ({
  colors: colors[scheme],
  spacing,
  borderRadius,
  shadows,
  fontSizes,
  fontWeights,
  lineHeights,
  typography,
  isDark: scheme === 'dark',
});

export const LightTheme = createTheme('light');
export const DarkTheme = createTheme('dark');

export const ThemeContext = createContext<Theme>(LightTheme);

export const useTheme = () => useContext(ThemeContext);

export const useSystemColorScheme = (): ColorScheme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? 'dark' : 'light';
};
