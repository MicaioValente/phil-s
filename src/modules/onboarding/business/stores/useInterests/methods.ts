import { useInterests } from '@modules/onboarding/business/stores/useInterests';

export function updateInterests(interests: any) {
  useInterests.getState().updateInterests(interests);
}
