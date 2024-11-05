import { useState } from 'react';
import { useQuery as useReactQuery } from '@tanstack/react-query';

import type { QueryProps, QueryReturn } from '@infra/hooks/useQuery/interfaces';

export function useQuery<T>({
  initialData,
  queryKey,
  queryFn,
}: QueryProps<T>): QueryReturn<T> {
  const [isRefetching, setIsRefetching] = useState(false);

  const query = useReactQuery({
    queryKey,
    queryFn: ({ queryKey }) => queryFn(queryKey),
  });

  async function refetch() {
    setIsRefetching(true);

    await query.refetch();

    setIsRefetching(false);
  }

  const data = query.data ?? initialData;

  const isSomeLoading = [query.isPending, query.isLoading].some(Boolean);

  const isLoading = [isSomeLoading, !isRefetching].every(Boolean);

  return {
    data,
    isError: query.isError,
    isLoading,
    isRefetching,
    refetch,
  };
}
