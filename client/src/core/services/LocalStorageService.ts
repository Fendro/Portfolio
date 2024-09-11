import type { LocalStorageKeyEnum } from '@/core/enums';

export interface ILocalStorageService {
  getItem: <T>(key: LocalStorageKeyEnum) => T;
  setItem: <T>(key: LocalStorageKeyEnum, value: T) => void;
}

export class LocalStorageService implements ILocalStorageService {
  getItem = <T>(key: LocalStorageKeyEnum) => {
    throw new Error();
  };

  setItem = <T>(key: LocalStorageKeyEnum, value: T) => {
    throw new Error();
  };
}