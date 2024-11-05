import { Avatar } from 'tamagui';

import { XStack, Button, Text, YStack } from '@dls/components';

import type { ChatListProps } from '@modules/chat/mobile/components/ChatList/interfaces';
import i18n from '@core/translation';
import { formatMessageDate } from '@modules/chat/business/helpers';
import { useNavigation } from '@shared/hooks';

function ChatList({ data }: ChatListProps) {
  const currentLanguage = i18n.language;
  const navigation = useNavigation();

  return (
    <Button
      w={'100%'}
      height={44}
      my={'$2.5'}
      onPress={() => navigation.navigate('chat/chat')}>
      <XStack w={'100%'} height={44} ai={'center'}>
        <Avatar circular>
          <Avatar.Image src={data.image} />
        </Avatar>

        <YStack ml={'$2'}>
          <Text color={'$white1'} fow={'bold'} fos={'$5'}>
            {data.name}
          </Text>
          <Text color={'#666666'} fow={'$1'} maxWidth={'80%'} numberOfLines={1}>
            {data.message}
          </Text>
        </YStack>

        <Text color={'#666666'} fow={'$1'} position="absolute" right="$1">
          {formatMessageDate(data.date, currentLanguage)}
        </Text>
      </XStack>
    </Button>
  );
}

export default ChatList;
