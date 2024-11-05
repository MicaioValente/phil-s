import { SafeAreaProvider } from 'react-native-safe-area-context';

import type { ThemeProviderProps } from '@dls/providers/ThemeProvider/interfaces';

export function withSafeAreaProvider(Component: React.FC<ThemeProviderProps>) {
  return (props: ThemeProviderProps) => (
    <SafeAreaProvider>
      <Component {...props} />
    </SafeAreaProvider>
  );
}
