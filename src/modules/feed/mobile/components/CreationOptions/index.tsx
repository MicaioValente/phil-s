import React, { useCallback, useState } from 'react';

import { Button, LinearGradient, Text, YStack } from '@dls/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import { hideBottomSheet } from '@dls/components/BottomSheet/methods';

const CreationOptions = () => {
  const { t } = useTranslation('feedHome');
  const { navigate } = useNavigation();
  const [pressIn, setPressIn] = useState(-1);

  const options = [
    {
      text: t('creationOptions.post'),
      onPress: () => navigate('feed/create-post'),
    },
    {
      text: t('creationOptions.story'),
      onPress: () => {
        navigate('feed/createStory');

        hideBottomSheet();
      },
    },
    {
      text: t('creationOptions.live'),
      onPress: () => null,
    },
    {
      text: t('creationOptions.cause'),
      onPress: () => null,
    },
  ];

  const onPressIn = useCallback((index: number) => setPressIn(index), []);
  const onPressOut = useCallback(() => setPressIn(-1), []);

  return (
    <YStack p={'$4'} w={'100%'} height={120} mb="$ib">
      <YStack flex={1} flexWrap="wrap" flexDirection="row" jc={'space-between'}>
        {options.map(({ text, onPress }, index) => (
          <Button
            h={37}
            backgroundColor={'#454545'}
            w={'48%'}
            mb={'$2'}
            key={`creationOption${index}`}
            onPress={onPress}
            onPressIn={() => onPressIn(index)}
            onPressOut={onPressOut}
            borderRadius={8}>
            <LinearGradient
              ai={'center'}
              jc={'center'}
              f={1}
              w={'100%'}
              colors={
                pressIn === index
                  ? ['$primary', '$secondary']
                  : ['#454545', '#454545']
              }
              borderRadius={8}>
              <Text color={'$white1'} fontWeight={'bold'}>
                {text}
              </Text>
            </LinearGradient>
          </Button>
        ))}
      </YStack>
    </YStack>
  );
};

export default CreationOptions;
