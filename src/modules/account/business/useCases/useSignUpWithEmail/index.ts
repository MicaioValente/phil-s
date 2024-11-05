import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type { SignUpWithEmailParams } from '@modules/account/business/useCases/useSignUpWithEmail/interfaces';
import { signUpWithEmailService } from '@modules/account/business/useCases/useSignUpWithEmail/service';
import { useTranslation } from '@shared/hooks';

export function useSignUpWithEmail() {
  const { t } = useTranslation('signUpWithEmail');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<SignUpWithEmailParams, void>({
    mutationFn: signUpWithEmailService,
    onSuccess,
    onError,
  });
}
