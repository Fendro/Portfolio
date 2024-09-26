export const LocalStorageKeyEnum = {
  UserPreference: 'userPreference',
} as const;

export type LocalStorageKeyEnum = ObjectValues<typeof LocalStorageKeyEnum>;
