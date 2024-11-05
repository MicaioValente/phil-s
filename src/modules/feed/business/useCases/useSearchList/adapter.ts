import { SearchResponse } from '@modules/feed/business/useCases/useSearchList/interfaces';

export function searchListAdapter(data: SearchResponse): SearchModel {
  return {
    items: data.items,
    page: data.page,
    pageCount: data.pageCount,
    pageSize: data.pageSize,
    total: data.total,
  };
}
