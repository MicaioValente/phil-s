import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type { SignUpWithPhoneParams } from '@modules/account/business/useCases/useSignUpWithPhone/interfaces';
import { signUpWithPhoneService } from '@modules/account/business/useCases/useSignUpWithPhone/service';
import { useTranslation } from '@shared/hooks';

export function useSignUpWithPhone() {
  const { t } = useTranslation('signUpWithPhone');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<SignUpWithPhoneParams, void>({
    mutationFn: signUpWithPhoneService,
    onSuccess,
    onError,
  });
}
