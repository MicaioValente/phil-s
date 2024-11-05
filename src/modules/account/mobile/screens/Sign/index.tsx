import DeviceInfo from '@core/deviceInfo';
import Linking from '@core/linking';
import {
  Button,
  If,
  Image,
  LinearGradientText,
  ScrollView,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import type { TextProps } from '@dls/components/Text/interfaces';
import { useSignInWithSocial } from '@modules/account/business/useCases';
import { SignHeader } from '@modules/account/mobile/assets/images';
import {
  AppleIcon,
  EmailIcon,
  GoogleIcon,
  PhoneIcon,
} from '@modules/account/mobile/screens/Sign/styles';
import { useNavigation, useTranslation } from '@shared/hooks';

function Sign() {
  const navigation = useNavigation();

  const signInWithSocial = useSignInWithSocial();

  const { t } = useTranslation('sign');

  function signUpWithGoogle() {
    signInWithSocial.mutate({ provider: 'Google' });
  }

  function signUpWithApple() {
    signInWithSocial.mutate({ provider: 'Apple' });
  }

  function navigateToSignUpWithEmail() {
    navigation.navigate('account/sign-up-with-email');
  }

  function navigateToSignUpWithPhone() {
    navigation.navigate('account/sign-up-with-phone');
  }

  function Bold({ children }: TextProps) {
    function navigateToTerms() {
      Linking.openUrl('https://philcoin.io/privacy');
    }

    return (
      <Button hitSlop={8} onPress={navigateToTerms}>
        <Text col="$primary" fow="bold">
          {children}
        </Text>
      </Button>
    );
  }

  function Underlined({ children }: TextProps) {
    function navigateToSignIn() {
      navigation.navigate('account/sign-in');
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
    <ScrollView
      bg="$background"
      contentContainerStyle={{ fg: 1, gap: '$5', pb: '$ib' }}>
      <YStack bg="$contrast" bblr="$10" bbrr="$10">
        <Image
          source={SignHeader}
          aspectRatio={1.1}
          h="auto"
          w="100%"
          bblr="$10"
          bbrr="$10"
        />

        <YStack ai="center" gap="$2" py="$4">
          <LinearGradientText fos="$8" fow="bold">
            {t('title')}
          </LinearGradientText>

          <Text col="$text" fos="$5">
            {t('description')}
          </Text>
        </YStack>
      </YStack>

      <YStack f={1} gap={'$3'} px={'$6'}>
        <Button
          fd="row"
          bg="$white7"
          h="$5"
          ai="center"
          jc="center"
          br="$4"
          onPress={signUpWithGoogle}>
          <GoogleIcon name="google" size={24} />

          <Text fos="$5" fow="bold" color={"$black1"}>
            {t('signUpWithGoogle')}
          </Text>
        </Button>

        <If condition={DeviceInfo.isIOS}>
          <Button
            fd="row"
            bg="$white7"
            h="$5"
            ai="center"
            jc="center"
            br="$4"
            onPress={signUpWithApple}>
            <AppleIcon name="apple1" size={24} />

            <Text fos="$5" fow="bold" col={"$black1"}>
              {t('signUpWithApple')}
            </Text>
          </Button>
        </If>

        <Button
          fd="row"
          bg="$white7"
          h="$5"
          ai="center"
          jc="center"
          br="$4"
          onPress={navigateToSignUpWithEmail}>
          <EmailIcon name="email" size={24} />

          <Text fos="$5" fow="bold" col={"$black1"}>
            {t('signUpWithEmail')}
          </Text>
        </Button>

        <Button
          fd="row"
          bg="$white7"
          h="$5"
          ai="center"
          jc="center"
          br="$4"
          onPress={navigateToSignUpWithPhone}>
          <PhoneIcon name="phone-iphone" size={24} />

          <Text fos="$5" fow="bold" col={"$black1"}>
            {t('signUpWithPhone')}
          </Text>
        </Button>
      </YStack>

      <YStack ai="center" gap="$4" w="60%" als="center" mb="$4">
        <YStack>
          <Text col="$text" fos="$4">
            {t('bySigningUp')}
          </Text>

          <XStack gap="$1.5">
            <Bold>{t('termsOfUse')}</Bold>

            <Text col="$text" fos="$4" ta="center">
              {t('and')}
            </Text>

            <Bold>{t('privacyPolicy')}</Bold>
          </XStack>
        </YStack>

        <XStack gap="$1.5">
          <Text col="$text" fos="$4">
            {t('alreadyHaveAnAccount')}
          </Text>

          <Underlined>{t('signIn')}</Underlined>
        </XStack>
      </YStack>
    </ScrollView>
  );
}

export default {
  name: 'account/sign',
  component: Sign,
};
