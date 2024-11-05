import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { showToast } from '@dls/stores/useToast/methods';
import type { SignUpWithEmailSchema } from '@modules/account/business/forms/useSignUpWithEmailForm/interfaces';
import { signUpWithEmailSchema } from '@modules/account/business/forms/useSignUpWithEmailForm/schema';
import { useSignUpWithEmail } from '@modules/account/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';

export function useSignUpWithEmailForm() {
  const navigation = useNavigation();

  const { t } = useTranslation('signUpWithEmail');

  const { isLoading, mutate } = useSignUpWithEmail();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpWithEmailSchema>({
    resolver: zodResolver(signUpWithEmailSchema),
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
    handleSubmit((data: SignUpWithEmailSchema) => {
      const params = {
        email: data.email!,
        password: data.password!,
      };

      function onSuccess() {
        navigation.replace('account/confirm-sign-up-email');
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
