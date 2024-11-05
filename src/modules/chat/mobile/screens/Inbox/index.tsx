import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ChatEmpty,
  ChatList,
  SearchInput,
  ToggleSection,
} from '@modules/chat/mobile/components';
import { Button, Text, XStack, YStack } from '@dls/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';
import {
  ArrowLeft,
  MessageIcon,
  Plus,
} from '@modules/chat/mobile/screens/Inbox/styles';
import GroupIcon from '@modules/chat/mobile/assets/images/group.svg';
import { Screen } from '@core/navigation/interfaces';

const inboxUsers = [
  {
    name: 'Alice Johnson',
    message: 'Hey, are we still on for the meeting tomorrow?',
    date: '2024-08-29T14:32:00Z',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Bob Smith',
    message:
      'I sent you the updated report. Let me know if you have any questions.',
    date: '2024-08-28T09:15:00Z',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Charlie Davis',
    message: 'Can we reschedule our call? Something came up.',
    date: '2024-08-27T16:45:00Z',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Diana Evans',
    message: 'Looking forward to our meeting next week!',
    date: '2024-08-26T12:00:00Z',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Emily Martinez',
    message: 'Just a reminder about the project deadline tomorrow.',
    date: '2024-08-25T10:30:00Z',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Frank Wilson',
    message: 'Thanks for the update. I’ll review it and get back to you.',
    date: '2024-08-24T13:20:00Z',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Grace Lee',
    message: 'Do you have time to discuss the new project?',
    date: '2024-08-23T15:50:00Z',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Hannah Brown',
    message: 'I’m running late, will be there in 15 minutes.',
    date: '2024-08-22T08:40:00Z',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Ian Miller',
    message: 'Let’s catch up this weekend if you’re free.',
    date: '2024-08-21T11:05:00Z',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Julia Taylor',
    message: 'The documents you requested are now available.',
    date: '2024-08-20T17:25:00Z',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

function Component() {
  const { t } = useTranslation('inbox');

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [value, setValue] = useState<'Chats' | 'Calls'>('Chats');
  const [buttonWidth, setButtonWidth] = useState(0);

  const handleBack = () => {
    showToast({ message: 'Pressionou para voltar', title: 'Back' });
  };

  const pressGroup = () => {
    showToast({ message: 'Pressionou em grupo', title: 'Grupo' });
  };

  const pressPlus = () => {
    navigation.navigate('chat/newChat');
  };

  const handleButtonLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setButtonWidth(width);
  };

  const renderHeaderList = (
    <YStack ai={'flex-start'} mt={'$2'}>
      <ToggleSection {...{ value, setValue }} />
      <SearchInput mt={'$3'} onSearch={() => {}} />
    </YStack>
  );

  const renderHeader = (
    <XStack
      w={'100%'}
      pt={'$it'}
      height={80}
      bg={'$background'}
      ai={'flex-end'}
      px={'$3'}
      pb={'$3'}>
      <XStack jc={'space-between'} f={1} ai={'center'}>
        <Button onPress={handleBack} onLayout={handleButtonLayout}>
          <ArrowLeft name="arrowleft" size={28} />
        </Button>
        <Text
          col={'$white1'}
          fos={'$6'}
          fow={'bold'}
          ml={buttonWidth * 1.5}
          ta="center">
          {t('chat')}
        </Text>

        <XStack ai={'center'} gap={'$4'}>
          <Button onPress={pressGroup}>
            <GroupIcon />
          </Button>
          <Button onPress={pressPlus}>
            <Plus name="pluscircleo" size={28} />
          </Button>
        </XStack>
      </XStack>
    </XStack>
  );

  return (
    <YStack fullscreen bg={'$contrast'}>
      {renderHeader}
      <YStack w={'100%'} h={'100%'} bg={'$contrast'}>
        <FlashList
          ListHeaderComponent={renderHeaderList}
          ListEmptyComponent={() => <ChatEmpty />}
          contentContainerStyle={{
            paddingHorizontal: 16,
            backgroundColor: '#454545',
            paddingBottom: insets.bottom + 16,
          }}
          data={inboxUsers}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ChatList data={item} />}
          estimatedItemSize={60}
        />
      </YStack>
    </YStack>
  );
}

const Inbox: Screen = {
  name: 'chat/inbox',
  component: Component,
  isPrivate: true,
  bottomBarOptions: {
    index: 4,
    label: 'Chat',
    icon: ({ color, size }) => (
      <MessageIcon name="message" {...{ color, size }} />
    ),
  },
};

export default Inbox;
