import { Ionicons } from '@expo/vector-icons';

import { Button, If, ProtectedImage, YStack, Image } from '@dls/components';
import type { HeaderFeedProps } from '@modules/feed/mobile/components/FeedHeader/interfaces';
import { LogoHeaderFeed, MenuIcon } from '@modules/feed/mobile/assets';
import { useNavigation } from '@shared/hooks';
import { imageStyles } from '@modules/feed/mobile/components/FeedHeader/styles';

function FeedHeader({ avatarUrl, showMenuProducts }: HeaderFeedProps) {
  const nav = useNavigation();

  const goProfile = () => nav.navigate('profile/home');
  const goSearch = () => nav.navigate('feed/search');

  return (
    <YStack
      w={'100%'}
      fd="row"
      ai="center"
      jc="space-between"
      px="$3"
      py="$3"
      bg="$background">
      <Button onPress={goProfile}>
        <If
          condition={!!avatarUrl}
          elseRender={
            <Image
              {...imageStyles}
              source={require('@modules/onboarding/mobile/assets/images/default.png')}
            />
          }>
          <ProtectedImage uri={avatarUrl} {...imageStyles} />
        </If>
      </Button>

      <LogoHeaderFeed width="122.47px" height="33.52px" />

      <YStack fd="row" ai="center">
        <Button onPress={goSearch}>
          <Ionicons
            name="search"
            color="white"
            size={21}
            style={{ marginRight: 20 }}
          />
        </Button>
        <Button onPress={showMenuProducts}>
          <MenuIcon width="22.54px" height="22.14px" />
        </Button>
      </YStack>
    </YStack>
  );
}

export default FeedHeader;
