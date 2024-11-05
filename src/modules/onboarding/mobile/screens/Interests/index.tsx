import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  XStack,
  YStack,
  LinearGradient,
  Button,
  Text,
  If,
  Spinner,
} from '@dls/components';
import {
  HeaderInterests,
  SelectionCard,
} from '@modules/onboarding/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import type {
  RenderItemType,
  Item,
} from '@modules/onboarding/mobile/screens/FirstAccessInterests/interfaces';
import { LIST_INTERESTS } from '@modules/onboarding/mobile/screens/FirstAccessInterests/mocks';
import { Screen } from '@core/navigation/interfaces';
import { useInterests } from '@modules/onboarding/business/useCases';
import { useAuth } from '@modules/account/business/stores';

function Component() {
  const { t } = useTranslation('interestsOnboarding');
  const { isLoading, mutateAsync } = useInterests();
  const { user } = useAuth();
  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [activeExplorer, setActiveExplorer] = useState<boolean>(false);

  const toggleSelection = (item: Item) => {
    if (selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem.id !== item.id),
      );
    } else {
      setSelectedItems([...selectedItems, { id: item.id, title: item.title }]);
    }
  };

  useEffect(() => {
    const interests = user.interests ?? [];
    const selectedInterests = LIST_INTERESTS.filter(item =>
      interests.includes(item.id),
    );
    setSelectedItems(selectedInterests);
  }, []);

  const handleSaveInterests = async () => {
    const response = await mutateAsync({
      interests: selectedItems.map(item => item.id),
    });

    navigation.reset('tabRoot');
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
    setActiveExplorer(false);

    if (selectedItems.length >= 4) {
      setActiveExplorer(true);
    }
  }, [selectedItems]);

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
          <YStack w="100%" jc={'center'} my="$4" pb="$ib">
            <Button
              h="$3.5"
              w="60%"
              als={'center'}
              disabled={!activeExplorer}
              onPress={handleSaveInterests}>
              <If
                condition={activeExplorer}
                elseRender={
                  <XStack
                    w="100%"
                    h="100%"
                    jc="center"
                    ai="center"
                    br="$4"
                    backgroundColor={'#1e1e1e'}>
                    <Text col={'#8e8e8e'} fos={17} fow={'bold'}>
                      {t('exploreNow')}
                    </Text>
                  </XStack>
                }>
                <LinearGradient
                  colors={['$secondary', '$primary']}
                  w="100%"
                  h="100%"
                  jc="center"
                  ai="center"
                  br="$4"
                  start={[0, 1]}
                  end={[0, 0]}>
                  <If
                    condition={isLoading}
                    elseRender={
                      <Text col={'$text'} fos={17} fow={'bold'}>
                        {t('exploreNow')}
                      </Text>
                    }>
                    <Spinner size="small" color="$text" />
                  </If>
                </LinearGradient>
              </If>
            </Button>
          </YStack>
        }
      />
    </YStack>
  );
}

const InterestsDiscovery: Screen = {
  name: 'onboarding/interests',
  component: Component,
  isPrivate: true,
};

export default InterestsDiscovery;
