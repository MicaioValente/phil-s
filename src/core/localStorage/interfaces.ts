export interface LocalStorageApi {
  getItem: <T>(key: string) => T | null;
  setItem: <T>(key: string, value: T) => void;
  removeItem: (key: string) => void;
  clearAll: () => void;
  subscriber: <T>(key: string, callback: (value: T) => void) => () => void;
}
