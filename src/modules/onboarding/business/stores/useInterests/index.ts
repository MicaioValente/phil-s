import isEqual from 'lodash/isEqual';
import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { interestsStoreConfig } from '@modules/onboarding/business/stores/useInterests/config';
import type { InterestsStore } from '@modules/onboarding/business/stores/useInterests/interfaces';

const interests = [] as InterestModel[];

export const useInterests = createWithEqualityFn(
  persist<InterestsStore>(
    (set) => ({
      interests,
      updateInterests: data =>
        set(() => ({ interests: data })),
    }),
    interestsStoreConfig<InterestsStore>({ name: 'interest' }),
  ),
  isEqual,
);

export * from '@modules/onboarding/business/stores/useInterests/methods';
