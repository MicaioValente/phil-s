import { useTranslation } from '@shared/hooks';

import { Button, If, LinearGradient, Text, YStack } from '@dls/components';
import { hideBottomSheet } from '@dls/components/BottomSheet/methods';
import { ProfileContactMethodsProps } from './interfaces';
import { stylesText } from '@modules/profile/mobile/components/ProfileContactMethods/styles';

function ProfileContactMethods({ data }: ProfileContactMethodsProps) {
  const { t } = useTranslation('profile');

  const renderBox = (children: React.ReactNode, callback?: () => void) => {
    return (
      <Button
        onPress={callback}
        fd={'row'}
        w={288}
        h={42}
        ai={'center'}
        px={'$6'}
        gap={'$2'}
        br={12}
        backgroundColor={'$contrast'}>
        {children}
      </Button>
    );
  };

  return (
    <YStack w={'100%'} minHeight={200} jc={'center'} ai={'center'} px={'$6'} gap={'$4'}>
      <If condition={!!data.phoneNumber}>
        {renderBox(
          <Text {...stylesText}>
            {t('call')}: {data.phoneNumber}
          </Text>,
          () => {},
        )}
      </If>

      <If condition={!!data.email}>
        {renderBox(
          <Text {...stylesText}>
            {t('email')}: {data.email}
          </Text>,
          () => {},
        )}
      </If>

      {renderBox(
        <Text {...stylesText}>
          {t('dm')}: @{data.firstName.toLowerCase()}
        </Text>,
        () => {},
      )}

      <Button
        onPress={hideBottomSheet}
        fd={'row'}
        w={288}
        h={42}
        ai={'center'}
        gap={'$2'}
        br={12}
        backgroundColor={'$contrast'}>
        <LinearGradient
          colors={['$secondary', '$primary']}
          w="100%"
          h="100%"
          br="$4"
          jc="center"
          ai="center"
          start={[0, 1]}
          end={[0, 0]}>
          <Text {...stylesText}>{t('done')}</Text>
        </LinearGradient>
      </Button>
    </YStack>
  );
}

export default ProfileContactMethods;
