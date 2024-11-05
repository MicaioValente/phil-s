import React from 'react';
import { ScrollView, Text, XStack, YStack } from '@dls/components';
import { SignBack, SearchInput } from '@modules/profile/mobile/components';
import { useTranslation } from '@shared/hooks';
import { useSearchForm } from '@modules/profile/business/forms/useSearchSubscribers';
import { useSubscribersList } from '@modules/profile/business/useCases/useSubscribersList';

const Subscribers = () => {
  const { t } = useTranslation('profile');
  const { data: subscribers } = useSubscribersList();
  const { control, filteredSubscribers } = useSearchForm(subscribers || []);

  return (
    <YStack f={1} backgroundColor={'$background'} pt={'$it'}>
      <XStack w={'100%'} pos="relative" justifyContent="center" mb={'$6'}>
        <SignBack />
        <Text col={'$text'} fos={'$6'} fow={'bold'}>
          {t('Subscribers')}
        </Text>
      </XStack>
      <ScrollView fg={1} px={'$5'}>
        <XStack mb={'$5'} w={'$100%'}>
          <SearchInput name="search" placeholder="Search" control={control} />
        </XStack>
        <XStack mb={'$4'} w={'$100%'}>
          <Text col={'#666666'} fos={'$4'} tt={'uppercase'}>
            {`${t('all')} ${subscribers?.quantity} ${t('Subscribers')}`}
          </Text>
        </XStack>
        {/* <FlashList
            data={filteredSubscribers}
            renderItem={({ item }) => (
              <UserList user={item} buttonText={t('remove')} />
            )}
            ItemSeparatorComponent={() => <YStack h={'$1'} />}
            keyExtractor={item => item.id}
          /> */}
      </ScrollView>
    </YStack>
  );
};

export default Subscribers;
