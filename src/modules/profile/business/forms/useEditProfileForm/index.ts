import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import type { EditProfileSchema } from '@modules/profile/business/forms/useEditProfileForm/interfaces';
import { editProfileSchema } from '@modules/profile/business/forms/useEditProfileForm/schema';
import { useEditProfile } from '@modules/profile/business/useCases';
import { useTranslation } from '@shared/hooks';
import type { EditProfileParams } from '@modules/profile/business/useCases/useEditProfile/interfaces';
import { useAuth } from '@modules/account/business/stores';

import { showToast } from '@dls/stores';
import { hasFieldChanged } from '@modules/profile/business/helpers';

export function useEditProfileForm() {
  const [isProfileUpdateAllowed, setIsProfileUpdateAllowed] = useState(false);

  const { isLoading, mutate } = useEditProfile();

  const { t } = useTranslation('editProfile');
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    mode: 'onChange',
    defaultValues: {
      bio: (user.biography as string) ?? '',
      country: user.country,
      dateOfBirth: new Date(user.dateOfBirth),
      firstName: user.firstName,
      fullName: user.firstName + ' ' + user.lastName,
      gender: t(user.gender as 'male' | 'female' | 'other'),
      lastName: user.lastName,
      links: (user.links as string[]) ?? [],
    },
  });

  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const gender = watch('gender');
  const country = watch('country');
  const dateOfBirth = watch('dateOfBirth');
  const bio = watch('bio');
  const avatar = watch('avatar');
  const wallpaper = watch('wallpaper');
  const links = watch('links');

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    setValue('fullName', `${firstName} ${lastName}`);
  }, [firstName, lastName, setValue]);

  useEffect(() => {
    const isAvatarOrWallpaperChanged = avatar || wallpaper;
    const isDateOfBirthChanged = !isSameDate(
      new Date(dateOfBirth),
      new Date(user.dateOfBirth),
    );
    const userLinks = user?.links ?? [];
    const currentLinks = links ?? [];

    const isLinksChanged =
      userLinks.length !== currentLinks.length ||
      userLinks.some((link, index) => link !== currentLinks[index]);

    if (
      hasFieldChanged(firstName, user.firstName) ||
      hasFieldChanged(lastName, user.lastName) ||
      hasFieldChanged(gender, t(user.gender as 'male' | 'female' | 'other')) ||
      hasFieldChanged(country, user.country) ||
      isDateOfBirthChanged ||
      hasFieldChanged(bio, user.biography) ||
      isAvatarOrWallpaperChanged ||
      isLinksChanged
    ) {
      setIsProfileUpdateAllowed(true);
    } else {
      setIsProfileUpdateAllowed(false);
    }
  }, [
    firstName,
    lastName,
    gender,
    country,
    dateOfBirth,
    bio,
    avatar,
    wallpaper,
    user,
    links,
  ]);

  const handleErrors = (callback: Function) => () => {
    const isThereAnyError = Object.values(errors)[0] ?? null;

    if (isThereAnyError) {
      const isFieldError = (error: any): error is { message: string } => {
        return error && typeof error.message === 'string';
      };

      const errorMessages = Object.values(errors)
        .flatMap(error => Object.values(error))
        .map(error => {
          if (!isFieldError(error)) return;
          const messageKey = error.message;
          return t(messageKey, { defaultValue: messageKey });
        })
        .filter(
          (message, index, self) => message && self.indexOf(message) === index,
        )
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

      const params: EditProfileParams = {
        avatar: data.avatar || user.avatarUrl,
        firstName: data.firstName,
        lastName: data.lastName,
        gender,
        country: data.country,
        dateOfBirth: data.dateOfBirth,
        bio: data.bio ?? '',
        wallpaper: data.wallpaper || user.wallpaperUrl,
        links: data.links || [],
      };

      function onSuccess() {
        showToast({
          title: t('successTitle'),
          message: t('successMessage'),
        });
      }

      mutate(params, { onSuccess });
    }),
  );

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.toISOString().split('T')[0] === date2.toISOString().split('T')[0]
    );
  };


  return {
    control,
    links,
    isLoading,
    isProfileUpdateAllowed,
    onSubmit,
    setValue,
    setIsProfileUpdateAllowed,
  };
}
