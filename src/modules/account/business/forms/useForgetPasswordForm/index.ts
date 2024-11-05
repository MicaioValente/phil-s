import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { ForgetPasswordSchema } from '@modules/account/business/forms/useForgetPasswordForm/interfaces';
import { forgetPasswordSchema } from '@modules/account/business/forms/useForgetPasswordForm/schema';
import { useForgetPassword } from '@modules/account/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';

export function useForgetPasswordForm() {
  const navigation = useNavigation();

  const { isLoading, mutate } = useForgetPassword();
  const { t } = useTranslation('forgetPassword');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: 'onChange',
  });

  const handleErrors = (callback: Function) => () => {
    const isThereAnyError = Object.values(errors)[0] ?? null;

    if (isThereAnyError) {
      const errorMessages = Object.values(errors)
        .map(error => {
          const messageKey = error.message;
          if (messageKey) return t(messageKey, { defaultValue: messageKey });
        })
        .filter((message, index, self) => self.indexOf(message) === index)
        .join('\n');

      showToast({
        title: t('errorTitle'),
        message: errorMessages,
      });

      return;
    }

    callback();
  };

  const onSubmit = handleErrors(
    handleSubmit(data => {
      const params = {
        username: data.username as string,
      };

      function onSuccess() {
        navigation.navigate('account/confirm-password-reset-code', {
          newPassword: data.newPassword!,
          username: data.username!,
        });
      }

      mutate(params, { onSuccess });
    }),
  );

  return {
    control,
    isLoading,
    onSubmit,
  };
}
