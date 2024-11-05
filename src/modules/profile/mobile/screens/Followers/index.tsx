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
import { useSearchForm } from '@modules/profile/business/forms/useSearchFollowers';
import { useFollowersList } from '@modules/profile/business/useCases/useFollowersList';
import DeviceInfo from '@core/deviceInfo';

const Followers = () => {
  const { t } = useTranslation('profile');
  const { data: followers } = useFollowersList();
  const { control, filteredFollowers } = useSearchForm(followers || []);
  const platformPaddingTop = DeviceInfo.getPlatform() === 'android' ? 25 : 0;

  return (
    <YStack f={1} backgroundColor={'$background'} pt={'$it'}>
      <XStack w={'100%'} pos="relative" justifyContent="center" mb={'$6'}>
        <SignBack />
        <Text col={'$text'} fos={'$6'} fow={'bold'}>
          {t('followers')}
        </Text>
      </XStack>

      <ScrollView fg={1} px={'$5'}>
        <XStack mb={'$5'} w={'$100%'}>
          <SearchInput name="search" placeholder="Search" control={control} />
        </XStack>
        <XStack mb={'$4'} w={'$100%'}>
          <Text col={'#666666'} fos={'$4'} tt={'uppercase'}>
            {`${t('all')} ${followers?.quantity} ${t('followers')}`}
          </Text>
        </XStack>
        {/* <FlashList
            data={filteredFollowers}
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

export default Followers;
