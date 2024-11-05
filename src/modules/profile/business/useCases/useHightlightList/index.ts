import { useInfiniteQuery } from '@infra/hooks';
import { QueryKeys } from '@shared/enums/queryKeys';
import { hightlightListService } from '@modules/profile/business/useCases/useHightlightList/service';
import { useNavigation } from '@shared/hooks';

export function useHightlightList() {
  const navigation = useNavigation();
  const profileUserParams = navigation.getScreenParams('profile/user');

  return useInfiniteQuery<HightlightItemModel>({
    queryKey: [QueryKeys.GET_STORY_LIST, profileUserParams.userId],
    queryFn: hightlightListService,
  });
}
