import { Button, LinearGradient, Text, YStack } from '@dls/components';

import { CheckIcon } from '@modules/account/mobile/assets/images';
import { SignClose } from '@modules/account/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';

function PasswordResetSuccessfully() {
  const navigation = useNavigation();

  const { t } = useTranslation('passwordResetSuccessfully');

  function navigateToSignIn() {
    navigation.replace('account/sign-in');
  }

  return (
    <YStack fullscreen bg="$background" ai="center" jc="center">
      <SignClose onPress={navigateToSignIn} />

      <YStack ai="center" gap="$4">
        <CheckIcon />

        <Text col="$text" fow="bold" fos="$8">
          {t('title')}
        </Text>

        <YStack ai="center">
          <Text col="$text" textAlign="center">
            {t('subTitle')}
          </Text>
        </YStack>
      </YStack>

      <YStack
        px={'$4'}
        w="100%"
        gap="$4"
        pos="absolute"
        b="$ib"
        pb="$4"
        ai="center">
        <Button w="80%" h={'$4'} onPress={navigateToSignIn}>
          <LinearGradient
            colors={['$secondary', '$primary']}
            start={[0, 1]}
            end={[0, 0]}
            w="100%"
            h="100%"
            jc="center"
            ai="center"
            br="$4">
            <Text col={'$text'} fos={'$5'} fow={'bold'}>
              {t('signIn')}
            </Text>
          </LinearGradient>
        </Button>
      </YStack>
    </YStack>
  );
}

export default {
  name: 'account/password-reset-successfully',
  component: PasswordResetSuccessfully,
};
