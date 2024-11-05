import { Share, Linking } from 'react-native';
import { useMemo, useState } from 'react';
import { Avatar } from 'tamagui';

import {
  XStack,
  Button,
  Text,
  LinearGradient,
  If,
  ProtectedImage,
  Image,
  Spinner,
} from '@dls/components';
import { useTranslation } from '@shared/hooks';
import type { ContactItemProps } from '@modules/onboarding/mobile/components/ContactItem/interfaces';
import { useFollow } from '@modules/profile/business/useCases/useFollow';

function ContactItem({
  item,
  onInvite,
  onUpdateStatusFollowing,
  ...props
}: ContactItemProps) {
  const { t } = useTranslation('friendsListOnboarding');

  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useFollow();

  const isPhillap = item.isFound;
  const invitedText = item.isInvited ? t('invited') : t('invite');
  const followingText = item.isFollowing ? t('following') : t('follow');
  const textButton = isPhillap ? followingText : invitedText;

  const uri = item.avatar || '';

  const handleClick = async () => {
    if (!isPhillap) return invite();

    setIsLoading(true);

    if (item.isFollowing) {
      await mutateAsync({
        followedUserId: item.id,
        typeRequest: 'UNFOLLOW',
      });

      handleUpdateStatusFollowing(item.id, false);
      return;
    }

    await mutateAsync({
      followedUserId: item.id,
      typeRequest: 'FOLLOW',
    });

    handleUpdateStatusFollowing(item.id, true);
  };

  const handleUpdateStatusFollowing = (id: string, status: boolean) => {
    onUpdateStatusFollowing(id, status);
    setIsLoading(false);
  };

  const invite = async () => {
    const phoneNumber = item.phone;
    const message = encodeURIComponent(t('invite'));

    const supported = await Linking.canOpenURL(
      `whatsapp://send?text=${message}`,
    );

    if (!supported) {
      const result = await Share.share({
        message: t('invite'),
        title: t('invite'),
      });

      if (result.action === 'sharedAction') {
        onInvite(item.id);
      }

      return;
    }
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    await Linking.openURL(url);
    
    onInvite(item.id);
  };

  const renderAvatar = useMemo(() => {
    if (uri && item.isFound) {
      return <ProtectedImage uri={uri} h={44} w={44} br={22} />;
    }
    if (uri) {
      return (
        <Avatar circular size={'$3'}>
          <Avatar.Image src={uri} />
        </Avatar>
      );
    }
    return (
      <Image
        source={require('@modules/onboarding/mobile/assets/images/default.png')}
        h={44}
        w={44}
        br={22}
      />
    );
  }, [item.avatar, uri]);

  return (
    <XStack w={'100%'} height={44} my={'$2'} {...props}>
      <XStack w={'100%'} height={44} ai={'center'}>
        {renderAvatar}

        <Text color={'$white1'} fow={'bold'} fos={'$5'} ml={'$2'}>
          {item.name}
        </Text>

        <Button
          onPress={handleClick}
          opacity={0.1}
          width={91}
          height={32}
          position="absolute"
          right="$1"
          br="$2"
          jc="center"
          ai="center"
          backgroundColor={!isPhillap ? '#BBB' : 'transparent'}>
          <If
            condition={isPhillap}
            elseRender={
              <If
                condition={item.isInvited}
                elseRender={
                  <Text col="$black1" fos="$5" fow="bold">
                    {textButton}
                  </Text>
                }>
                <LinearGradient
                  colors={['$secondary', '$primary']}
                  w="100%"
                  h="100%"
                  br="$2"
                  jc="center"
                  ai="center"
                  start={[0, 1]}
                  end={[0, 0]}>
                  <Text col="$text" fos="$5" fow="bold">
                    {textButton}
                  </Text>
                </LinearGradient>
              </If>
            }>
            <LinearGradient
              colors={['$secondary', '$primary']}
              w="100%"
              h="100%"
              br="$2"
              jc="center"
              ai="center"
              start={[0, 1]}
              end={[0, 0]}>
              <If condition={!isLoading} elseRender={<Spinner color="$text" />}>
                <Text col="$text" fos="$5" fow="bold">
                  {textButton}
                </Text>
              </If>
            </LinearGradient>
          </If>
        </Button>
      </XStack>
    </XStack>
  );
}

export default ContactItem;
