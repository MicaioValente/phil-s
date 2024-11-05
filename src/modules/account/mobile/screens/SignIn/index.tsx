import { useState } from 'react';
import Container from './components/Container';
import Styles from './styles';
import { Platform, TouchableOpacity, View } from 'react-native';
import HeaderSignIn from '../../components/HeaderSignIn';
import { useNavigation, useTranslation } from '@shared/hooks';
import { Switch, Text } from 'tamagui';
import { SignInput } from '../../components';
import { useSignInForm } from '@modules/account/business/forms';
import { AppleIcon, GoogleIcon } from '../Sign/styles';
import DeviceInfo from '@core/deviceInfo';
import { useSignInWithSocial } from '@modules/account/business/useCases';
import { Button, If, LinearGradient, YStack } from '@dls/components';
import { SignInWithSocialParams } from '@modules/account/business/useCases/useSignInWithSocial/interfaces';

const imgHeader = require('../../assets/images/SignInHeader.png');

function SignIn() {
  const { t } = useTranslation('signin');
  const [remember, setRemember] = useState(true);
  const { control, isLoading, onSubmit } = useSignInForm();
  const signInWithSocial = useSignInWithSocial();
  const nav = useNavigation();
  const redirectSignUp = () => nav.navigate('account/sign');

  function navigateToForgetPassword() {
    nav.navigate('account/forgot-password');
  }

  function loginSocial(params: SignInWithSocialParams) {
    signInWithSocial.mutate(params);
  }

  return (
    <Container enabledScroll={true}>
      <HeaderSignIn
        title={t('title')}
        subTitle={t('subTitle')}
        imgBackground={imgHeader}
      />
      <Container
        enabledScroll={false}
        style={{ paddingTop: 20, height: 'auto', paddingHorizontal: 20 }}>
        <YStack mb="$3">
          <SignInput
            control={control}
            name="username"
            placeholder={t('usernamePlaceholder')}
          />
        </YStack>

        <SignInput
          control={control}
          name="password"
          placeholder={t('passwordPlaceholder')}
          isPassword
        />

        <View
          style={[
            Styles.row,
            { paddingHorizontal: 14, marginBottom: 35, marginTop: 25 },
          ]}>
          <View style={[Styles.row, { width: 'auto' }]}>
            <Switch
              size="$2"
              checked={remember}
              onCheckedChange={(value: boolean) => setRemember(value)}
              style={{
                backgroundColor: remember ? '#30d158' : '#454545',
                borderWidth: 0,
                padding: 1.8,
              }}>
              <Switch.Thumb animation="bouncy" backgroundColor={'white'} />
            </Switch>
            <Text style={Styles.textActionsAfterInputs}>
              {t('persistDataInInputs')}
            </Text>
          </View>
          <TouchableOpacity onPress={navigateToForgetPassword}>
            <Text style={Styles.textActionsAfterInputs}>
              {t('forgetPassword')}
            </Text>
          </TouchableOpacity>
        </View>

        <Container
          enabledScroll={false}
          style={{ width: '100%', height: 'auto' }}>
          <YStack alignSelf="center" w="$18">
            <Button
              w="100%"
              h="$3.5"
              onPress={onSubmit}
              disabled={signInWithSocial.isLoading || isLoading}>
              <LinearGradient
                colors={['$secondary', '$primary']}
                w="100%"
                h="100%"
                jc="center"
                ai="center"
                br="$4"
                start={[0, 1]}
                end={[0, 0]}>
                <Text col={'$text'} fos={'$6'} fow={'bold'}>
                  {t('btnSignIn')}
                </Text>
              </LinearGradient>
            </Button>
          </YStack>

          <View
            style={{
              ...Styles.row,
              paddingHorizontal: 26,
              marginVertical: 24,
            }}>
            <View style={Styles.line} />
            <Text style={{ color: 'white', paddingHorizontal: 15 }}>
              {t('or')}
            </Text>
            <View style={Styles.line} />
          </View>

          <Button
            fd="row"
            bg="$white7"
            h="$3.5"
            ai="center"
            jc="center"
            br="$3"
            mb="$2"
            w="$18"
            alignSelf="center"
            onPress={() => loginSocial({ provider: 'Google' })}
            disabled={signInWithSocial.isLoading || isLoading}>
            <GoogleIcon
              name="google"
              size={24}
              style={{ position: 'absolute', left: 10 }}
            />

            <Text fos="$5" fow="bold">
              {t('btnSignInGoogle')}
            </Text>
          </Button>

          <If condition={DeviceInfo.isIOS}>
            <Button
              onPress={() => loginSocial({ provider: 'Apple' })}
              fd="row"
              bg="$white7"
              h="$3.5"
              ai="center"
              jc="center"
              br="$3"
              w="$18"
              alignSelf="center"
              mb={Platform.OS == 'ios' ? '$8' : '$3.5'}
              disabled={signInWithSocial.isLoading || isLoading}>
              <AppleIcon
                name="apple1"
                size={24}
                style={{ position: 'absolute', left: 10 }}
              />
              <Text fos="$5" fow="bold">
                {t('btnSignInApple')}
              </Text>
            </Button>
          </If>

          <View style={[Styles.row, { justifyContent: 'center' }]}>
            <Text style={{ color: 'white' }}>{t('notRegistered')}</Text>
            <TouchableOpacity
              onPress={redirectSignUp}
              disabled={signInWithSocial.isLoading || isLoading}>
              <Text
                style={[
                  Styles.textActionsAfterInputs,
                  {
                    color: '#e43606',
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                  },
                ]}>
                {t('btnSignUp')}
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </Container>
    </Container>
  );
}

export default {
  name: 'account/sign-in',
  component: SignIn,
};
