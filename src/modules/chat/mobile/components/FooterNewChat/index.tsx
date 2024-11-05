import { XStack, Button, Text, LinearGradient } from '@dls/components';
import { useTranslation } from '@shared/hooks';

import type { FooterNewChatProps } from '@modules/chat/mobile/components/FooterNewChat/interfaces';

function FooterNewChat({ type }: FooterNewChatProps) {
  const { t } = useTranslation('newChat');

  if (type === 'phillap') {
    return (
      <XStack height={1} w={'100%'} backgroundColor={'#666666'} my={'$2'} />
    );
  }

  return (
    <XStack
      height={68}
      w={'100%'}
      backgroundColor={'$background'}
      ai={'center'}
      jc={'center'}
      mt={'auto'}>
      <Button
        onPress={() => {}}
        opacity={0.1}
        w={177}
        h={34}
        br={4}
        jc={'center'}
        ai={'center'}>
        <LinearGradient
          colors={['$secondary', '$primary']}
          w="100%"
          h="100%"
          br="$2"
          jc="center"
          ai="center"
          start={[0, 1]}
          end={[0, 0]}>
          <Text col="$text" fos="$5" fow="bold">
            {t('next')}
          </Text>
        </LinearGradient>
      </Button>
    </XStack>
  );
}

export default FooterNewChat;
