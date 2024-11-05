import React from 'react';

import { Button, If, Input, ProtectedImage, XStack, Image, YStack } from '@dls/components';

import { SendIcon } from '@modules/feed/mobile/assets/index';
import { useAuth } from '@modules/account/business/stores';
import { imageStyles } from '@modules/feed/mobile/components/SendInput/styles';
import type {
  SendInputComponent,
} from '@modules/feed/mobile/components/SendInput/interfaces';

const SendInput: SendInputComponent = ({ children }) => {
  return (
    <XStack
      width={'100%'}
      h={'100%'}
      ai="center"
      jc={'space-between'}
      px="$3"
      gap="$3">
      {children}
    </XStack>
  );
};

SendInput.Avatar = () => {
  const { user } = useAuth();
  return (
    <XStack w={'10%'}>
      <If
        condition={!!user?.avatarUrl}
        elseRender={
          <Image
            source={require('@modules/onboarding/mobile/assets/images/default.png')}
            {...imageStyles}
          />
        }>
        <ProtectedImage uri={user?.avatarUrl} {...imageStyles} />
      </If>
    </XStack>
  );
};

SendInput.ContainerInput = ({ children }) => {
  return (
    <XStack
      h={40}
      w={'80%'}
      backgroundColor={'#3E3E3E'}
      borderRadius={100}
      jc={'space-between'}
      ai={'center'}>
      {children}
    </XStack>
  );
};

SendInput.Input = ({ ...rest }) => {
  return <Input {...rest} px={10} h={40} />
};

SendInput.ContainerIcons = ({ children }) => {
  return (
    <YStack fd={'row'} position="absolute" right={22} alignItems="center">
      {children}
    </YStack>
  );
};

SendInput.SendButton = ({...rest}) => {
  return (
    <Button {...rest} w={'10%'}>
      <SendIcon width={25} height={25} />
    </Button>
  );
};

export default SendInput;
