import { UserFollower } from '@infra/network/graphql/API';
import type { SuggestionResponse } from '@modules/feed/business/useCases/useSuggestionList/interfaces';

export function suggestionsListAdapter(
  data: SuggestionResponse,
  followeds: UserFollower[],
): SuggestionModel {
  const items = data.items.map(d => {
    return {
      ...d,
      following: followeds.find(f => f.followedUserId === d.id) ? true : false,
    };
  });

  return {
    items,
    page: data.page,
    pageCount: data.pageCount,
    pageSize: data.pageSize,
    total: data.total,
  };
}
