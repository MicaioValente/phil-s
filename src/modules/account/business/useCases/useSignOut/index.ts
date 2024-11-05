import { useMutation } from '@infra/hooks';
import type { SignOutParams } from '@modules/account/business/useCases/useSignOut/interfaces';
import { signOutService } from '@modules/account/business/useCases/useSignOut/service';

export function useSignOut() {
  function onSuccess() {}

  return useMutation<SignOutParams, void>({
    mutationFn: signOutService,
    onSuccess,
  });
}
