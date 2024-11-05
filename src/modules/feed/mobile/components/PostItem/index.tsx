import { TouchableOpacity } from 'react-native';
import { Avatar } from 'tamagui';

import {
  Button,
  If,
  LinearGradient,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import { useTranslation } from '@shared/hooks/useTranslation';

import { formatDatePost, formatNumber } from '@modules/feed/business/helpers';
import LikedIcon from '@modules/feed/mobile/assets/icons/LikedIcon.svg';
import CommentIcon from '@modules/feed/mobile/assets/icons/CommentIcon.svg';
import FavoriteIcon from '@modules/feed/mobile/assets/icons/FavoriteIcon.svg';
import type { PostItemProps } from '@modules/feed/mobile/components/PostItem/interfaces';
import { DotsThreeIcon } from '@modules/feed/mobile/components/PostItem/styles';
import { PostVideo, PostImage } from '@modules/feed/mobile/components';

import PostActionsPopup from '@modules/feed/mobile/components/PostActionsPopup';
import { usePopup } from '@modules/feed/mobile/components/PostItem/hooks';
import { useNavigation } from '@shared/hooks';

export function PostItem({ item }: PostItemProps) {
  const { t } = useTranslation('feedHome');
  const { dotsRef, layout, ref, handleOpenPopUp, onLayoutButton } = usePopup();

  const navigation = useNavigation();

  const hasImage = item.media.some(m => m.type === 'IMAGE');
  const hasVideo = item.media.some(m => m.type === 'VIDEO');
  const hasSong = item.media.some(m => m.type === 'SONG');

  const onNavigationToUserProfile = () => {
    navigation.navigate('profile/user', {
      userId: 'd488e468-60c1-7013-bc83-317e9cea175b',
    });
  };

  const onNavigationToPost = () => {
    navigation.navigate('feed/post', {
      post: item,
    });
  }

  const renderTextButton = () => {
    if (true) {
      return t('followMe');
    } else {
      return t('giveBack');
    }
  };

  const renderMedia = () => {
    const data = item.media.map(m => {
      return {
        url: m.url,
        id: m.id,
      };
    });

    if (hasImage) {
      return <PostImage {...{ data }} />;
    }
    if (hasVideo) return <PostVideo {...{ data }} />;
    if (hasSong) return <Text>Song</Text>;
  };

  return (
    <YStack w={'100%'} bg={'$contrast'}>
      <XStack
        ai={'center'}
        w={'100%'}
        jc={'space-between'}
        px={'$4'}
        paddingTop={'$2.5'}>
        <XStack>
          <Button onPress={onNavigationToUserProfile}>
            <Avatar circular size={'$4'} marginRight={'$1.5'}>
              <Avatar.Image src={item.user.image} />
            </Avatar>
          </Button>
          <YStack ai={'flex-start'} ml={'$2'}>
            <Text fos={'$4'} fow={'bold'} col={'$text'}>
              {item.user.name}
            </Text>
            <Text fos={'$3'} color={'#666666'}>
              {formatDatePost(item.createdAt)} - {item.location}
            </Text>
          </YStack>
        </XStack>

        <TouchableOpacity
          onPress={handleOpenPopUp}
          ref={dotsRef}
          onLayout={onLayoutButton}>
          <DotsThreeIcon
            name="dots-three-horizontal"
            size={24}
            color={'$white1'}
          />
        </TouchableOpacity>

        <PostActionsPopup
          {...{ ref, layout, close: () => ref.current?.close() }}
        />
      </XStack>

      <If condition={!!item.description}>
        <Text col={'$text'} fos={'$4'} my={'$3'} px={'$4'}>
          {item.description}
        </Text>
      </If>

      <If condition={!!item.media.length}>{renderMedia()}</If>

      <XStack
        w={'100%'}
        height={48}
        bg={'$background'}
        px={'$4'}
        jc={'space-between'}>
        <XStack gap={'$4'} jc={'center'} ai={'center'} height={'100%'}>
          <Button jc={'center'} ai={'center'} height={'100%'} fd={'row'}>
            <LikedIcon />
            <Text col={'#666666'} fos={'$5'} fow={'700'} mb={'$1.5'}>
              {formatNumber(item.likes)}
            </Text>
          </Button>
          <Button
            onPress={onNavigationToPost}
            jc={'center'}
            ai={'center'}
            height={'100%'}
            fd={'row'}
            mb={'$1'}>
            <CommentIcon />
            <Text col={'#666666'} fos={'$5'} fow={'700'}>
              {formatNumber(item.comments)}
            </Text>
          </Button>

          <Button
            jc={'center'}
            ai={'center'}
            height={'100%'}
            fd={'row'}
            mb={'$1'}>
            <FavoriteIcon />
            <Text col={'#666666'} fos={'$5'} fow={'700'}>
              {formatNumber(item.shares)}
            </Text>
          </Button>
        </XStack>

        <Button
          h={30}
          jc={'center'}
          ai={'center'}
          als={'center'}
          onPress={() => console.log('Clicou em botao')}>
          <LinearGradient
            colors={['$secondary', '$primary']}
            h="100%"
            px={'$3'}
            br="$2"
            jc="center"
            ai="center"
            start={[0, 1]}
            end={[0, 0]}>
            <Text col="$text" fos="$5" fow="bold">
              {renderTextButton()}
            </Text>
          </LinearGradient>
        </Button>
      </XStack>
    </YStack>
  );
}

export default PostItem;
