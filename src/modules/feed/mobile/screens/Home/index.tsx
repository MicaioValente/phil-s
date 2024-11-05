import { Fragment, useState } from 'react';

import { YStack } from '@dls/components';
import {
  FeedHeader,
  FeedPagination,
  ModalStory,
  PostList,
  StoryList,
} from '@modules/feed/mobile/components';
import { useAuth } from '@modules/account/business/stores';
import { Screen } from '@core/navigation/interfaces';
import { HomeIcon } from '@modules/feed/mobile/screens/Home/styles';

function Component() {
  const {user} = useAuth()
  const [visibleMenuProducts, setVisibleMenuProducts] = useState(false);
  const showMenuProducts = () => setVisibleMenuProducts(!visibleMenuProducts);
  const renderHeader = (
    <Fragment>
      <YStack zIndex={1}>
        <FeedHeader avatarUrl={user.avatarUrl} showMenuProducts={showMenuProducts}/>
        <FeedPagination  visibleMenuProducts={visibleMenuProducts} closeMenuProducts={showMenuProducts} />
        <StoryList />
      </YStack>
    </Fragment>
  );

  return (
    <YStack bg={'$background'} f={1} pt={'$it'}>
      <ModalStory />
      <PostList {...{ renderHeader }} />
    </YStack>
  );
}

const Home: Screen = {
  name: 'feed/home',
  component: Component,
  isPrivate: true,
  bottomBarOptions: {
    index: 0,
    label: 'Feed',
    icon: ({ color, size }) => (
      <HomeIcon name="home-filled" {...{ color, size }} />
    ),
  },
};

export default Home;
