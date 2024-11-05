import { useState } from 'react';
import { useInfiniteQuery as useReactInfiniteQuery } from '@tanstack/react-query';

import type {
  InfiniteQueryProps,
  InfiniteQueryReturn,
} from '@infra/hooks/useInfiniteQuery/interfaces';

export function useInfiniteQuery<T>({
  queryKey,
  queryFn,
}: InfiniteQueryProps<T>): InfiniteQueryReturn<T> {
  const [isRefetching, setIsRefetching] = useState(false);

  const initialData = {
    items: [],
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0,
  };

  const query = useReactInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam, queryKey }) => queryFn(pageParam, queryKey),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      +lastPage.page < +lastPage.pageCount ? +lastPage.page + 1 : null,
    select: data => {
      const lastPage = data.pages.lastItem();

      return {
        items: data.pages.flatMap(page => page.items),
        page: lastPage.page,
        pageSize: lastPage.pageSize,
        pageCount: lastPage.pageCount,
        total: lastPage.total,
      };
    },
  });

  async function refetch() {
    setIsRefetching(true);

    await query.refetch();

    setIsRefetching(false);
  }

  function fetchNextPage() {
    if (query.hasNextPage) query.fetchNextPage();
  }

  const data = query.data ?? initialData;

  const isSomeLoading = [
    query.isFetchingNextPage,
    query.isLoading,
    query.isPending,
  ].some(Boolean);

  const isLoading = [isSomeLoading, !isRefetching].every(Boolean);

  const isListEmpty = [!data.items.length, !isSomeLoading].every(Boolean);

  return {
    data,
    isError: query.isError,
    isListEmpty,
    isLoading,
    isRefetching,
    fetchNextPage,
    refetch,
  };
}
