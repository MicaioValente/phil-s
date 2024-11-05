import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import type {
  ConfirmSignUpPhoneCodeParams,
  ConfirmSignUpPhoneCodeResponse,
} from '@modules/account/business/useCases/useConfirmSignUpPhoneCode/interfaces';
import { confirmSignUpPhoneCodeService } from '@modules/account/business/useCases/useConfirmSignUpPhoneCode/service';
import { useTranslation } from '@shared/hooks/useTranslation';

export function useConfirmSignUpPhoneCode() {
  const { t } = useTranslation('confirmSignUpPhoneCode');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<
    ConfirmSignUpPhoneCodeParams,
    ConfirmSignUpPhoneCodeResponse
  >({
    mutationFn: confirmSignUpPhoneCodeService,
    onSuccess,
    onError,
  });
}
