import { Text, XStack, YStack } from '@dls/components';
import {
  Actions,
  Header,
  ProfileLinks,
  ProfileMenu,
  ProfileStats,
  VerifiedProfile,
} from '@modules/profile/mobile/components';
import { useNavigation } from '@shared/hooks';
import { showBottomSheet } from '@dls/components/BottomSheet/methods';
import { useAuth } from '@modules/account/business/stores';
import { useGetUser } from '@modules/profile/business/useCases';

function Profile() {

  const { user } = useAuth();
  const { data } = useGetUser();

  const navigation = useNavigation();

  function onGoBack() {
    navigation.goBack()
   }

  const onGoToEditProfile = () => {
    navigation.navigate('profile/edit');
  };

  function openSelect() {
    showBottomSheet({
      isBlur: true,
      component: <ProfileMenu />,
    });
  }

  return (
    <YStack fullscreen bg={'$background'}>
      <Header>
        <Header.Wallpaper url={user.wallpaperUrl} isProtectedImage={true} />
        <Header.Top>
          <Header.IconBack onPress={onGoBack} />
          <Header.IconGrid onPress={() => {}} />
        </Header.Top>

        <Header.Bottom>
          <Header.IconMenu onPress={openSelect} />
        </Header.Bottom>

        <Header.Container>
          <Header.Avatar url={user.avatarUrl} isProtectedImage={true} />
        </Header.Container>
      </Header>

      <XStack jc={'center'} ai={'center'} mb={5} mt={'$10'} px={30}>
        <Text
          numberOfLines={2}
          col={'$white1'}
          fos={20}
          fow={'bold'}
          textAlign="center">
          {user?.firstName} {user?.lastName}
        </Text>

        <VerifiedProfile isVerified={true} isVisibleIconCheck={true} />
      </XStack>

      <YStack px={30} mb={5}>
        <Text numberOfLines={3} col={'$white1'} fos={'$2'} textAlign="center">
          {user?.biography}
        </Text>
      </YStack>

      <XStack gap={'$2'} ai={'center'} jc={'center'} px={30}>
        <ProfileLinks links={(user?.links as string[]) ?? []} />
      </XStack>

      <ProfileStats {...{ data }} />

      <Actions>
        <Actions.SmallLeftButton type="qr-code" />
        <Actions.SmallRightButton type="eye" />
        <Actions.MediumLeftButton type="edit" onPress={onGoToEditProfile} />
        <Actions.MediumRightButton type="share" />
      </Actions>
    </YStack>
  );
}

export default Profile;
