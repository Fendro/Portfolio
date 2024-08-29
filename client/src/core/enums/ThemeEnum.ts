export const ThemeEnum = {
  Dark: 'dark',
  Light: 'light',
} as const;

export type ThemeEnum = (typeof ThemeEnum)[keyof typeof ThemeEnum];
