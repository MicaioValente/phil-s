export type QueryKey = (string | number)[];

export type QueryParams = (string | number)[];

export interface QueryProps<T> {
  initialData: T;
  queryKey: QueryKey;
  queryFn: (queryParams: QueryParams) => Promise<T>;
}

export interface QueryReturn<T> {
  data: T;
  isError: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => Promise<void>;
}
