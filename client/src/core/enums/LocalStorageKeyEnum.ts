export const LocalStorageKeyEnum = {
  UserPreference: 'userPreference',
} as const;

export type LocalStorageKeyEnum =
  (typeof LocalStorageKeyEnum)[keyof typeof LocalStorageKeyEnum];
