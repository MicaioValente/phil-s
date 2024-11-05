import { useInfiniteQuery } from '@infra/hooks';
import { storyListService } from '@modules/feed/business/useCases/useStoryList/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useStoryList() {
  return useInfiniteQuery<StoryItemModel>({
    queryKey: [QueryKeys.GET_STORY_LIST],
    queryFn: storyListService,
  });
}
