import QueryProvider from '@core/query/Provider';
import type { NetworkProviderProps } from '@infra/network/providers/NetworkProvider/interface';

function NetworkProvider({ children }: NetworkProviderProps) {
  return <QueryProvider>{children}</QueryProvider>;
}

export default NetworkProvider;
