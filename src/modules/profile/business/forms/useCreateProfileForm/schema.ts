import Translation from '@core/translation';
import { z } from 'zod';

const t = Translation.get(null, 'createProfile');

export const createProfileSchema = z.object({
  avatar: z
    .object({
      path: z.string(),
      type: z.string().trim(),
    })
    .optional(),
  wallpaper: z
    .object({
      path: z.string(),
      type: z.string().trim(),
    })
    .optional(),
  firstName: z
    .string({ required_error: t('isRequiredFirstName') })
    .min(1, t('isRequiredFirstName'))
    .trim(),
  lastName: z
    .string({ required_error: t('isRequiredLastName') })
    .min(1, t('isRequiredLastName'))
    .trim(),
  gender: z
    .string({ required_error: t('isRequiredGender') })
    .min(1, t('isRequiredGender'))
    .trim(),
  country: z
    .string({ required_error: t('isRequiredCountry') })
    .min(1, t('isRequiredCountry'))
    .trim(),
  dateOfBirth: z.date({ message: t('isRequiredDateOfBirth') }),
});
