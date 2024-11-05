import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  If,
  LinearGradient,
  LinearGradientText,
  Spinner,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import {
  Header,
  ProfileDateInput,
  ProfileInput,
  VerifiedProfile,
} from '@modules/profile/mobile/components';
import { Select } from '@modules/profile/mobile/components';

import { useNavigation, useTranslation } from '@shared/hooks';
import { countries } from '@modules/profile/business/constants';
import { useEditProfileForm } from '@modules/profile/business/forms';
import { useAuth } from '@modules/account/business/stores';
import { useMediaOperations } from '@modules/profile/mobile/screens/EditProfile/hooks';
import { TrashIcon } from '@modules/profile/mobile/screens/EditProfile/styles';
import { showToast } from '@dls/stores';
import { Screen } from '@core/navigation/interfaces';

function Component(){

  const navigation = useNavigation()
  const {
    links,
    control,
    isProfileUpdateAllowed,
    isLoading,
    onSubmit,
    setIsProfileUpdateAllowed,
    setValue,
  } = useEditProfileForm();

  const {
    profilePicture,
    wallpaperPicture,
    isProtectedWallpaper,
    isProtectedAvatar,
    onChangePictures,
  } = useMediaOperations();

  const { t } = useTranslation('editProfile');

  const { user } = useAuth();

  const genders = [t('male'), t('female'), t('other')];

  async function handleSubmit() {
    if (profilePicture) {
      setValue('avatar.path', profilePicture.path);
      setValue('avatar.type', profilePicture.type);
    }
    if (wallpaperPicture) {
      setValue('wallpaper.path', wallpaperPicture.path);
      setValue('wallpaper.type', wallpaperPicture.type);
    }

    onSubmit();
  }

  function handleDeleteLink(index: number) {
    if (!links) return;

    const newLinks = [...links];
    newLinks.splice(index, 1);
    setValue('links', newLinks);
  }

  function handleAddLink() {
    const link = control._formValues.link;
    if (!link) {
      showToast({
        message: t('enterLink'),
        title: t('errorTitle'),
      });
      return;
    }
    const newLinks = [...(links ?? []), link];
    setValue('links', newLinks);
    setValue('link', '');
  }

  function onGoBack() {
   navigation.goBack()
  }

  useEffect(() => {
    if (profilePicture || wallpaperPicture) {
      setIsProfileUpdateAllowed(true);
    }
  }, [profilePicture, wallpaperPicture]);

  return (
    <YStack f={1} backgroundColor={'$background'}>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <Header>
          <Header.Wallpaper
            url={wallpaperPicture?.path ?? user.wallpaperUrl ?? ''}
            isProtectedImage={isProtectedWallpaper}>
            <Header.WallpaperEdit onChangePhoto={onChangePictures} />
          </Header.Wallpaper>

          <Header.Top>
            <Header.IconBack onPress={onGoBack} disabled={isLoading} />
            <Header.IconMenu onPress={() => {}} />
          </Header.Top>

          <Header.Container>
            <Header.Avatar
              url={profilePicture?.path ?? user.avatarUrl ?? ''}
              isProtectedImage={isProtectedAvatar}
            />
            <Header.AvatarEdit onChangePhoto={onChangePictures} />
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

          <VerifiedProfile isVerified={true} isVisibleIconCheck={false} />
        </XStack>

        <YStack f={1} px={'$4'} gap="$2" mt={'$1'}>
          <XStack f={1} gap="$4" justifyContent="space-between">
            <ProfileInput
              name="firstName"
              placeholder={t('firstName')}
              control={control}
            />
            <ProfileInput
              name="lastName"
              placeholder={t('lastName')}
              control={control}
            />
          </XStack>

          <ProfileInput
            name="fullName"
            placeholder={t('fullName')}
            control={control}
            editable={false}
          />

          <Select
            placeholder={t('gender')}
            control={control}
            name="gender"
            options={genders}
          />

          <Select
            placeholder={t('country')}
            control={control}
            name="country"
            options={countries}
          />

          <ProfileDateInput
            control={control}
            name="dateOfBirth"
            placeholder={t('dateOfBirth')}
          />

          <ProfileInput
            name="bio"
            placeholder={t('bio')}
            title={t('bio')}
            control={control}
            multiline
            maxLength={300}
            isVisibleCounter
          />

          <ProfileInput
            name="link"
            placeholder="www.philcoin.io"
            control={control}
            RightComponent={
              <Button als={'center'} onPress={handleAddLink}>
                <LinearGradientText numberOfLines={1}>
                  <Text fos={14} fow={'bold'} textDecorationLine="underline">
                    {t('addMoreLinks')}
                  </Text>
                </LinearGradientText>
              </Button>
            }
          />

          {links?.map((link, index) => (
            <XStack
              w={'100%'}
              height={40}
              bg={'$contrast'}
              br={'$4'}
              ai={'center'}
              key={index}
              px={'$4'}>
              <Button onPress={() => handleDeleteLink(index)}>
                <TrashIcon name="trash" size={18} />
              </Button>
              <Text col={'$text'} fos={'$4'} fow={'bold'} ml={'$2'}>
                {link}
              </Text>
            </XStack>
          ))}

          <YStack als={'flex-start'} gap="$2" mt="$1">
            <Button onPress={() => {}}>
              <LinearGradientText numberOfLines={1}>
                <Text fos={'$4'} fow={'bold'} textDecorationLine="underline">
                  {t('switchToCreatorAccount')}
                </Text>
              </LinearGradientText>
            </Button>
            <Button onPress={() => {}}>
              <LinearGradientText numberOfLines={1}>
                <Text fos={'$4'} fow={'bold'}>
                  {t('switchToBusinessAccount')}
                </Text>
              </LinearGradientText>
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
      <If condition={isProfileUpdateAllowed}>
        <Button
          w="60%"
          h="$4"
          mb="$4"
          mt="auto"
          als="center"
          onPress={handleSubmit}>
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
              condition={isLoading}
              elseRender={
                <Text col="$text" fos="$5" fow="bold">
                  {t('update')}
                </Text>
              }>
              <Spinner size="small" color="$text" />
            </If>
          </LinearGradient>
        </Button>
      </If>
    </YStack>
  );
};

const EditProfile: Screen = {
  component: Component,
  name: 'profile/edit',
  isPrivate: true,
}

export default EditProfile
