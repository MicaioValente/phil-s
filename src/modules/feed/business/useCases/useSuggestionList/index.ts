import { useInfiniteQuery } from '@infra/hooks';
import { QueryKeys } from '@shared/enums/queryKeys';
import { suggestionListService } from '@modules/feed/business/useCases/useSuggestionList/service';
import { useAuth } from '@modules/account/business/stores';

export function useSuggestionsList() {
  const user = useAuth().user

  return useInfiniteQuery<SuggestionItemModel>({
    queryKey: [QueryKeys.GET_SUGGESTIONS_LIST, user.id],
    queryFn: suggestionListService
  });
}
