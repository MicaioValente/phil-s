import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LayoutChangeEvent, SectionList } from 'react-native';

import {
  YStack,
  XStack,
  Text,
  Button,
  LinearGradientText,
  If,
  Spinner,
} from '@dls/components';
import {
  ContactItem,
  DividerContacts,
  SearchInput,
} from '@modules/onboarding/mobile/components';
import { useTranslation, useNavigation } from '@shared/hooks';

import { Screen } from '@core/navigation/interfaces';
import { ArrowLeft } from '@modules/onboarding/mobile/screens/FriendsList/styles';
import { useContactList } from '@modules/onboarding/business/useCases';

function Component() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { data, isLoading } = useContactList();
  const { t } = useTranslation('friendsListOnboarding');

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<
    {
      title: string;
      data: ContactItemModel[];
    }[]
  >([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsEndIndex, setItemsEndIndex] = useState(20);

  const [buttonWidth, setButtonWidth] = useState(0);

  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    if (data.items) {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;

      const itemsToDisplay = data.items.slice(0, endIndex);

      organizeData(itemsToDisplay);
    } else {
      organizeData([]);
    }
  }, [isLoading]);

  const organizeData = (data: ContactItemModel[], replace = false) => {
    const foundedItems = data.filter(item => item.isFound);
    const notFoundedItems = data.filter(item => !item.isFound);

    if (replace) {
      const newFilteredItems = [];
      if (foundedItems.length)
        newFilteredItems.push({ title: 'phillap', data: foundedItems });
      if (notFoundedItems.length)
        newFilteredItems.push({ title: 'phone', data: notFoundedItems });

      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(prevFilteredItems => {
        const phillapItems = [
          ...(prevFilteredItems.find(section => section.title === 'phillap')
            ?.data || []),
          ...foundedItems,
        ];
        const phoneItems = [
          ...(prevFilteredItems.find(section => section.title === 'phone')
            ?.data || []),
          ...notFoundedItems,
        ];

        return [
          { title: 'phillap', data: phillapItems },
          { title: 'phone', data: phoneItems },
        ];
      });
    }
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const loadMore = () => {
    if (loadingMore || !data || data.items.length === 0 || searchTerm) return;
    setLoadingMore(true);

    const newEndIndex = itemsEndIndex + ITEMS_PER_PAGE;

    const newItems = data.items.slice(itemsEndIndex, newEndIndex);

    organizeData(newItems);
    setItemsEndIndex(newEndIndex);
    setCurrentPage(prevPage => prevPage + 1);

    setLoadingMore(false);
  };

  const handleNext = () => {
    navigation.reset('tabRoot');
  };

  const handleButtonLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setButtonWidth(width);
  };

  const changeStatusInvite = (id: string) => {
    setFilteredItems(prevFilteredItems => {
      const newItems = prevFilteredItems.map(section => {
        const newItems = section.data.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isInvited: true,
            };
          }
          return item;
        });
        return { ...section, data: newItems };
      });
      return newItems;
    });
  };

  const changeStatusFollowing = (id: string, status: boolean) => {
    setFilteredItems(prevFilteredItems => {
      const newItems = prevFilteredItems.map(section => {
        const newItems = section.data.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isFollowing: status,
            };
          }
          return item;
        });
        return { ...section, data: newItems };
      });
      return newItems;
    });
  };

  const handleSearch = () => {
    if (searchTerm === '') {
      organizeData(data.items, true);
      return;
    }

    const results = data.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    organizeData(results, true);
  };

  const renderHeaderList = (
    <YStack ai={'center'} mt={'$2'} px={22}>
      <SearchInput
        mb={'$3'}
        onSearch={handleSearch}
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
      <If condition={isLoading}>
        <Spinner />
      </If>
    </YStack>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <If condition={!isLoading}>
      <If condition={title !== 'phillap'}>
        <XStack h={1} w={'100%'} my={'$2'} px={22}>
          <XStack h={1} w={'100%'} bg={'$contrast'} />
        </XStack>
      </If>
      <DividerContacts type={title as 'phillap' | 'phone'} my={'$3'} px={22} />
    </If>
  );

  const renderHeader = (
    <XStack
      w={'100%'}
      pt={'$it'}
      height={80}
      bg={'$background'}
      jc={'flex-end'}
      px={22}
      pb={'$1'}>
      <XStack jc={'space-between'} width={'100%'} ai={'center'}>
        <Button onPress={handleBack} onLayout={handleButtonLayout}>
          <ArrowLeft name="arrowleft" size={22} />
        </Button>
        <Text
          color={'$white1'}
          fontSize={'$6'}
          fontWeight={'bold'}
          ml={buttonWidth}
          textAlign="center">
          {t('findFriends')}
        </Text>

        <Button onPress={handleNext}>
          <LinearGradientText fos="$6" fow="bold">
            {t('next')}
          </LinearGradientText>
        </Button>
      </XStack>
    </XStack>
  );

  const renderFooter = (
    <If condition={loadingMore ?? isLoading}>
      <XStack h={80} jc={'center'}>
        <Spinner />
      </XStack>
    </If>
  );

  return (
    <YStack bg={'$background'} fullscreen>
      {renderHeader}

      <YStack w={'100%'} h={'100%'} bg={'$background'}>
        <SectionList
          sections={filteredItems ?? []}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={renderHeaderList}
          ListFooterComponent={renderFooter}
          renderSectionHeader={renderSectionHeader}
          renderItem={({ item }) => (
            <ContactItem
              {...{ item }}
              px={22}
              onInvite={(id: string) => changeStatusInvite(id)}
              onUpdateStatusFollowing={(id, status) =>
                changeStatusFollowing(id, status)
              }
            />
          )}
          contentContainerStyle={{
            paddingBottom: 80 + insets.bottom,
            paddingVertical: 22,
          }}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
      </YStack>
    </YStack>
  );
}

const FriendsList: Screen = {
  name: 'onboarding/friends-list',
  component: Component,
  isPrivate: true,
};

export default FriendsList;
