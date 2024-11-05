import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { showToast } from '@dls/stores';
import type { ConfirmPasswordResetCodeSchema } from '@modules/account/business/forms/useConfirmPasswordResetCodeForm/interfaces';
import { confirmPasswordResetCodeSchema } from '@modules/account/business/forms/useConfirmPasswordResetCodeForm/schema';
import { useConfirmPasswordResetCode } from '@modules/account/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';

export function useConfirmPasswordResetCodeForm() {
  const navigation = useNavigation();

  const { t } = useTranslation('confirmPasswordResetCode');

  const { isLoading, mutate } = useConfirmPasswordResetCode();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmPasswordResetCodeSchema>({
    resolver: zodResolver(confirmPasswordResetCodeSchema),
    mode: 'onChange',
    defaultValues: {
      confirmationCode: '',
    },
  });

  useEffect(() => {
    trigger();
  }, []);

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
  
      const confirmPasswordResetCodeParams = navigation.getScreenParams(
        'account/confirm-password-reset-code',
      );

      const params = {
        username: confirmPasswordResetCodeParams.username,
        newPassword: confirmPasswordResetCodeParams.newPassword,
        confirmationCode: data.confirmationCode,
      };

      function onSuccess() {
        navigation.reset('account/password-reset-successfully');
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
