import {
  createJSONStorage,
  type StateStorage,
  type PersistOptions,
} from 'zustand/middleware';

import LocalStorage from '@core/localStorage';

export const authStoreConfig = <T>(
  persistOptions: PersistOptions<T>,
): PersistOptions<T> => {
  const zustandStorage: StateStorage = {
    getItem: name => {
      return LocalStorage.getItem(name)!;
    },
    setItem: (name, value) => {
      return LocalStorage.setItem(name, value);
    },
    removeItem: name => {
      return LocalStorage.removeItem(name);
    },
  };

  return {
    ...persistOptions,
    storage: createJSONStorage(() => zustandStorage),
  };
};
