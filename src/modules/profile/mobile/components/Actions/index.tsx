import type {
  ActionsComponent,
  ActionsType,
} from '@modules/profile/mobile/components/Actions/interfaces';

import {
  Button,
  If,
  LinearGradient,
  Spinner,
  Text,
  XStack,
  YStack,
} from '@dls/components';

import { useTranslation } from '@shared/hooks';
import { EyeIcon, QrCodeICon } from '@modules/profile/mobile/assets';
import React from 'react';
import {
  IoniconsWhite,
  MaterialCommunityIconsWhite,
} from '@modules/profile/mobile/components/Actions/styles';

const Actions: ActionsComponent = props => {
  const { children, ...rest } = props;

  return (
    <XStack {...rest} w={'100%'} px={20} borderColor={'$white1'} jc={'center'}>
      {children}
    </XStack>
  );
};

const SmallLeftButton: React.FC<ActionsType> = ({
  type,
  isLinearGradientEnable = false,
  ...rest
}) => {
  const bw = isLinearGradientEnable ? '$0' : '$0.75';

  if (type == 'qr-code') {
    return (
      <Button w="$4" h={'$4'} mr={'$2'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bw={'$0.75'}
          bc={'$contrast'}>
          <QrCodeICon name="Safety" size={20} color={'white'} />
        </YStack>
      </Button>
    );
  } else if (type == 'add') {
    return (
      <Button w="$4" h={'$4'} mr={'$2'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bw={bw}
          bc={'$contrast'}>
          <If
            condition={isLinearGradientEnable}
            elseRender={
              <IoniconsWhite
                name="person-add-outline"
                size={20}
                color={'white'}
              />
            }>
            <LinearGradient
              colors={['$secondary', '$primary']}
              w="100%"
              h="100%"
              br="$4"
              jc="center"
              ai="center"
              start={[0, 1]}
              end={[0, 0]}>
              <IoniconsWhite
                name="person-add-outline"
                size={20}
                color={'white'}
              />
            </LinearGradient>
          </If>
        </YStack>
      </Button>
    );
  }
};

const SmallRightButton: React.FC<ActionsType> = ({ type, ...rest }) => {
  if (type == 'eye') {
    return (
      <Button w="$4" h={'$4'} mr={'$2'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bw={'$0.75'}
          bc={'$contrast'}>
          <Button>
            <EyeIcon name="Safety" size={20} color={'white'} />
          </Button>
        </YStack>
      </Button>
    );
  } else if (type == 'email') {
    return (
      <Button w="$4" h={'$4'} mr={'$2'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bw={'$0.75'}
          bc={'$contrast'}>
          <Button>
            <MaterialCommunityIconsWhite name="email-outline" size={20} />
          </Button>
        </YStack>
      </Button>
    );
  }
};

const MediumLeftButton: React.FC<ActionsType> = ({ 
  type,
  isLinearGradientEnable = false, 
  loading = false,
  ...rest }) => {
  const { t } = useTranslation('profile');
  if (type == 'edit') {
    return (
      <Button w="35%" h={'$4'} mr={'$2'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bw={'$0.75'}
          bc={'$contrast'}>
          <Text col={'$text'} fos={'$4'} fow={'bold'}>
            {t('edit_profile')}
          </Text>
        </YStack>
      </Button>
    );
  } else if (type == 'subscribe') {
    return (
      <Button w="35%" h={'$4'} mr={'$2'} {...rest}>
        <LinearGradient
            colors={isLinearGradientEnable ? ['$secondary', '$primary']: ['$contrast', '$contrast']}
            w="100%"
            h="100%"
            jc="center"
            ai="center"
            br="$4"
            bw={'$0.75'}
            bc={'$contrast'}>
               <If
                  condition={!loading}
                  elseRender={<Spinner  size='small'/>}
                >
                  <Text col={'$text'} fos={'$4'} fow={'bold'}>
                    {t('subscribe')}
                  </Text>
                </If>            
          </LinearGradient>        
      </Button>
    );
  }
};

const MediumRightButton: React.FC<ActionsType> = ({ 
  type, 
  isLinearGradientEnable = false,
  loading = false,
  ...rest }) => {
  const { t } = useTranslation('profile');

  if (type == 'share') {
    return (
      <Button w="35%" h={'$4'} {...rest}>
        <YStack
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4"
          bg={'$darkBackground'}>
          <Button>
            <Text col={'$text'} fos={'$4'} fow={'bold'}>
              {t('share_profile')}
            </Text>
          </Button>
        </YStack>
      </Button>
    );
  } else if (type == 'following') {
    return (
      <Button w="35%" h={'$4'} {...rest}>
        <LinearGradient
          colors={isLinearGradientEnable ? ['$secondary', '$primary']: ['$contrast', '$contrast']}
          w="100%"
          h="100%"
          br="$4"
          jc="center"
          ai="center"
          start={[0, 1]}
          end={[0, 0]}>
            <If
              condition={!loading}
              elseRender={<Spinner  size='small'/>}
            >
              <Text col={'$text'} fos={'$4'} fow={'bold'}>
                {t(isLinearGradientEnable ? 'following' : 'follow')}
              </Text>
            </If>           
        </LinearGradient>
      </Button>
    );
  }
};

Actions.SmallLeftButton = SmallLeftButton;
Actions.SmallRightButton = SmallRightButton;
Actions.MediumLeftButton = MediumLeftButton;
Actions.MediumRightButton = MediumRightButton;

export default Actions;
