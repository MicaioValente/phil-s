import { useAuth } from '@modules/account/business/stores/useAuth';

export function signIn(user: UserModel) {
  useAuth.getState().signIn(user);
}

export function updateUser(user: Partial<UserModel>) {
  useAuth.getState().updateUser(user);
}

export function signOut() {
  useAuth.getState().signOut();
}
