import Translation from '@core/translation';
import { z } from 'zod';

const t = Translation.get(null, 'editProfile');

export const editProfileSchema = z.object({
  avatar: z.object({
    path: z.string().trim(),
    type: z.string().trim(),
  })
  .optional(),
  wallpaper: z.object({
    path: z.string().trim(),
    type: z.string().trim(),
  })
  .optional(),
  fullName: z
    .string()
    .optional(),
  firstName: z
    .string({ required_error: t('isRequiredFirstName') })
    .min(1,  t('isRequiredFirstName'))
    .trim(),
  lastName: z
    .string({ required_error: t('isRequiredLastName') })
    .min(1,  t('isRequiredLastName') )
    .trim(),
  gender: z
    .string({ required_error: t('isRequiredGender') })
    .min(1, t('isRequiredGender'))
    .trim(),
  country: z
    .string({ required_error: t('isRequiredCountry') })
    .min(1, t('isRequiredCountry'))
    .trim(),
  bio: z.string().trim().optional(),
  link: z.string().trim().optional(),
  links: z.array(z.string().trim()).optional(),
  dateOfBirth: z
    .date()
    .refine(date => date.isAtLeastThirteenYearsOld(), {
      message: t('leastThirteen'),
      path: ['dateOfBirth'],
    })
    .refine(date => !!date, {
      message: t('isRequiredDateOfBirth'),
      path: ['dateOfBirth'],
    }),
});
