import { QueryClientProvider } from '@tanstack/react-query';

import Query from '@core/query';
import type { QueryProviderProps } from '@core/query/interface';

function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={Query.getClient()}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;
