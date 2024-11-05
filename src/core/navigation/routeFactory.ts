import type {
  NavigationMapper,
  Screen,
  TabScreen,
} from '@core/navigation/interfaces';

import { tabRooFactory } from '@core/navigation/bottomTabFactory';
import AccountScreens from '@modules/account/mobile/screens';
import OnboardingScreens from '@modules/onboarding/mobile/screens';
import SocialScreens from '@modules/social/mobile/screens';
import ProfileScreens from '@modules/profile/mobile/screens';
import FeedScreens from '@modules/feed/mobile/screens';
import ChatScreens from '@modules/chat/mobile';
import WalletScreens from '@modules/wallet/mobile/screens';

const routes = {
  public: new Set<Screen>(),
  private: new Set<Screen>(),
};

const addScreen = function (this: NavigationMapper, screen: Screen) {
  screen.isPrivate ? routes.private.add(screen) : routes.public.add(screen);

  return this;
};

[
  ChatScreens,
  AccountScreens,
  OnboardingScreens,
  SocialScreens,
  ProfileScreens,
  FeedScreens,
  WalletScreens,
].forEach(module => module({ addScreen }));

export const publicRoutes = Array.from(routes.public);

export const privateRoutes = Array.from(routes.private);

const tabRoutes = (
  privateRoutes.filter(screen => screen.bottomBarOptions) as TabScreen[]
).sort((a, b) => a.bottomBarOptions.index - b.bottomBarOptions.index);

privateRoutes.push({
  name: 'tabRoot',
  component: tabRooFactory(tabRoutes, {
    initialRouteName: tabRoutes[0].name,
  }),
});
