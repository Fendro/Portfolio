export const LanguageEnum = {
  English: 'english',
  French: 'french',
} as const;

export type LanguageEnum = ObjectValues<typeof LanguageEnum>;
