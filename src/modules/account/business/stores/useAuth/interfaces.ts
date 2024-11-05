export interface AuthStore {
  user: UserModel;
  signIn: (user: UserModel) => void;
  signOut: () => void;
  updateUser: (user: Partial<UserModel>) => void;
}
