import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { SignUpWithPhoneSchema } from '@modules/account/business/forms/useSignUpWithPhoneForm/interfaces';
import { signUpWithPhoneSchema } from '@modules/account/business/forms/useSignUpWithPhoneForm/schema';
import { useSignUpWithPhone } from '@modules/account/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';
import { useEffect } from 'react';

export function useSignUpWithPhoneForm() {
  const navigation = useNavigation();

  const { t } = useTranslation('signUpWithPhone');

  const { isLoading, mutate } = useSignUpWithPhone();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpWithPhoneSchema>({
    resolver: zodResolver(signUpWithPhoneSchema),
    mode: 'onChange',
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
      const username = `${data.countryCode!}${data.phone!.sanitize()}`;

      const params = {
        username,
        password: data.password!,
      };

      function onSuccess() {
        navigation.navigate('account/confirm-sign-up-phone-code', {
          username,
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
