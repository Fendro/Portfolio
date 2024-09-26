export const ThemeEnum = {
  Dark: 'dark',
  Light: 'light',
} as const;

export type ThemeEnum = ObjectValues<typeof ThemeEnum>;
