import { hideLoadingFull } from '@dls/components/LoadingFull/methods';
import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type {
  SignInParams,
  SignInResponse,
} from '@modules/account/business/useCases/useSignIn/interfaces';
import { signInService } from '@modules/account/business/useCases/useSignIn/service';
import { useTranslation } from '@shared/hooks/useTranslation';

export function useSignIn() {
  const { t } = useTranslation('signin');

  function onSuccess(data: SignInResponse) {}

  function onError() {
    hideLoadingFull();

    showToast({
      title: t('toastErrorTitle'),
      message: t('toastErrorText'),
    });
  }

  return useMutation<SignInParams, SignInResponse>({
    mutationFn: signInService,
    onSuccess,
    onError,
  });
}
