import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type { ForgetPasswordParams } from '@modules/account/business/useCases/useForgetPassword/interfaces';
import { forgetPasswordService } from '@modules/account/business/useCases/useForgetPassword/service';
import { useTranslation } from '@shared/hooks/useTranslation';

export function useForgetPassword() {
  const { t } = useTranslation('forgetPassword');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<ForgetPasswordParams, void>({
    mutationFn: forgetPasswordService,
    onSuccess,
    onError,
  });
}
