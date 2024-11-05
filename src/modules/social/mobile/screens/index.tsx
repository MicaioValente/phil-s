import type { NavigationMapper } from '@core/navigation/interfaces';
import Home from '@modules/social/mobile/screens/Home';

export default function SocialScreens(navigationMapper: NavigationMapper) {
  navigationMapper.addScreen(Home);
}

export interface SocialScreensMapper {
  'social/home': void;
}
