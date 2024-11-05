import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type {
  ConfirmPasswordResetCodeParams,
  ConfirmPasswordResetCodeResponse,
} from '@modules/account/business/useCases/useConfirmPasswordResetCode/interfaces';
import { confirmPasswordResetCodeService } from '@modules/account/business/useCases/useConfirmPasswordResetCode/service';
import { useTranslation } from '@shared/hooks/useTranslation';

export function useConfirmPasswordResetCode() {
  const { t } = useTranslation('forgetPassword');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<
    ConfirmPasswordResetCodeParams,
    ConfirmPasswordResetCodeResponse
  >({
    mutationFn: confirmPasswordResetCodeService,
    onSuccess,
    onError,
  });
}
