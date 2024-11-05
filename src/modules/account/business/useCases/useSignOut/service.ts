import { signOut } from 'aws-amplify/auth';

import Query from '@core/query';
import type { SignOutParams } from '@modules/account/business/useCases/useSignOut/interfaces';

export async function signOutService(_: SignOutParams) {
  Query.clear();

  await signOut();
}
