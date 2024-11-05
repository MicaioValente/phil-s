import React from 'react';
import { ImageBackground, useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { YStack, XStack, Button } from '@dls/components';
import { styles } from '@modules/onboarding/mobile/components/HeaderFindFriendsPermission/styles';
import type { HeaderFindFriendsPermissionProps } from '@modules/onboarding/mobile/components/HeaderFindFriendsPermission/interfaces';

function HeaderFindFriendsPermission({
  imgBackground,
  onClose,
}: HeaderFindFriendsPermissionProps) {
  const { width } = useWindowDimensions();

  return (
    <YStack borderBottomLeftRadius={40}>
      <ImageBackground
        source={imgBackground}
        style={[styles.backgroundImg, { width}]}
      />
      <XStack w="100%" h={40} position="absolute" top={'10%'} pl={20}>
        <Button onPress={onClose}>
          <Ionicons name="close" size={25} color="black" />
        </Button>
      </XStack>
    </YStack>
  );
}

export default HeaderFindFriendsPermission;
