import { useState } from 'react';
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
  Tooltip,
  XStack,
} from '@dls/components';
import { SignBack, SignInput } from '@modules/account/mobile/components';
import { useForgetPasswordForm } from '@modules/account/business/forms';
import { SignInHeader } from '@modules/account/mobile/assets/images';
import { useKeyboard, useTranslation } from '@shared/hooks';
import {
  CheckIcon,
  InfoIcon,
} from '@modules/account/mobile/screens/SignUpWithEmail/styles';

function ForgetPassword() {
  const { isVisible } = useKeyboard();

  const { t } = useTranslation('forgetPassword');

  const { control, isLoading, onSubmit } = useForgetPasswordForm();

  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

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

          <YStack ai="center" gap="$2" py="$4">
            <LinearGradientText fos="$8" fow="bold">
              {t('title')}
            </LinearGradientText>

            <Text col="$text" fos="$5">
              {t('description')}
            </Text>
          </YStack>
        </YStack>

        <YStack f={1} w={'100%'} gap={'$4'} px={'$4'}>
          <SignInput
            control={control}
            name="username"
            placeholder={t('usernamePlaceholder')}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <SignInput
            control={control}
            name="newPassword"
            placeholder={t('newPassword')}
            isPassword
            rightComponent={
              <If condition={!isVisible}>
                <Tooltip
                  placement="top"
                  content={
                    <YStack py="$2" px="$2" gap="$2">
                      <Text col="$text" fow="bold" fos="$3">
                        {t('yourPasswordMustHave')}
                      </Text>

                      {t('passwordRules')
                        .split(', ')
                        .map((rule, index) => {
                          return (
                            <XStack key={index} gap="$2" ai="center">
                              <CheckIcon name="checkcircle" size={16} />

                              <Text col="$text" fos="$3">
                                {rule}
                              </Text>
                            </XStack>
                          );
                        })}
                    </YStack>
                  }>
                  <InfoIcon name="info" size={24} />
                </Tooltip>
              </If>
            }
          />

          <SignInput
            control={control}
            name="confirmNewPassword"
            placeholder={t('confirmPasswordPlaceholder')}
            isPassword
            shouldShowCheck
            setIsValidated={setIsValidatedPassword}
            isValidated={isValidatedPassword}
          />

          <Button
            w="60%"
            h="$4"
            mb="$4"
            mt="auto"
            als="center"
            disabled={isLoading}
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
                    {t('sendSecurityCode')}
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
  name: 'account/forgot-password',
  component: ForgetPassword,
};
