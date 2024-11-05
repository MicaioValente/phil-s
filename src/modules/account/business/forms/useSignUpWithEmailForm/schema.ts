import { z } from 'zod';

import Translation from '@core/translation';
import EventEmitter from '@core/eventEmitter';

const t = Translation.get(null, 'signUpWithEmail');

export const emailSchema = (name: string) =>
  z
    .string({ required_error: `${name} ${t('isRequired')}` })
    .email(`${t('invalidEmail')}`)
    .trim();

const passwordSchema = (name: string) =>
  z
    .string({ required_error: `${name} ${t('isRequired')}` })
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      `${t('passwordRules')}`,
    )
    .trim();

export const signUpWithEmailSchema = z
  .object({
    email: emailSchema(t('email')),
    confirmEmail: emailSchema(t('confirmEmail')),
    password: passwordSchema(t('password')),
    confirmPassword: passwordSchema(t('confirmPassword')),
  })
  .partial()
  .refine(
    ({ email, confirmEmail }) => {
      const bothEmailsAreValid = confirmEmail === email;

      const emailIsValid = isValidEmail(email ?? '');
      const confirmEmailIsValid = isValidEmail(confirmEmail ?? '');

      if (bothEmailsAreValid && emailIsValid && confirmEmailIsValid) {
        EventEmitter.emit('confirmEmailIsValidated');
      } else EventEmitter.emit('confirmEmailIsNotValidated');

      return bothEmailsAreValid;
    },
    {
      message: t('emailsMustBeTheSame'),
      path: ['confirmEmail'],
    },
  )
  .refine(({ email }) => !!email, {
    message: t('email') + ' ' + t('isRequired'),
    path: ['email'],
  })
  .refine(({ password }) => !!password, {
    message: `${t('password')} ${t('isRequired')}`,
    path: ['password'],
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
    {
      message: t('passwordsMustBeTheSame'),
      path: ['confirmPassword'],
    },
  );

const isValidEmail = (inputEmail: string) => {
  const result = z.string().email().safeParse(inputEmail);
  return result.success;
};
