import React from 'react';
import { Button, Text, YStack } from '@dls/components';
import { useNavigation } from '@shared/hooks';

import { AntDesignIcon } from '@modules/feed/mobile/components/Header/styles';
import type {
  HeaderComponent,
  HeaderIconRightProps,
  HeaderTextProps,
} from '@modules/feed/mobile/components/Header/interfaces';

const Header: HeaderComponent = ({ children }) => {
  return (
    <YStack  pt={'$it'} bg={'$background'}>
      <YStack fd={'row'} px="$4" py="$4" ai="center" jc={'center'} >
        {children}
      </YStack>
    </YStack>
  );
};

Header.IconBack = () => {
  const nav = useNavigation();
  const onPress = () => nav.goBack();

  return (
    <Button hitSlop={8} onPress={onPress} left={'$4'} pos={'absolute'}>
      <AntDesignIcon name="arrowleft" size={24} />
    </Button>
  );
};

Header.Text = ({ children }: HeaderTextProps) => {
  return (
    <Text
      fontSize={18}
      textAlign="center"
      color={'$white1'}
      fontWeight={'bold'}>
      {children}
    </Text>
  );
};

Header.IconRight = ({ children }: HeaderIconRightProps) => {
  return (
    <Button pos={'absolute'} right={'$4'}>
      {children}
    </Button>
  );
};

export default Header;
