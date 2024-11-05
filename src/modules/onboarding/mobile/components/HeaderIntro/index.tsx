import React from 'react';
import { BackHandler, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Button, Text, XStack } from '@dls/components';
import { useInterests } from '@modules/onboarding/business/stores';
import { useTranslation, useNavigation } from '@shared/hooks';

const HeaderIntro = () => {
  const { t } = useTranslation('intro');
  const { interests } = useInterests();
  const navigation = useNavigation();

  const handleBack = () => {
    BackHandler.exitApp();
  };

  const handleSkip = () => {
    if (interests.length) {
      navigation.navigate('account/sign');
    } else {
      navigation.navigate('onboarding/first-access-interests');
    }
  };

  return (
    <XStack
      w="100%"
      jc="space-between"
      t={'$ib'}
      pos="absolute"
      px={24}
      mt={(StatusBar.currentHeight ?? 0) + 24}>
      <Button onPress={handleBack}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </Button>

      <Button onPress={handleSkip}>
        <Text col={'$text'} fos={'$6'}>
          {t('btnSkip')}
        </Text>
      </Button>
    </XStack>
  );
};

export default HeaderIntro;
