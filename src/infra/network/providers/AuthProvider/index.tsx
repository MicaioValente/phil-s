import { useLayoutEffect } from 'react';
import { Hub } from 'aws-amplify/utils';

import { hideLoadingFull } from '@dls/components/LoadingFull/methods';
import type { AuthProviderProps } from '@infra/network/providers/AuthProvider/interface';
import { graphQLClient } from '@infra/network';
import { getUser } from '@infra/network/graphql/queries';
import { signIn, signOut } from '@modules/account/business/stores';
import { useSignOut } from '@modules/account/business/useCases';
import { useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';

function AuthProvider({ children }: AuthProviderProps) {
  const { mutateAsync } = useSignOut();

  const { t } = useTranslation('signin');

  useLayoutEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          const response = await graphQLClient({
            query: getUser,
            variables: { id: payload.data.userId },
          });

          const user = {
            id: payload.data.userId,
          };

          if (response.data.getUser) {
            if (response.data.getUser.deletedAt) {
              await mutateAsync();

              showToast({
                title: t('toastErrorTitle'),
                message: t('toastErrorText'),
              });

              setTimeout(hideLoadingFull, 400);

              return;
            }

            Object.assign(user, response.data.getUser);
          }

          signIn(user as UserModel);

          setTimeout(hideLoadingFull, 400);

          break;
        case 'signedOut':
          signOut();

          break;
        default:
          break;
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return children;
}

export default AuthProvider;
