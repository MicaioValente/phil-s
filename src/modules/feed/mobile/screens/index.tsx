import { styled } from 'tamagui';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import type { NavigationMapper } from '@core/navigation/interfaces';
import Home from '@modules/feed/mobile/screens/Home';
import Suggestions from '@modules/feed/mobile/screens/Suggestions';
import Search from '@modules/feed/mobile/screens/Search';
import CreateStory from '@modules/feed/mobile/screens/CreateStory';
import Plus from '@modules/feed/mobile/screens/Plus';
import CreatePost from '@modules/feed/mobile/screens/CreatePost';
import Post from '@modules/feed/mobile/screens/Post';

import { Text, YStack } from '@dls/components';


const CircleIcon = styled(MaterialCommunityIcons, {});
const NotificationIcon = styled(Ionicons, {});

const Component = () => (
  <YStack f={1} ai="center" jc="center">
    <Text>In development</Text>
  </YStack>
);

export default function FeedScreens(navigationMapper: NavigationMapper) {
  navigationMapper
    .addScreen(Home)
    .addScreen(Plus)
    .addScreen({
      name: 'feed/live',
      component: Component,
      isPrivate: true,
      bottomBarOptions: {
        index: 1,
        label: 'Live',
        icon: ({ color, size }) => (
          <CircleIcon name="circle-double" {...{ color, size }} />
        ),
      },
    })
    .addScreen({
      name: 'feed/notifications',
      component: Component,
      isPrivate: true,
      bottomBarOptions: {
        index: 3,
        label: 'Live',
        icon: ({ color, size }) => (
          <NotificationIcon name="notifications" {...{ color, size }} />
        ),
      },
    })
    .addScreen(Suggestions)
    .addScreen({
      name: 'feed/search',
      component: Search,
      isPrivate: true,
    })
    .addScreen({
      name: 'feed/createStory',
      component: CreateStory,
      isPrivate: true,
    })
    .addScreen(CreatePost)
    .addScreen(Post)
}

export interface FeedScreensMapper {
  'feed/home': void;
  'feed/suggestions': void;
  'feed/search': void;
  'feed/createStory': void;
  'feed/create-post': void;
  'feed/post': {post: PostItemModel};
}
