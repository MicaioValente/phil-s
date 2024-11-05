import { useState } from 'react';

import {
  Button,
  If,
  Text,
  Spinner,
  YStack,
  LinearGradient,
  XStack,
  KeyboardAvoidingView,
} from '@dls/components';
import ScrollView from '@dls/components/ScrollView';
import {
  ProfileInput,
  ProfileDateInput,
  Header,
  Select,
} from '@modules/profile/mobile/components';
import { useCreateProfileForm } from '@modules/profile/business/forms';
import { useTranslation } from '@shared/hooks';

import type { ImageProps } from '@modules/profile/mobile/components/ProfileHeader/interfaces';
import { countries } from '@modules/profile/business/constants';
import { useSignOut } from '@modules/account/business/useCases';

function CreateProfile() {
  const { t } = useTranslation('createProfile');

  const { control, isLoading, onSubmit, setValue } = useCreateProfileForm();

  const [profilePicture, setProfilePicture] = useState<ImageProps | null>(null);
  const [wallpaperPicture, setWallpaperPicture] = useState<ImageProps | null>(
    null,
  );

  const genders = [t('male'), t('female'), t('other')];

  const signOut = useSignOut();

  function logout() {
    signOut.mutate();
  }

  async function onChangePictures(
    type: 'wallpaper' | 'avatar',
    image: ImageProps,
  ) {
    if (type === 'wallpaper') {
      setWallpaperPicture(image);
    } else {
      setProfilePicture(image);
    }
  }

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

  return (
    <KeyboardAvoidingView bg="$background">
      <ScrollView contentContainerStyle={{ fg: 1, pb: '$ib' }}>
        <Header>
          <Header.Wallpaper
            url={wallpaperPicture?.path ?? ''}
            isProtectedImage={false}>
            <Header.WallpaperEdit onChangePhoto={onChangePictures} />
          </Header.Wallpaper>

          <Header.Top>
            <If
              condition={signOut.isLoading}
              elseRender={<Header.IconBack onPress={logout} />}>
              <YStack mt="$2" left="$4" pos={'absolute'}>
                <Spinner color="$icon" />
              </YStack>
            </If>
          </Header.Top>

          <Header.Container>
            <Header.Avatar
              url={profilePicture?.path ?? ''}
              isProtectedImage={false}
            />
            <Header.AvatarEdit onChangePhoto={onChangePictures} />
          </Header.Container>
        </Header>

        <YStack px="$2" ai="center" gap="$2" mt="$10">
          <Text col="$text" fow="bold" fos="$7">
            {t('completeYourProfile')}
          </Text>

          <Text col="#666666" fos="$3">
            {t('enterYourDetails')}
          </Text>
        </YStack>

        <YStack w={'100%'} gap={'$4'} px={'$4'}>
          <XStack w={'100%'} gap={'$4'}>
            <YStack mt="$5" f={1} w={'100%'}>
              <ProfileInput
                control={control}
                name="firstName"
                placeholder={t('firstName')}
                keyboardType="default"
              />
            </YStack>

            <YStack mt="$5" f={1}>
              <ProfileInput
                control={control}
                name="lastName"
                placeholder={t('lastName')}
                keyboardType="default"
              />
            </YStack>
          </XStack>

          <Select
            control={control}
            name="gender"
            placeholder={t('gender')}
            options={genders}
          />

          <Select
            control={control}
            name="country"
            placeholder={t('country')}
            options={countries}
          />

          <ProfileDateInput
            control={control}
            name="dateOfBirth"
            placeholder={t('dateOfBirth')}
          />
        </YStack>

        <Button
          als="center"
          w="60%"
          h="$4"
          my="$5"
          disabled={isLoading}
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
                  {t('continue')}
                </Text>
              }>
              <Spinner size="small" color="$text" />
            </If>
          </LinearGradient>
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default {
  name: 'profile/create',
  component: CreateProfile,
  isPrivate: true,
};
