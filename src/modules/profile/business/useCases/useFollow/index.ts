import { useMutation } from '@infra/hooks';
import { followService } from '@modules/profile/business/useCases/useFollow/service';
import { FollowRequestParams, FollowResponse } from '@modules/profile/business/useCases/useFollow/interfaces';
import { useAuth } from '@modules/account/business/stores';
import { showToast } from '@dls/stores';
import { useTranslation } from '@shared/hooks';

export function useFollow() {
  const { t } = useTranslation('profile')
  const auth = useAuth().user

  function onSuccess() {}

  function onError(e: any) {
    const isADD = e?.typeRequest === 'FOLLOW'
    showToast({
      title: t(isADD ? 'errorTitleFollow': 'errorTitleUnFollow'),
      message: t(isADD ? 'errorDescriptionFollow' : 'errorDescriptionUnFollow'),
    });
  }

  return useMutation<FollowRequestParams, FollowResponse | undefined>({
    mutationFn:  (data: FollowRequestParams) => followService({ ...data,  followerUserId: auth.id }),
    onSuccess,
    onError,
  });
}
