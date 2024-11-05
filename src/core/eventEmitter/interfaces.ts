export interface EventEmitterApi {
  addListener<T>(eventName: string, callback: (...args: T[]) => void): void;
  removeListener<T>(eventName: string, callback: (...args: T[]) => void): void;
  emit<T>(eventName: string, ...args: T[]): boolean;
}
