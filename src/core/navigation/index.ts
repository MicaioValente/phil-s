import { createNavigationContainerRef } from '@react-navigation/native';

import type { AllScreens, NavigationApi } from '@core/navigation/interfaces';

const ref = createNavigationContainerRef<AllScreens>();

const Navigation: NavigationApi = {
  ref,
};

export default Navigation;
