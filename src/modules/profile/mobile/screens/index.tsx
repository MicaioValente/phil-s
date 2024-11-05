import type { NavigationMapper } from '@core/navigation/interfaces';
import Home from '@modules/profile/mobile/screens/Profile';
import EditProfile from '@modules/profile/mobile/screens/EditProfile';
import CreateProfile from '@modules/profile/mobile/screens/CreateProfile';
import Followers from '@modules/profile/mobile/screens/Followers';
import Following from '@modules/profile/mobile/screens/Following';
import Settings from '@modules/profile/mobile/screens/Settings';
import Activity from '@modules/profile/mobile/screens/Activity';
import Saved from '@modules/profile/mobile/screens/Saved';
import UserProfile from '@modules/profile/mobile/screens/UserProfile';
import Archive from '@modules/profile/mobile/screens/Archive';

export default function ProfileScreens(navigationMapper: NavigationMapper) {
  navigationMapper
    .addScreen({ name: 'profile/home', component: Home, isPrivate: true })
    .addScreen(UserProfile)
    .addScreen(EditProfile)
    .addScreen(CreateProfile)
    .addScreen({
      name: 'profile/followers',
      component: Followers,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/following',
      component: Following,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/subscribers',
      component: Following,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/viewers',
      component: Following,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/settings',
      component: Settings,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/activity',
      component: Activity,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/saved',
      component: Saved,
      isPrivate: true,
    })
    .addScreen({
      name: 'profile/archive',
      component: Archive,
      isPrivate: true,
    });
}

export interface ProfileScreensMapper {
  'profile/home': void;
  'profile/edit': void;
  'profile/create': void;
  'profile/followers': void;
  'profile/following': void;
  'profile/subscribers': void;
  'profile/viewers': void;
  'profile/settings': void;
  'profile/activity': void;
  'profile/saved': void;
  'profile/user': { userId: string };
  'profile/archive': void;
}
