import { useInfiniteQuery } from '@infra/hooks';
import { feedListService } from '@modules/feed/business/useCases/usePostList/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useFeedList() {
  return useInfiniteQuery<PostItemModel>({
    queryKey: [QueryKeys.GET_FEED_LIST],
    queryFn: feedListService,
  });
}
