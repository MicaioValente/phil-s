export interface MutateOptions<R> {
  onSuccess?: (data: R) => void;
  onError?: (error: RequestError) => void;
}

export interface MutationProps<P, R> extends MutateOptions<R> {
  mutationFn: (data: P) => Promise<R>;
}

export interface MutationReturn<P, R> {
  data: R | void;
  isError: boolean;
  isLoading: boolean;
  mutate(data: P, options?: MutateOptions<R>): void;
  mutateAsync: (data: P, options?: MutateOptions<R>) => Promise<R>;
}
