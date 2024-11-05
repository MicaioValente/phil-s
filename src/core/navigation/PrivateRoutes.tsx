import { useLayoutEffect } from 'react';

import type { AllScreens } from '@core/navigation/interfaces';
import { privateRoutes } from '@core/navigation/routeFactory';
import { stackRootFactory } from '@core/navigation/stackFactory';
import { graphQLClient } from '@infra/network';
import {
  onCreateUser,
  onUpdateUser,
} from '@infra/network/graphql/subscriptions';
import { updateUser, useAuth } from '@modules/account/business/stores';

function PrivateRoutes() {
  const needToCreateProfile = Object.keys(useAuth.getState().user).length === 1;

  useLayoutEffect(() => {
    const createUserSubscriber = graphQLClient({
      query: onCreateUser,
    }).subscribe({
      next({ data }) {
        updateUser(data.onCreateUser as UserModel);
      },
    });

    const updateUserSubscriber = graphQLClient({
      query: onUpdateUser,
    }).subscribe({
      next({ data }) {
        console.log(JSON.stringify(data.onUpdateUser, null, 2));
        updateUser(data.onUpdateUser as UserModel);
      },
    });

    return () => {
      createUserSubscriber.unsubscribe();
      updateUserSubscriber.unsubscribe();
    };
  }, []);

  const initialRouteName: keyof AllScreens = needToCreateProfile
    ? 'profile/create'
    : 'tabRoot';

  const Router = stackRootFactory(privateRoutes, { initialRouteName });

  return <Router />;
}

export default PrivateRoutes;
