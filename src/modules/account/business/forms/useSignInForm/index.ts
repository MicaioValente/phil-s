import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { showToast } from '@dls/stores';
import { useSignIn } from '@modules/account/business/useCases';
import type { SignInUserNameSchema } from '@modules/account/business/forms/useSignInForm/interfaces';
import { signInSchema } from '@modules/account/business/forms/useSignInForm/schema';
import { useTranslation } from '@shared/hooks';

export function useSignInForm() {
  const { t } = useTranslation('signin');

  const { isLoading, mutate } = useSignIn();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignInUserNameSchema>({
    resolver: zodResolver(signInSchema),
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
          if (messageKey) {
            return t(messageKey, { defaultValue: messageKey });
          }
        })
        .filter((message, index, self) => self.indexOf(message) === index)
        .join('\n');

      showToast({
        title: t('toastErrorTitle'),
        message: errorMessages,
      });

      return;
    }

    callback();
  };

  const onSubmit = handleErrors(
    handleSubmit(data => {
      const params = {
        username: data.username,
        password: data.password,
      };

      mutate(params);
    }),
  );

  return { control, isLoading, onSubmit };
}
