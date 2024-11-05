import { lazy, Suspense } from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';

import '@core/translation';

import Navigation from '@core/navigation';
import type { AllScreens } from '@core/navigation/interfaces';
import PublicRoutes from '@core/navigation/PublicRoutes';
import PrivateRoutes from '@core/navigation/PrivateRoutes';
import { If } from '@dls/components';
import { useAuth } from '@modules/account/business/stores';

const DatePicker = lazy(() => import('@dls/components/DatePicker')),
  Toast = lazy(() => import('@dls/components/Toast')),
  BottomSheet = lazy(() => import('@dls/components/BottomSheet')),
  LoadingFull = lazy(() => import('@dls/components/LoadingFull'));

function Router() {
  const isNotAuthenticated = useAuth(({ user }) => Object.isEmpty(user));

  const linking: LinkingOptions<AllScreens> = {
    prefixes: ['philsocial://'],
    config: {
      screens: {
        'account/sign-in': 'account/sign-in',
        'social/home': 'social/home',
      },
    },
  };

  return (
    <NavigationContainer ref={Navigation.ref} linking={linking}>
      <If condition={isNotAuthenticated} elseRender={<PrivateRoutes />}>
        <PublicRoutes />
      </If>

      <Suspense>
        <DatePicker />
        <Toast />
        <BottomSheet />
        <LoadingFull />
      </Suspense>
    </NavigationContainer>
  );
}

export default Router;
