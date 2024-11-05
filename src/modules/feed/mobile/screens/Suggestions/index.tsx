import React from 'react';
import { FlatList } from 'react-native';

import { If, Spinner, YStack } from '@dls/components';
import { useSuggestionsList } from '@modules/feed/business/useCases';
import {
  CardSuggestionsFollowing,
  Header,
} from '@modules/feed/mobile/components';
import { useTranslation } from '@shared/hooks';
import { Screen } from '@core/navigation/interfaces';

function Component() {
  const {
    data: { items },
    fetchNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useSuggestionsList();
  const { t } = useTranslation('feedSuggestions');

  return (
    <YStack f={1} bg={'$background'} >
        <Header>
          <Header.IconBack />
          <Header.Text>{t('title')}</Header.Text>
        </Header>

        <YStack
          pt={18}
          px={16}
          pb={'$ib'}
          backgroundColor={'#181818'}
          fd={'column'}
          width={'100%'}
          f={1}>
          <FlatList
            style={{ flex: 1 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            refreshing={isRefetching}
            onRefresh={refetch}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.1}
            data={items}
            renderItem={({ item }) => <CardSuggestionsFollowing {...item} />}
            ListFooterComponent={
              <If condition={isLoading}>
                <YStack>
                  <Spinner color={'$secondary'} size="large" />
                </YStack>
              </If>
            }
          />
        </YStack>
    </YStack>
  );
}

const Suggestions: Screen = {
  component: Component,
  name: 'feed/suggestions',
  isPrivate: true,
};
export default Suggestions;
