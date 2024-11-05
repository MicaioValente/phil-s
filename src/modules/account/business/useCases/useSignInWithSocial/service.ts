import { signInWithRedirect } from 'aws-amplify/auth';

import type {
  SignInWithSocialParams,
  SignInWithSocialResponse,
} from '@modules/account/business/useCases/useSignInWithSocial/interfaces';

export async function signInWithSocialService(
  params: SignInWithSocialParams,
): Promise<SignInWithSocialResponse> {
  await signInWithRedirect({
    ...params,
    options: {
      preferPrivateSession: true,
    },
  });
}
