import {
  Button,
  If,
  Text,
  Spinner,
  YStack,
  LinearGradient,
  LinearGradientText,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  OTPInput,
} from '@dls/components';
import { SignBack } from '@modules/account/mobile/components';
import { useConfirmSignUpPhoneCodeForm } from '@modules/account/business/forms';
import { SignInHeader } from '@modules/account/mobile/assets/images';
import { useKeyboard, useTranslation } from '@shared/hooks';
import { Controller } from 'react-hook-form';

function ConfirmSignUpPhoneCode() {
  const { isVisible } = useKeyboard();

  const { t } = useTranslation('confirmSignUpPhoneCode');

  const { control, isLoading, onSubmit } = useConfirmSignUpPhoneCodeForm();

  return (
    <KeyboardAvoidingView bg="$background">
      <ScrollView contentContainerStyle={{ fg: 1, gap: '$5', pb: '$ib' }}>
        <YStack bg="$contrast" bblr="$10" bbrr="$10">
          <SignBack />

          <If
            condition={isVisible}
            elseRender={
              <Image
                source={SignInHeader}
                aspectRatio={1.4}
                h="auto"
                w="100%"
                bblr="$10"
                bbrr="$10"
              />
            }>
            <YStack h="$it" />
          </If>

          <YStack ai="center" gap="$2" py="$4" px="$4">
            <LinearGradientText fos="$8" fow="bold">
              {t('title')}
            </LinearGradientText>

            <Text col="$text" fos="$5" ta="center">
              {t('description')}
            </Text>
          </YStack>
        </YStack>

        <YStack f={1} w="100%" gap="$4" px="$4">
          <Controller
            control={control}
            name="confirmationCode"
            render={({ field: { value, onChange } }) => (
              <OTPInput length={6} {...{ value, onChange }} />
            )}
          />

          <Button
            w="60%"
            h="$4"
            mb="$4"
            mt="auto"
            als="center"
            onPress={onSubmit}>
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
        </YStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default {
  name: 'account/confirm-sign-up-phone-code',
  component: ConfirmSignUpPhoneCode,
};
