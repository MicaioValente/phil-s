import { MMKV } from 'react-native-mmkv';

import type { LocalStorageApi } from '@core/localStorage/interfaces';

const instance = new MMKV();

const getItem = <T>(key: string): T | null => {
  const value = instance.getString(key);

  return value ? JSON.parse(value) : null;
};

function setItem<T>(key: string, value: T) {
  instance.set(key, JSON.stringify(value));
}

function removeItem(key: string) {
  instance.delete(key);
}

function clearAll() {
  instance.clearAll();
}

function subscriber<T>(key: string, callback: (value: T) => void) {
  const subscriber = instance.addOnValueChangedListener(changedKey => {
    if (changedKey === key) {
      const changedValue = getItem<T>(changedKey)!;

      callback(changedValue);
    }
  });

  return () => subscriber.remove();
}

export const LocalStorage: LocalStorageApi = {
  getItem,
  setItem,
  removeItem,
  clearAll,
  subscriber,
};

export default LocalStorage;
