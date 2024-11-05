import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import { SaveInterestsParams } from '@modules/onboarding/business/useCases/useInterests/interfaces';
import { saveInterestsService } from '@modules/onboarding/business/useCases/useInterests/service';
import { useTranslation } from '@shared/hooks';

export function useInterests() {
  const { t } = useTranslation('interestsOnboarding');


  function onSuccess() {
  }

  function onError({message}: RequestError) {
    showToast({
      title: t('errorTitle'),
      message: t('errorMessage'),
    });
  }

  return useMutation<SaveInterestsParams, void>({
    mutationFn: saveInterestsService,
    onSuccess,
    onError,
  });
}
