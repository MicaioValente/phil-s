import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { CreateProfileSchema } from '@modules/profile/business/forms/useCreateProfileForm/interfaces';
import { createProfileSchema } from '@modules/profile/business/forms/useCreateProfileForm/schema';
import { useCreateProfile } from '@modules/profile/business/useCases';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';
import { useInterests } from '@modules/onboarding/business/stores';

export function useCreateProfileForm() {
  const navigation = useNavigation();

  const { isLoading, mutate } = useCreateProfile();
  const { t } = useTranslation('createProfile');
  const { interests, updateInterests } = useInterests();

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<CreateProfileSchema>({
    resolver: zodResolver(createProfileSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    trigger();
  }, []);

  const handleErrors = (callback: Function) => () => {
    const isThereError = Object.values(errors)[0] ?? null;

    if (isThereError) {
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
      let gender = '';

      if (data.gender === t('male')) {
        gender = 'male';
      } else if (data.gender === t('female')) {
        gender = 'female';
      } else {
        gender = 'other';
      }

      const params = {
        avatar: data?.avatar ?? null,
        firstName: data.firstName,
        lastName: data.lastName,
        gender,
        country: data.country,
        dateOfBirth: data.dateOfBirth,
        wallpaper: data?.wallpaper ?? null,
        interests: interests.map(interest => interest.id) || [],
      };

      function onSuccess() {
        navigation.replace('onboarding/find-friends');

        updateInterests([]);
      }

      mutate(params, { onSuccess });
    }),
  );

  return {
    control,
    isLoading,
    onSubmit,
    setValue,
  };
}
