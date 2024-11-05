import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { showToast } from '@dls/stores';
import type { ConfirmSignUpPhoneCodeSchema } from '@modules/account/business/forms/useConfirmSignUpPhoneCodeForm/interfaces';
import { confirmSignUpPhoneCodeSchema } from '@modules/account/business/forms/useConfirmSignUpPhoneCodeForm/schema';
import { useConfirmSignUpPhoneCode } from '@modules/account/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';

export function useConfirmSignUpPhoneCodeForm() {
  const navigation = useNavigation();

  const { t } = useTranslation('confirmSignUpPhoneCode');

  const { isLoading, mutate } = useConfirmSignUpPhoneCode();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmSignUpPhoneCodeSchema>({
    resolver: zodResolver(confirmSignUpPhoneCodeSchema),
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
      const confirmSignUpPhoneCodeParams = navigation.getScreenParams(
        'account/confirm-sign-up-phone-code',
      );

      const params = {
        username: confirmSignUpPhoneCodeParams.username,
        confirmationCode: data.confirmationCode,
      };

      function onSuccess() {
        navigation.reset('account/sign-in');
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
