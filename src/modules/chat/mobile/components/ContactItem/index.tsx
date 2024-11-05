import { Avatar } from 'tamagui';

import { XStack, Button, Text, LinearGradient, If } from '@dls/components';
import { useTranslation } from '@shared/hooks';

import type { ContactItemProps } from '@modules/chat/mobile/components/ContactItem/interfaces';

function ContactItem({ data, ...props }: ContactItemProps) {
  const { t } = useTranslation('newChat');

  const textInvited = data.invited ? t('invited') : t('invite');
  const textButton = data.type === 'Phillap' ? t('chat') : textInvited;

  return (
    <Button w={'100%'} height={44} my={'$1.5'} {...props}>
      <XStack w={'100%'} height={44} ai={'center'}>
        <Avatar circular size={'$3'}>
          <Avatar.Image src={data.image} />
        </Avatar>

        <Text color={'$white1'} fow={'bold'} fos={'$5'} ml={'$2'}>
          {data.name}
        </Text>

        <If
          condition={data.invited || data.type === 'Phillap'}
          elseRender={
            <Button
              onPress={() => {}}
              opacity={0.1}
              width={91}
              height={32}
              position="absolute"
              br="$2"
              jc="center"
              ai="center"
              backgroundColor={'#666666'}
              right="$1">
              <Text col="$black1" fos="$5" fow="bold">
                {textButton}
              </Text>
            </Button>
          }>
          <Button
            onPress={() => {}}
            opacity={0.1}
            width={91}
            height={32}
            position="absolute"
            right="$1">
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
                {textButton}
              </Text>
            </LinearGradient>
          </Button>
        </If>
      </XStack>
    </Button>
  );
}

export default ContactItem;
