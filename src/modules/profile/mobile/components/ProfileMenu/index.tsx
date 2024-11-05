import { useNavigation, useTranslation } from '@shared/hooks';

import {
  Button,
  If,
  LinearGradient,
  Spinner,
  Text,
  YStack,
} from '@dls/components';
import { hideBottomSheet } from '@dls/components/BottomSheet/methods';

import { ToggleTheme } from '@modules/profile/mobile/components';
import { useSignOut } from '@modules/account/business/useCases';
import { MenuListProps } from './interfaces';
import { ProfileScreensMapper } from '../../screens';

const menuList: MenuListProps[] = [
  { label: 'my_wallet', route: 'profile/settings' },
  { label: 'settings_privacy', route: 'profile/settings' },
  { label: 'your_activity', route: 'profile/activity' },
  { label: 'saved', route: 'profile/saved' },
  { label: 'Archive', route: 'profile/archive' },
  { label: 'close_friends', route: 'profile/settings' },
  { label: 'favorites', route: 'profile/settings' },
  { label: 'subscriptions', route: 'profile/settings' },
];

const ProfileMenu = () => {
  const { t } = useTranslation('profile');
  const navigation = useNavigation();

  const { mutate, isLoading: isLoadingSignOut } = useSignOut();

  function navigate(route: keyof ProfileScreensMapper) {
    navigation.navigate(route);
    hideBottomSheet();
  }

  function signOut() {
    mutate(undefined, {
      onSuccess: () => {
        hideBottomSheet();
      },
    });
  }

  return (
    <YStack
      w="100%"
      h="auto"
      py={'$4'}
      px={40}
      mb={'$ib'}
      jc="center"
      ai="center"
      gap={17}
      fs={0}>
      <ToggleTheme />
      {menuList.map((item, index) => (
        <Button
          key={index}
          bg="$contrast"
          w={288}
          h="$size.3.5"
          ai="center"
          br="$3"
          jc="center"
          onPress={() => navigate(item.route)}>
          <Text col={'$text'} fos={14} fow={'bold'}>
            {t(item.label)}
          </Text>
        </Button>
      ))}

      <Button
        w={288}
        h="$3"
        fd={'row'}
        ai={'center'}
        br={'$3'}
        jc={'center'}
        onPress={signOut}>
        <LinearGradient
          colors={['$secondary', '$primary']}
          w="100%"
          h="100%"
          br="$4"
          jc="center"
          ai="center"
          start={[0, 1]}
          end={[0, 0]}>
          <If
            condition={!isLoadingSignOut}
            elseRender={<Spinner color="$text" />}>
            <Text col="$text" fos={14} fow="bold">
              {t('log_out')}
            </Text>
          </If>
        </LinearGradient>
      </Button>
    </YStack>
  );
};

export default ProfileMenu;
