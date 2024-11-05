import React from 'react';
import { View } from 'react-native';

import { YStack, XStack, Text, LinearGradient, Button } from '@dls/components';
import { HeaderFindFriendsPermission } from '@modules/onboarding/mobile/components';
import FindFriendsHeaderBackground from '@modules/onboarding/mobile/assets/images/findFriendsHeaderBackground.jpeg';
import { useTranslation, useNavigation } from '@shared/hooks';

import { styles } from '@modules/onboarding/mobile/screens/FindFriends/styles';
import { useAuth } from '@modules/account/business/stores';
import Contact from '@core/contact';
import { showToast } from '@dls/stores';
import { Screen } from '@core/navigation/interfaces';

function Component() {
  const { t } = useTranslation('findFriendsPermission');
  const { user } = useAuth();

  const navigation = useNavigation();

  const handleFindFriends = async () => {
    const status = await Contact.getStatus();
    if (status === 'granted') {
      navigation.navigate('onboarding/friends-list');
    } else {
      const isGrantedPermission = await Contact.requestPermission();

      if (isGrantedPermission) {
        navigation.navigate('onboarding/friends-list');
      } else {
        showToast({
          message: t('needAuthorizationContacts'),
          title: t('oops'),
        });
      }
    }
  };

  const onNavigateToNextScreen = () => {
    navigation.navigate('onboarding/interests');
  };

  return (
    <YStack fullscreen backgroundColor="$color">
      <HeaderFindFriendsPermission
        imgBackground={FindFriendsHeaderBackground}
        onClose={onNavigateToNextScreen}
      />
      <YStack ai="center" mt={40} mb={40}>
        <XStack>
          <Text col={'#fff'} fos={32} fow={'bold'}>
            {t('title')}
          </Text>
        </XStack>
        <XStack mt={10} marginHorizontal={50}>
          <Text col="$text" fos={16} lineHeight={24} textAlign="center">
            {t('description')}
          </Text>
        </XStack>
      </YStack>

      <YStack ai="center" padding={10} marginTop={10}>
        <YStack w="100%" jc="flex-end" mb="$3" pl="$11" pr="$11">
          <Button h={41} onPress={handleFindFriends}>
            <LinearGradient
              colors={['$secondary', '$primary']}
              w="100%"
              h="100%"
              jc="center"
              ai="center"
              br="$4"
              start={[0, 1]}
              end={[0, 0]}>
              <Text col={'$text'} fos={17} fow={'bold'}>
                {t('btnFindFriends')}
              </Text>
            </LinearGradient>
          </Button>
        </YStack>

        <YStack w="100%" jc="flex-end" mb="$6" pl="$11" pr="$11">
          <Button h={41} onPress={onNavigateToNextScreen}>
            <View style={styles.buttonSkip}>
              <Text col={'$text'} fos={17} fow={'bold'}>
                {t('btnSkip')}
              </Text>
            </View>
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}

const FindFriends: Screen = {
  name: 'onboarding/find-friends',
  component: Component,
  isPrivate: true,
};

export default FindFriends;
