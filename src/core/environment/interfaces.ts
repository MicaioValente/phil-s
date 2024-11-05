import type Config from 'react-native-config';

export interface EnvironmentApi {
  isDevelopment: boolean;
  isProduction: boolean;
  getBaseUrl(): string;
  getByKey(key: keyof typeof Config): string;
}
