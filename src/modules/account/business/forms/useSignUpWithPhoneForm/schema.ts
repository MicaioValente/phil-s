import { z } from 'zod';

import EventEmitter from '@core/eventEmitter';
import Translation from '@core/translation';

const t = Translation.get(null, 'signUpWithPhone');

const countryCodeSchema = z
  .string({ required_error: t('isRequiredCountry') })
  .min(1, t('isRequiredCountry'))
  .trim()
  .refine(val => val.startsWith('+'), {
    message: t('isRequiredCountry'),
  });

const phoneSchema = z
  .string({ required_error: t('isRequiredPhone') })
  .min(1, 'isRequiredPhone')
  .trim();

const passwordSchema = (name: string) =>
  z
    .string({ required_error: `${name} ${t('isRequired')}` })
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      `${t('passwordRules')}`,
    )
    .trim();

export const signUpWithPhoneSchema = z
  .object({
    countryCode: countryCodeSchema,
    phone: phoneSchema,
    password: passwordSchema(t('password')),
    confirmPassword: passwordSchema(t('confirmPassword')),
  })
  .partial()
  .refine(({ password }) => !!password, {
    message: `${t('password')} ${t('isRequired')}`,
    path: ['password'],
  })
  .refine(({ phone }) => !!phone, {
    message: `${t('phonePlaceholder')} ${t('isRequired')}`,
    path: ['phone'],
  })
  .refine(({ countryCode }) => !!countryCode, {
    message: `${t('countryCodePlaceholder')} ${t('isRequired')}`,
    path: ['countryCode'],
  })
  .refine(
    ({ password, confirmPassword }) => {
      const bothPasswordsAreValid = password === confirmPassword;

      const passwordIsValid = passwordSchema(t('password')).safeParse(
        password,
      ).success;
      const confirmPasswordIsValid = passwordSchema(
        t('confirmPassword'),
      ).safeParse(confirmPassword).success;

      if (bothPasswordsAreValid && passwordIsValid && confirmPasswordIsValid) {
        EventEmitter.emit('confirmPasswordIsValidated');
      } else EventEmitter.emit('confirmPasswordIsNotValidated');

      return bothPasswordsAreValid;
    },
    { message: t('passwordsMustBeTheSame'), path: ['confirmPassword'] },
  );
