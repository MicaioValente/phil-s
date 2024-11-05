import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import { CreateProfileParams } from '@modules/profile/business/useCases/useCreateProfile/interfaces';
import { createProfileService } from '@modules/profile/business/useCases/useCreateProfile/service';
import { useTranslation } from '@shared/hooks';

export function useCreateProfile() {
  const { t } = useTranslation('createProfile');

  function onSuccess() {}

  function onError() {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<CreateProfileParams, void>({
    mutationFn: createProfileService,
    onSuccess,
    onError,
  });
}
