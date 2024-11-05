import { useTranslation } from '@shared/hooks';

import {
  Button,
  If,
  LinearGradient,
  ProtectedImage,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import { hideBottomSheet } from '@dls/components/BottomSheet/methods';
import { LockIcon } from '@modules/profile/mobile/assets';
import { useAuth } from '@modules/account/business/stores';
import type { SubscribeAlertProps } from '@modules/profile/mobile/components/SubscribeAlert/interfaces';

function SubscribeAlert({ data }: SubscribeAlertProps) {
  const { t } = useTranslation('profile');

  const { user } = useAuth();

  return (
    <YStack
      w={'100%'}
      minHeight={200}
      jc={'center'}
      ai={'center'}
      px={'$6'}
      mt={'$2'}>
      <YStack
        w={120}
        h={120}
        br={60}
        bg={'$contrast'}
        jc={'center'}
        ai={'center'}
        pt={15}>
        <LockIcon />

        <If condition={!!user.avatarUrl}>
          <XStack
            w={40}
            h={40}
            bg={'$contrast'}
            jc={'center'}
            ai="center"
            br={20}
            pos={'absolute'}
            right={2}
            bottom={-6}>
            <ProtectedImage uri={user.avatarUrl} w={30} h={30} br={15} />
          </XStack>
        </If>
      </YStack>

      <Text
        col={'$text'}
        fow={'bold'}
        fos={'$6'}
        textAlign="center"
        mt={'$4'}
        mb={'$2'}>
        {t('subscribeAlertTitle')}
      </Text>

      <Text col={'#666666'} fos={'$4'} textAlign="center" mb={'$2'}>
        <Text col={'$text'} fow={'bold'} fos={'$4'}>
          {t('25porcent')}{' '}
        </Text>
        {t('subscribeAlertSubtitle')}
      </Text>

      <Button
        onPress={hideBottomSheet}
        fd={'row'}
        w={288}
        h={42}
        ai={'center'}
        gap={'$2'}
        br={12}
        mb={'$4'}
        mt={'$4'}
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
          <Text col="$text" fow={'bold'} fos={'$4'}>
            {t('subscribeAlertTextButton')}
          </Text>
        </LinearGradient>
      </Button>
    </YStack>
  );
}

export default SubscribeAlert;
