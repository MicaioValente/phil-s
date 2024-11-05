import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';

import { useTranslation } from '@shared/hooks/useTranslation';
import { deleteAccountService } from '@modules/account/business/useCases/useDeleteAccount/service';
import { useSignOut } from '@modules/account/business/useCases/useSignOut';
import {
  DeleteAccountParams,
  DeleteAccountResponse,
} from '@modules/account/business/useCases/useDeleteAccount/interfaces';

export function useDeleteAccount() {
  const { t } = useTranslation('signin');
  const { mutate } = useSignOut();

  function onSuccess() {
    mutate();
  }

  function onError() {
    showToast({
      title: t('toastErrorTitle'),
      message: t('toastErrorText'),
    });
  }

  return useMutation<DeleteAccountParams, DeleteAccountResponse>({
    mutationFn: deleteAccountService,
    onSuccess,
    onError,
  });
}
