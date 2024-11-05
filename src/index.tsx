import '@core/prototypes';
import Router from '@core/navigation/Router';
import { ThemeProvider } from '@dls';
import { AuthProvider, NetworkProvider } from '@infra/network';

function Main() {
  return (
    <NetworkProvider>
      <AuthProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </NetworkProvider>
  );
}

export default Main;
