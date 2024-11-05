import { SectionList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, XStack, YStack } from '@dls/components';

import {
  MessageUser,
  MessageOther,
  MessageSong,
  MessagePhoto,
  MessageVideo,
} from '@modules/chat/mobile/components';
import type { MessageListProps } from '@modules/chat/mobile/components/MessageList/interfaces';

function MessageList({ sections }: MessageListProps) {
  const insets = useSafeAreaInsets();

  const renderMessage = (data: MessageModel): React.ReactNode => {
    switch (data.type) {
      case 'message':
        if (data.author === 'me') return <MessageUser />;
        return <MessageOther />;
      case 'song':
        return <MessageSong />;
      case 'image':
        return <MessagePhoto />;
      case 'video':
        return <MessageVideo />;
    }
  };

  return (
    <YStack w={'100%'} h={'100%'} backgroundColor={'$contrast'}>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text color={'#666666'} fos={'$5'} mb={'$1'} p={'$2'} als="center">
            {title}
          </Text>
        )}
        renderItem={({ item }) => (
          <XStack
            w={'100%'}
            px={16}
            jc={item.author === 'me' ? 'flex-end' : 'flex-start'}>
            {renderMessage(item)}
          </XStack>
        )}
        contentContainerStyle={{
          backgroundColor: '#454545',
          paddingBottom: 166 + insets.bottom,
        }}
      />
    </YStack>
  );
}

export default MessageList;
