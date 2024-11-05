import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import { EditProfileParams } from '@modules/profile/business/useCases/useEditProfile/interfaces';
import { createProfileService } from '@modules/profile/business/useCases/useEditProfile/service';
import { useTranslation } from '@shared/hooks';

export function useEditProfile() {
  const { t } = useTranslation('editProfile');

  function onSuccess() {}

  function onError({}: RequestError) {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<EditProfileParams, void>({
    mutationFn: createProfileService,
    onSuccess,
    onError,
  });
}
