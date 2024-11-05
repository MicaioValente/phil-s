import type { NavigationMapper } from '@core/navigation/interfaces';
import Intro from '@modules/onboarding/mobile/screens/Intro';
import FindFriends from '@modules/onboarding/mobile/screens/FindFriends';
import FriendsList from '@modules/onboarding/mobile/screens/FriendsList';
import Interests from '@modules/onboarding/mobile/screens/Interests';
import FirstAccessInterests from '@modules/onboarding/mobile/screens/FirstAccessInterests';

export default function OnboardingScreens(navigationMapper: NavigationMapper) {
  navigationMapper
    .addScreen({
      component: Intro,
      name: 'onboarding/intro',
    })
    .addScreen(FirstAccessInterests)
    .addScreen(Interests)
    .addScreen(FindFriends)
    .addScreen(FriendsList);
}
export interface OnboardingScreensMapper {
  'onboarding/intro': void;
  'onboarding/first-access-interests': void;
  'onboarding/interests': void;
  'onboarding/find-friends': void;
  'onboarding/friends-list': void;
}
