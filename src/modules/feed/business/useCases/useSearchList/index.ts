import { useInfiniteQuery } from '@infra/hooks';
import { QueryKeys } from '@shared/enums/queryKeys';
import { searchListService } from '@modules/feed/business/useCases/useSearchList/service';
import { SearchRequestParams } from './interfaces';

export function useSearchList(params: SearchRequestParams) {
  return useInfiniteQuery<SearchItemModel>({
    queryKey: [QueryKeys.GET_SEARCH_LIST],
    queryFn: (pageParam, queryKey) =>  searchListService(pageParam, queryKey, params),
  });
}
