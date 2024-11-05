import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';

import type { AccountScreensMapper } from '@modules/account/mobile/screens';
import type { OnboardingScreensMapper } from '@modules/onboarding/mobile/screens';
import type { SocialScreensMapper } from '@modules/social/mobile/screens';
import type { ProfileScreensMapper } from '@modules/profile/mobile/screens';
import type { FeedScreensMapper } from '@modules/feed/mobile/screens';
import type { ChatScreensMapper } from '@modules/chat/mobile';
import type { WalletScreensMapper } from '@modules/wallet/mobile/screens';
export interface NavigationApi {
  ref: NavigationContainerRefWithCurrent<AllScreens>;
}

export type ScreenComponent = React.ComponentType<unknown>;

export interface Screen {
  name: string;
  component: ScreenComponent;
  isPrivate?: boolean;
  bottomBarOptions?: BottomBarOptions;
}

export interface TabScreen extends Omit<Screen, 'bottomBarOptions'> {
  bottomBarOptions: BottomBarOptions;
}

export interface NavigatorOptions {
  initialRouteName: string;
}

interface IconProps {
  isFocused: boolean;
  size: number;
  color: string;
}

export interface BottomBarOptions {
  label: string;
  index: number;
  icon: (props: IconProps) => React.ReactNode;
}

export interface NavigationMapper {
  addScreen(screen: Screen): this;
}

export interface AllScreens
  extends AccountScreensMapper,
    ChatScreensMapper,
    ProfileScreensMapper,
    OnboardingScreensMapper,
    SocialScreensMapper,
    FeedScreensMapper,
    WalletScreensMapper {
  tabRoot: void;
}
