import type { NavigationMapper } from '@core/navigation/interfaces';
import Sign from '@modules/account/mobile/screens/Sign';
import SignIn from '@modules/account/mobile/screens/SignIn';
import SignUpWithEmail from '@modules/account/mobile/screens/SignUpWithEmail';
import SignUpWithPhone from '@modules/account/mobile/screens/SignUpWithPhone';
import ConfirmSignUpEmail from '@modules/account/mobile/screens/ConfirmSignUpEmail';
import ForgetPassword from '@modules/account/mobile/screens/ForgetPassword';
import ConfirmPasswordResetCode from '@modules/account/mobile/screens/ConfirmPasswordResetCode';
import PasswordResetSuccessfully from '@modules/account/mobile/screens/PasswordResetSuccessfully';
import ConfirmSignUpPhoneCode from '@modules/account/mobile/screens/ConfirmSignUpPhoneCode';

export default function AccountScreens(navigationMapper: NavigationMapper) {
  navigationMapper
    .addScreen(Sign)
    .addScreen(SignIn)
    .addScreen(SignUpWithEmail)
    .addScreen(SignUpWithPhone)
    .addScreen(ConfirmSignUpEmail)
    .addScreen(ForgetPassword)
    .addScreen(ConfirmPasswordResetCode)
    .addScreen(PasswordResetSuccessfully)
    .addScreen(ConfirmSignUpPhoneCode);
}

export interface AccountScreensMapper {
  'account/sign': void;
  'account/sign-in': void;
  'account/sign-up-with-email': void;
  'account/confirm-sign-up-email': void;
  'account/sign-up-with-phone': void;
  'account/forgot-password': void;
  'account/confirm-password-reset-code': { newPassword: string, username: string };
  'account/password-reset-successfully': void;
  'account/confirm-sign-up-phone-code': { username: string };
}
