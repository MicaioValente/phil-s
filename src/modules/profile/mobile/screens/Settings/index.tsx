import React from 'react';
import { useNavigation, useTranslation } from '@shared/hooks';
import {
  Button,
  If,
  LinearGradient,
  ScrollView,
  Spinner,
  Text,
  YStack,
} from '@dls/components';

import { HeaderList, SettingButton } from '@modules/profile/mobile/components';
import { useSignOut } from '@modules/account/business/useCases';
import { useDeleteAccount } from '@modules/account/business/useCases/useDeleteAccount';
import { Alert } from 'react-native';

const Settings = () => {
  const { t } = useTranslation('profile');
  const navigation = useNavigation();

  const { mutate: mutateSignOut, isLoading: isLoadingSignOut } = useSignOut();
  const { mutate: mutateDeleteAccount, isLoading: isLoadingDeleteAccount } =
    useDeleteAccount();

  function signOut() {
    mutateSignOut();
  }

  function deleteAccount() {
    Alert.alert(
      t('delete_my_account'),
      t('confirmeDeleteMyAccount'),
      [
        {
          text: t('confirm'),
          onPress: () => mutateDeleteAccount(),
        },
        {
          text: t('cancel'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <YStack f={1} bg={'$background'} pt={'$it'} pb={'$ib'}>
      <HeaderList
        onPressBack={navigation.goBack}
        title={t('settings_privacy')}
      />
      <ScrollView fg={1} p={'$5'} bg={'$contrast'}>
        <Text col={'$text'} fos={'$2'} fow={'bold'} mb={'$2'}>
          {t('account_settings')}
        </Text>
        <SettingButton title={t('edit_account')} onPress={() => {}} />
        <SettingButton title={t('Accessibility')} onPress={() => {}} />
        <SettingButton title={t('language')} onPress={() => {}} />
        <SettingButton title={t('permissions')} onPress={() => {}} />
        <SettingButton title={t('my_wallet')} onPress={() => {}} />
        <Text col={'$text'} fos={'$2'} fow={'bold'} mb={'$2'} mt={'$3'}>
          {t('who_can_see_your_content')}
        </Text>
        <SettingButton title={t('account_privacy')} onPress={() => {}} />
        <SettingButton title={t('tags_and_mentions')} onPress={() => {}} />
        <SettingButton title={t('comments')} onPress={() => {}} />
        <SettingButton title={t('blocked')} onPress={() => {}} />
        <SettingButton
          title={t('follow_and_invite_more_friends')}
          onPress={() => {}}
        />
        <SettingButton title={t('CloseFriends')} onPress={() => {}} />
        <Text col={'$text'} fos={'$2'} fow={'bold'} mb={'$2'} mt={'$3'}>
          {t('more_info_and_support')}
        </Text>
        <SettingButton title={t('help')} onPress={() => {}} />
        <SettingButton title={t('about')} onPress={() => {}} />
        <Text col={'$text'} fos={'$2'} fow={'bold'} mb={'$2'} mt={'$3'}>
          {t('account')}
        </Text>
        <SettingButton title={t('add_a_new_account')} onPress={() => {}} />
        <SettingButton title={t('delete_my_account')} onPress={() => {}} />

        <Button
          w="80%"
          h="$size.3.5"
          my="$3"
          fd={'row'}
          ai={'center'}
          br={'$3'}
          jc={'center'}
          als="center">
          <LinearGradient
            colors={['$secondary', '$primary']}
            w="100%"
            h="100%"
            br="$4"
            jc="center"
            ai="center"
            start={[0, 1]}
            end={[0, 0]}
            onPress={signOut}>
            <If
              condition={!isLoadingSignOut}
              elseRender={<Spinner color="$text" />}>
              <Text col="$text" fos={14} fow="bold">
                {t('log_out')}
              </Text>
            </If>
          </LinearGradient>
        </Button>
        <Button
          bg="$black1"
          w="80%"
          h="$size.3.5"
          fd={'row'}
          ai={'center'}
          br={'$3'}
          jc={'center'}
          als="center"
          onPress={deleteAccount}>
          <If
            condition={!isLoadingDeleteAccount}
            elseRender={<Spinner color="$text" />}>
            <Text col="$text" fos="$5" fow="bold">
              {t('delete_my_account')}
            </Text>
          </If>
        </Button>
        <YStack h={'$5'} />
      </ScrollView>
    </YStack>
  );
};

export default Settings;
