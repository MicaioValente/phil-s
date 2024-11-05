import type { AllScreens } from '@core/navigation/interfaces';

export type NavigationParams<T, K extends keyof T> = K extends unknown
  ? undefined extends T[K]
    ? [K] | [K, T[K]]
    : [K, T[K]]
  : never;

export interface NavigationReturn<T = AllScreens> {
  getScreenParams<K extends keyof T>(name: K): T[K];
  goBack(): void;
  navigate<K extends keyof T>(...args: NavigationParams<T, K>): void;
  replace<K extends keyof T>(...args: NavigationParams<T, K>): void;
  reset<K extends keyof T>(...args: NavigationParams<T, K>): void;
}
