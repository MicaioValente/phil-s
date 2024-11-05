import type { AllScreens } from '@core/navigation/interfaces';
import { publicRoutes } from '@core/navigation/routeFactory';
import { stackRootFactory } from '@core/navigation/stackFactory';

function PublicRoutes() {
  const initialRouteName: keyof AllScreens = 'onboarding/intro';

  const Router = stackRootFactory(publicRoutes, { initialRouteName });

  return <Router />;
}

export default PublicRoutes;
