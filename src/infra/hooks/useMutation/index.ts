import { useMutation as useReactMutation } from '@tanstack/react-query';

import type {
  MutationProps,
  MutationReturn,
} from '@infra/hooks/useMutation/interfaces';

export function useMutation<P, R>({
  mutationFn,
  onSuccess,
  onError,
}: MutationProps<P, R>): MutationReturn<P, R> {
  const mutation = useReactMutation({
    mutationFn,
    onSuccess,
    onError,
  });

  return {
    data: mutation.data,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  };
}
