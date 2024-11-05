import { signIn, resendSignUpCode } from 'aws-amplify/auth';

import Navigation from '@core/navigation';
import type {
  SignInParams,
  SignInResponse,
} from '@modules/account/business/useCases/useSignIn/interfaces';
import { showLoadingFull } from '@dls/components/LoadingFull/methods';
import { isEmail } from '@shared/validations';

export async function signInService(
  params: SignInParams,
): Promise<SignInResponse> {
  showLoadingFull();

  const isSignInWithEmail = isEmail(params.username);

  const { nextStep } = await signIn({
    username: isSignInWithEmail
      ? params.username
      : params.username.startsWith('+')
      ? params.username
      : `+${params.username}`,
    password: params.password,
  });

  if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
    await resendSignUpCode({
      username: params.username,
    });

    if (isSignInWithEmail) {
      Navigation.ref.navigate('account/confirm-sign-up-email');

      return;
    }

    Navigation.ref.navigate('account/confirm-sign-up-phone-code', {
      username: params.username,
    });

    return;
  }
}
