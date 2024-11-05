import { Avatar } from 'tamagui';

import { Button, Text, XStack, YStack } from '@dls/components';
import { useTranslation } from '@shared/hooks/useTranslation';

import { formatDatePost, formatNumber } from '@modules/feed/business/helpers';
import LikeCommentIcon from '@modules/feed/mobile/assets/icons/LikeCommentIcon.svg';

import type { CommentItemProps } from '@modules/feed/mobile/components/CommentItem/interfaces';

export function CommentItem({ item, isFirstChildren = false }: CommentItemProps) {
  const { t } = useTranslation('feedPost');
  const onNavigationToUserProfile = () => {};

  const isChildren = !!item.parentCommentId;
  const marginBottomChildren = isChildren && isFirstChildren ? 0 : '$4';
  const marginRightChildren = !isChildren ? 0 : '$7';

  return (
    <YStack w={'100%'}>
      <XStack w={'100%'} jc={'space-between'} ai={'center'}>
        <XStack>
          <Button onPress={onNavigationToUserProfile}>
            <Avatar circular size={'$3'} mr={'$1.5'}>
              <Avatar.Image src={item.user.image} />
            </Avatar>
          </Button>
          <YStack ai={'flex-start'} ml={'$2'}>
            <Text fos={'$4'} fow={'bold'} col={'$text'}>
              {item.user.name}
            </Text>
            <Text fos={'$3'} color={'$gray'}>
              {item.user.address}
            </Text>
          </YStack>
        </XStack>
        <Text fos={'$3'} color={'$gray'} mr={marginRightChildren}>
          {formatDatePost(item.createdAt)}
        </Text>
      </XStack>

      <Text col={'$text'} fos={'$4'} my={'$3'}>
        {item.comment.content}
      </Text>

      <XStack w={'100%'} jc={'space-between'} ai={'center'}>
        <XStack>
          <Button mr={'$4'}>
            <Text fos={14} fow={600} col={'#bbb'}>
              {t('like')}
            </Text>
          </Button>

          <Button>
            <Text fos={14} fow={600} col={'#bbb'}>
              {t('reply')}
            </Text>
          </Button>
        </XStack>

        <Button ai={'center'} jc={'center'} gap={'$2'} mr={marginRightChildren} fd={'row'}  pb={marginBottomChildren}>
          <Text col={'$white1'}>{formatNumber(item.comment.likes)}</Text>
          <LikeCommentIcon />
        </Button>
      </XStack>
    </YStack>
  );
}

export default CommentItem;
