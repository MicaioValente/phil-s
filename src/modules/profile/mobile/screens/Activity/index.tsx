import React from 'react';
import { ScrollView, Text, YStack } from '@dls/components';
import { HeaderList, SettingButton } from '@modules/profile/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

const Activity = () => {
  const { t } = useTranslation('profile');
  const navigation = useNavigation();

  return (
    <YStack f={1} backgroundColor={'$background'} pt={'$it'}>
      <HeaderList onPressBack={navigation.goBack} title={t('your_activity')} />
      <ScrollView fg={1} p={'$3'} bg={'$contrast'}>
        <Text col={'$text'} ta={'center'} fos={'$2'} mb={'$3'}>
          {t('ReviewAndManageYourPhotos')}
        </Text>
        <SettingButton title={t('TimeSpent')} onPress={() => {}} />
        <SettingButton
          title={t('PhotosVideosMusicAndCauses')}
          onPress={() => {}}
        />
        <SettingButton title={t('Interactions')} onPress={() => {}} />
        <SettingButton title={t('AccountHistory')} onPress={() => {}} />
        <SettingButton title={t('RecentSearches')} onPress={() => {}} />
        <SettingButton title={t('LinksYouveVisited')} onPress={() => {}} />
        <SettingButton title={t('Archived')} onPress={() => {}} />
        <SettingButton title={t('Downloads')} onPress={() => {}} />
        <SettingButton title={t('DeletedPosts')} onPress={() => {}} />
        <SettingButton
          title={t('DownloadYourInformation')}
          onPress={() => {}}
        />
        <YStack h={'$5'} />
      </ScrollView>
    </YStack>
  );
};

export default Activity;
