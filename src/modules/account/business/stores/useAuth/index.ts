import isEqual from 'lodash/isEqual';
import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { authStoreConfig } from '@modules/account/business/stores/useAuth/config';
import type { AuthStore } from '@modules/account/business/stores/useAuth/interfaces';

const user = {} as UserModel;

export const useAuth = createWithEqualityFn(
  persist<AuthStore>(
    (set, get) => ({
      user,
      signIn: user => set({ user }),
      signOut: () => set({ user }),
      updateUser: data => set({ user: { ...get().user, ...data } }),
    }),
    authStoreConfig<AuthStore>({ name: 'auth' }),
  ),
  isEqual,
);

export * from '@modules/account/business/stores/useAuth/methods';
