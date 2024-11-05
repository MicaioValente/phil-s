import Linking from '@core/linking';
import { Button, LinearGradient, Text, XStack, YStack } from '@dls/components';
import type { TextProps } from '@dls/components/Text/interfaces';
import { showToast } from '@dls/stores';
import { CheckIcon } from '@modules/account/mobile/assets/images';
import { SignClose } from '@modules/account/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';

function ConfirmSignUpEmail() {
  const navigation = useNavigation();

  const { t } = useTranslation('confirmSignUpEmail');

  async function openMyMailClient() {
    const canOpen = await Linking.openMail();

    if (!canOpen)
      showToast({
        title: t('emailTitleCannotBeOpened'),
        message: t('emailMessageCannotBeOpened'),
      });
  }

  function navigateToSignIn() {
    navigation.replace('account/sign-in');
  }

  function Underlined({ children }: TextProps) {
    function navigateToSignIn() {
      navigation.replace('account/sign-in');
    }

    return (
      <Button hitSlop={8} onPress={navigateToSignIn}>
        <Text col="$primary" fos="$4" fow="bold" textDecorationLine="underline">
          {children}
        </Text>
      </Button>
    );
  }

  return (
    <YStack fullscreen bg="$background" ai="center" jc="center">
      <SignClose onPress={navigateToSignIn} />

      <YStack ai="center" gap="$4">
        <CheckIcon />

        <Text col="$text" fow="bold" fos="$8">
          {t('checkYourEmail')}
        </Text>

        <YStack ai="center">
          <Text col="$text">{t('accountCreatedSuccessfully')}</Text>

          <Text col="$text">{t('weHaveSentYou')}</Text>

          <Text col="$primary">{t('alsoCheckTheSpamFolder')}</Text>
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
        <Button w="80%" h={'$4'} onPress={openMyMailClient}>
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
              {t('openMyMailClient')}
            </Text>
          </LinearGradient>
        </Button>

        <XStack gap="$1" ai="center" jc="center">
          <Text col="$text" fos="$4">
            {t('alreadyActivateYourAccount')}
          </Text>

          <Underlined>{t('logIn')}</Underlined>
        </XStack>
      </YStack>
    </YStack>
  );
}

export default {
  name: 'account/confirm-sign-up-email',
  component: ConfirmSignUpEmail,
};
