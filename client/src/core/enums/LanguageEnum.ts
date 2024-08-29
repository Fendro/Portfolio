export const LanguageEnum = {
  English: 'english',
  French: 'french',
} as const;

export type LanguageEnum = (typeof LanguageEnum)[keyof typeof LanguageEnum];
