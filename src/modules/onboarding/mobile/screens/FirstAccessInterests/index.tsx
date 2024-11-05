import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  XStack,
  YStack,
  LinearGradient,
  Button,
  Text,
  ScrollView,
} from '@dls/components';
import {
  HeaderInterests,
  SelectionCard,
  SwitchInterests,
} from '@modules/onboarding/mobile/components';
import { useTranslation, useNavigation } from '@shared/hooks';
import { updateInterests } from '@modules/onboarding/business/stores';

import type {
  RenderItemType,
  Item,
} from '@modules/onboarding/mobile/screens/FirstAccessInterests/interfaces';

import { LIST_INTERESTS } from '@modules/onboarding/mobile/screens/FirstAccessInterests/mocks';
import { Screen } from '@core/navigation/interfaces';

function Component() {
  const { t } = useTranslation('interestsOnboarding');

  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [checkedYear, setCheckedYear] = useState<boolean>(false);
  const [activeSignUp, setActiveSignUp] = useState<boolean>(false);

  const toggleSelection = (item: Item) => {
    if (selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem.id !== item.id),
      );
    } else {
      setSelectedItems([...selectedItems, { id: item.id, title: item.title }]);
    }
  };

  const handleSignUp = () => {
    updateInterests(selectedItems);
    navigation.navigate('account/sign');
  };

  const handleSignIn = () => {
    navigation.navigate('account/sign-in');
  };

  const handleCoppa = () => {
    console.log('handleCoppa');
  };

  const renderItem: RenderItemType = ({ item }) => (
    <SelectionCard
      title={t(`listInterest.${item.title}.title`, {
        defaultValue: item.title,
      })}
      onPress={() => toggleSelection(item)}
      selected={selectedItems.some(selectedItem => selectedItem.id === item.id)}
    />
  );

  useEffect(() => {
    setActiveSignUp(false);

    if (selectedItems.length >= 4 && checkedYear) {
      setActiveSignUp(true);
    }
  }, [checkedYear, selectedItems]);

  return (
    <YStack f={1} bg="$background">
      <FlatList
        data={LIST_INTERESTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          flexGrow: 1,
          gap: 12,
          paddingHorizontal: 16,
        }}
        columnWrapperStyle={{
          gap: 12,
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={
          <YStack mx="$2">
            <HeaderInterests />

            <XStack my="$3">
              <Text col={'$text'} fos={12} fow={'medium'}>
                {t('description')}
              </Text>
            </XStack>
          </YStack>
        }
        ListFooterComponent={
          <YStack pb="$ib" gap="$4" my="$4">
            <XStack w="100%" jc="center" ai={'center'}>
              <SwitchInterests
                text={t('textSwitch')}
                check={checkedYear}
                checkedChange={setCheckedYear}
              />

              <Text col={'$text'} fos={14} fow={400} ml="$2" mr="$1.5">
                {t('textSwitch')}
              </Text>

              <Button onPress={handleCoppa}>
                <Text col={'$primary'} fos={14} textDecorationLine="underline">
                  COPPA
                </Text>
              </Button>
            </XStack>

            <Button
              h={'$3.5'}
              w="60%"
              als={'center'}
              disabled={!activeSignUp}
              onPress={handleSignUp}>
              {activeSignUp ? (
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
                    {t('btnSignUp')}
                  </Text>
                </LinearGradient>
              ) : (
                <XStack
                  w="100%"
                  h="100%"
                  jc="center"
                  ai="center"
                  br="$4"
                  backgroundColor={'#1e1e1e'}>
                  <Text col={'#8e8e8e'} fos={17} fow={'bold'}>
                    {t('btnSignUp')}
                  </Text>
                </XStack>
              )}
            </Button>

            <XStack w="100%" jc={'center'} gap="$1.5">
              <Text col={'$text'} fos={'$4'}>
                {t('textHaveAccount')}
              </Text>

              <Button onPress={handleSignIn}>
                <Text
                  col={'$primary'}
                  fos={'$4'}
                  fow={'bold'}
                  textDecorationLine="underline">
                  {t('btnSignIn')}
                </Text>
              </Button>
            </XStack>
          </YStack>
        }
      />
    </YStack>
  );
}

const InterestsOnboarding: Screen = {
  name: 'onboarding/first-access-interests',
  component: Component,
  isPrivate: false,
};

export default InterestsOnboarding;
