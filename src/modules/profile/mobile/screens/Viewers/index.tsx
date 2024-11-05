import React from 'react';
import { ScrollView, Text, XStack, YStack } from '@dls/components';
import {
  SignBack,
  SearchInput,
  UserList,
} from '@modules/profile/mobile/components';
import { useTranslation } from '@shared/hooks';
import { SafeAreaView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSearchForm } from '@modules/profile/business/forms/useSearchViewers';
import { useViewersList } from '@modules/profile/business/useCases/useViewersList';
import DeviceInfo from '@core/deviceInfo';

const Viewers = () => {
  const { t } = useTranslation('profile');
  const { data: viewers } = useViewersList();
  const { control, filteredViewers } = useSearchForm(viewers || []);
  const platformPaddingTop = DeviceInfo.getPlatform() === 'android' ? 25 : 0;

  return (
    <YStack f={1} backgroundColor={'$background'}>
      <SafeAreaView style={{ paddingTop: platformPaddingTop }}>
        <XStack w={'100%'} pos="relative" justifyContent="center" mb={'$6'}>
          <SignBack />
          <Text col={'$text'} fos={'$6'} fow={'bold'}>
            {t('WhoViewMyProfile')}
          </Text>
        </XStack>
        <ScrollView fg={1} px={'$5'}>
          <XStack mb={'$5'} w={'$100%'}>
            <SearchInput name="search" placeholder="Search" control={control} />
          </XStack>
          <XStack mb={'$4'} w={'$100%'}>
            <Text col={'#666666'} fos={'$1'} tt={'uppercase'}>
              {`${viewers?.quantity} ${t(
                'UserLooksIntoYourProfileInTheLastMonth',
              )}`}
            </Text>
          </XStack>
          <FlashList
            data={filteredViewers}
            renderItem={({ item }) => (
              <UserList user={item} buttonText={t('remove')} />
            )}
            ItemSeparatorComponent={() => <YStack h={'$1'} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </YStack>
  );
};

export default Viewers;
