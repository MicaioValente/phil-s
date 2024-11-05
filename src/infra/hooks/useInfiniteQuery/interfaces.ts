export type QueryKey = ReadonlyArray<number | string>;

export interface InfiniteQueryConstraints<T> {
  items: T[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface InfiniteQueryProps<T> {
  queryKey: QueryKey;
  queryFn: (
    pageParam: number,
    queryKey: QueryKey,
  ) => Promise<InfiniteQueryConstraints<T>>;
}

export interface InfiniteQueryReturn<T> {
  data: InfiniteQueryConstraints<T>;
  isError: boolean;
  isListEmpty: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
}
