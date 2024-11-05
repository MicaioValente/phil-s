import React from 'react';
import { ScrollView, Text, XStack, YStack } from '@dls/components';
import { SignBack, SearchInput } from '@modules/profile/mobile/components';
import { useTranslation } from '@shared/hooks';

import { useSearchForm } from '@modules/profile/business/forms/useSearchFollowing';
import { useFollowingList } from '@modules/profile/business/useCases/useFollowingList';

const Following = () => {
  const { t } = useTranslation('profile');
  const { data: following } = useFollowingList();
  const { control, filteredFollowing } = useSearchForm(following || []);

  //TODO: remove latter
  const JerryId = 'b1b3f013-724e-46e2-92eb-4db9efb907b4';
  return (
    <YStack f={1} backgroundColor={'$background'} pt={'$it'}>
      <XStack w={'100%'} pos="relative" justifyContent="center" mb={'$6'}>
        <SignBack />
        <Text col={'$text'} fos={'$6'} fow={'bold'}>
          {t('following')}
        </Text>
      </XStack>
      <ScrollView fg={1} px={'$5'}>
        <XStack mb={'$5'} w={'$100%'}>
          <SearchInput name="search" placeholder="Search" control={control} />
        </XStack>
        <XStack mb={'$4'} w={'$100%'}>
          <Text col={'#666666'} fos={'$4'} tt={'uppercase'}>
            {`${t('all')} ${following?.quantity} ${t('following')}`}
          </Text>
        </XStack>
        {/* <FlashList
            data={filteredFollowing}
            renderItem={({ item }) => (
              <UserList
                user={item}
                //TODO: remove latter
                {...(item.id === JerryId
                  ? { buttonText: t('following'), buttonActive: true }
                  : { buttonText: t('follow') })}
              />
            )}
            ItemSeparatorComponent={() => <YStack h={'$1'} />}
            keyExtractor={item => item.id}
          /> */}
      </ScrollView>
    </YStack>
  );
};

export default Following;
