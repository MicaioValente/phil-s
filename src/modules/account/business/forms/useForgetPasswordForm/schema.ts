import { z } from 'zod';

import Translation from '@core/translation';
import EventEmitter from '@core/eventEmitter';

const t = Translation.get(null, 'forgetPassword');

const passwordSchema = (name: string) =>
  z
    .string({ required_error: `${name} ${t('isRequired')}` })
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      `${t('passwordRules').replaceAll(', ', '\n')}`,
    )
    .trim();

const emailOrPhoneSchema = z
  .string({ required_error: 'requiredEmailOrPhone' })
  .min(1, 'requiredEmailOrPhone')
  .trim();

export const forgetPasswordSchema = z
  .object({
    newPassword: passwordSchema(t('newPassword')),
    confirmNewPassword: passwordSchema(t('confirmNewPassword')),
    username: emailOrPhoneSchema,
  })
  .partial()
  .refine(
    ({ newPassword, confirmNewPassword }) => {
      const bothPasswordsAreValid = newPassword === confirmNewPassword;
      const isValidPassword = passwordSchema(t('newPassword')).safeParse(
        newPassword,
      ).success;

      const isValidConfirmNewPassword = passwordSchema(
        t('confirmNewPassword'),
      ).safeParse(confirmNewPassword).success;

      if (
        bothPasswordsAreValid &&
        isValidPassword &&
        isValidConfirmNewPassword
      ) {
        EventEmitter.emit('confirmNewPasswordIsValidated');
      } else EventEmitter.emit('confirmNewPasswordIsNotValidated');

      return bothPasswordsAreValid;
    },
    { message: t('newPasswordMustBeTheSame'), path: ['confirmNewPassword'] },
  )
  .refine(({ newPassword }) => !!newPassword, {
    message: `${t('newPassword')} ${t('isRequired')}`,
    path: ['newPassword'],
  });
