import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import { useNavigation, useTranslation } from '@shared/hooks';
import { createStoryService } from '@modules/feed/business/useCases/useCreateStory/service';
import { CreateStoryParams, CreateStoryRequest } from '@modules/feed/business/useCases/useCreateStory/interfaces';
import { useAuth } from '@modules/account/business/stores';

export function useCreateStory() {
  const { t } = useTranslation('feedCreation');
  const auth = useAuth().user
  const nav = useNavigation()

  const createStory = (data: CreateStoryParams) => {

    const params: CreateStoryRequest = {
      userId: auth.id,
      media: {
        type: data.extension,
        url: data.url,
        duration: data.duration,
        filename: data.filename,
        author: `${auth.firstName} ${auth.lastName}`
      },
      location: '',
      highlight: data.highlights,
      type: data.typeStory
    }
    
    return createStoryService(params)
  }

  function onSuccess() {
    nav.navigate('feed/home')
  }

  function onError() {
    showToast({
      title: t('story.errorTitle'),
      message: t('story.errorDescription'),
    });
  }

  return useMutation<CreateStoryParams, void>({
    mutationFn: createStory,
    onSuccess,
    onError,
  });
}
