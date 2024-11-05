import type { QueryClient } from '@tanstack/react-query';

export interface QueryApi {
  clear(): void;
  getClient(): QueryClient;
  invalidate(queryKey: string): void;
  prefetch(queryKey: string[], queryFn: Function): void;
}

export interface QueryProviderProps {
  children: React.ReactNode;
}
