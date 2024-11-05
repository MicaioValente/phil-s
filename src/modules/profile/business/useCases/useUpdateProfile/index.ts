import { showToast } from '@dls/stores/useToast';
import { useMutation } from '@infra/hooks';
import { UpdateProfileParams } from '@modules/profile/business/useCases/useUpdateProfile/interfaces';
import { updateProfile } from '@modules/profile/business/useCases/useUpdateProfile/service';

export function useUpdateProfile() {
  function onSuccess() {}

  function onError({ message }: RequestError) {
    showToast({
      title: 'toastErrorTitle',
      message,
    });
  }

  return useMutation<UpdateProfileParams, void>({
    mutationFn: updateProfile,
    onSuccess,
    onError,
  });
}
