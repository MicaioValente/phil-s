import { signOut } from 'aws-amplify/auth';

import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type {
  SignInWithSocialParams,
  SignInWithSocialResponse,
} from '@modules/account/business/useCases/useSignInWithSocial/interfaces';
import { signInWithSocialService } from '@modules/account/business/useCases/useSignInWithSocial/service';
import { useTranslation } from '@shared/hooks/useTranslation';

export function useSignInWithSocial() {
  const { t } = useTranslation('signin');

  function onSuccess() {}

  async function onError(error: any) {
    if (error?.name === 'UserAlreadyAuthenticatedException') await signOut();

    showToast({
      title: t('toastErrorTitle'),
      message: t('toastErrorText'),
    });
  }

  return useMutation<SignInWithSocialParams, SignInWithSocialResponse>({
    mutationFn: signInWithSocialService,
    onSuccess,
    onError,
  });
}
