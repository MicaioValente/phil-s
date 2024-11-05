import { QueryKey } from '@tanstack/react-query';
import { suggestionsListAdapter } from '@modules/feed/business/useCases/useSuggestionList/adapter';
import type { SuggestionResponse } from '@modules/feed/business/useCases/useSuggestionList/interfaces';
import { graphQLClient } from '@infra/network';
import {
  listUsers,
  userFollowersByFollowerUserId,
} from '@infra/network/graphql/queries';

export async function suggestionListService(
  pageParam: number,
  query: QueryKey,
) {
  const followerUserId = query[1] as string;
  const { data } = await graphQLClient({
    query: listUsers,
    variables: {
      limit: 20,
      offset: pageParam,
    },
  });

  const followeds = await graphQLClient({
    query: userFollowersByFollowerUserId,
    variables: {
      followerUserId,
    },
  });

  const items: any =
    data?.listUsers?.items?.filter(i => i.id != followerUserId) || [];
  const response: SuggestionResponse = {
    items,
    page: pageParam,
    pageCount: 0,
    pageSize: 0,
    total: data?.listUsers?.items?.length || 0,
  };

  return suggestionsListAdapter(
    response,
    followeds?.data?.userFollowersByFollowerUserId?.items || [],
  );
}
