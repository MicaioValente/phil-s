import { useState } from 'react';

import {
  Button,
  If,
  Text,
  Spinner,
  YStack,
  LinearGradient,
  Tooltip,
  XStack,
  LinearGradientText,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from '@dls/components';
import { SignBack, SignInput } from '@modules/account/mobile/components';
import { useSignUpWithEmailForm } from '@modules/account/business/forms';
import { SignHeader } from '@modules/account/mobile/assets/images';
import {
  CheckIcon,
  InfoIcon,
} from '@modules/account/mobile/screens/SignUpWithEmail/styles';
import { useKeyboard, useTranslation } from '@shared/hooks';

function SignUpWithEmail() {
  const { isVisible } = useKeyboard();

  const { t } = useTranslation('signUpWithEmail');

  const { control, isLoading, onSubmit } = useSignUpWithEmailForm();

  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);

  return (
    <KeyboardAvoidingView bg="$background">
      <ScrollView contentContainerStyle={{ fg: 1, gap: '$5', pb: '$ib' }}>
        <YStack bg="$contrast" bblr="$10" bbrr="$10">
          <SignBack />

          <If
            condition={isVisible}
            elseRender={
              <Image
                source={SignHeader}
                aspectRatio={1.1}
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
            name="email"
            placeholder={t('placeholderEmail')}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <SignInput
            control={control}
            name="confirmEmail"
            placeholder={t('placeholderConfirmEmail')}
            keyboardType="email-address"
            autoCapitalize="none"
            shouldShowCheck
            setIsValidated={setIsValidatedEmail}
            isValidated={isValidatedEmail}
          />

          <SignInput
            control={control}
            name="password"
            placeholder={t('passwordPlaceholder')}
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
            name="confirmPassword"
            placeholder={t('confirmPasswordPlaceholder')}
            isPassword
            shouldShowCheck
            isValidated={isValidatedPassword}
            setIsValidated={setIsValidatedPassword}
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
  name: 'account/sign-up-with-email',
  component: SignUpWithEmail,
};
