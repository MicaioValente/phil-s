import { Avatar } from 'tamagui';
import { MessageList, CompositionBar } from '@modules/chat/mobile/components';
import { Button, Text, XStack, YStack } from '@dls/components';

import {
  ArrowLeft,
  CallIcon,
  VideoIcon,
} from '@modules/chat/mobile/screens/Chat/styles';
import type { SectionType } from '@modules/chat/mobile/screens/Chat/interfaces';
import { groupMessagesByDate } from '@modules/chat/business/helpers';
import i18n from '@core/translation';
import { useNavigation } from '@shared/hooks';
import { showToast } from '@dls/stores';
import { Screen } from '@core/navigation/interfaces';

const messages: MessageModel[] = [
  {
    author: 'me',
    message: 'Hi there, how are you?',
    date: '2024-08-28T09:15:00Z',
    image: '',
    data: [],
    type: 'message',
  },
  {
    author: 'other',
    message: 'Hello. I’m great. I will share some files with you a bit later',
    date: '2024-08-28T09:16:00Z',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    data: [],
    type: 'message',
  },
  {
    author: 'me',
    message: 'Check thus!! :)',
    date: '2024-08-28T09:15:00Z',
    image: '',
    data: [],
    type: 'message',
  },
  {
    author: 'me',
    message: 'Check thus!! :)',
    date: '2024-08-28T09:15:00Z',
    image: '',
    data: [
      'https://videocdn.cdnpk.net/videos/29f1c41f-0453-4bf6-a571-e299c533509f/horizontal/previews/clear/large.mp4?token=exp=1724948300~hmac=a4f7f38f624aa247222527fc3e787b5226683e7667102fab17164039c2686c25',
    ],
    type: 'video',
  },
  {
    author: 'me',
    message: '',
    image: '',
    date: '2024-08-28T09:15:00Z',
    data: [''],
    type: 'song',
  },
  {
    author: 'me',
    message: '',
    image: '',
    date: '2024-08-28T09:15:00Z',
    data: [
      'https://randomuser.me/api/portraits/women/6.jpg',
      'https://randomuser.me/api/portraits/women/6.jpg',
    ],
    type: 'image',
  },
];

function Component() {
  const navigation = useNavigation();

  const language = i18n.language;

  const sections: SectionType = groupMessagesByDate(messages, language);

  const handleBack = () => {
    navigation.goBack();
  };

  const pressPlus = () => {
    showToast({ message: 'Pressionou em plus', title: 'Plus' });
  };

  const renderHeader = (
    <XStack
      w={'100%'}
      pt={'$it'}
      height={80}
      bg={'$background'}
      jc={'space-between'}
      ai={'flex-end'}
      px={'$3'}
      pb={'$2'}>
      <XStack>
        <Button onPress={handleBack} als="center" mr={'$2'}>
          <ArrowLeft name="arrowleft" size={28} />
        </Button>
        <Avatar circular size={'$3'} mr={'$2'}>
          <Avatar.Image
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
            }
          />
        </Avatar>
        <YStack>
          <Text color={'$white1'} fos={'$4'} fow={'bold'}>
            Keneth Allen
          </Text>
          <Text color={'#666666'} fow={'$1'} fos={'$1'}>
            Wow, thats funny
          </Text>
        </YStack>
      </XStack>

      <XStack gap={'$2'}>
        <Button onPress={pressPlus} p={'$1.5'} bg={'#666666'} br={'$7'}>
          <VideoIcon name="videocam" size={22} />
        </Button>
        <Button onPress={pressPlus} p={'$1.5'} bg={'#666666'} br={'$7'}>
          <CallIcon name="call" size={22} />
        </Button>
      </XStack>
    </XStack>
  );

  return (
    <YStack fullscreen bg={'$contrast'}>
      {renderHeader}

      <CompositionBar />
      <MessageList {...{ sections }} />
    </YStack>
  );
}

const Chat: Screen = {
  name: 'chat/chat',
  component: Component,
  isPrivate: true,
};

export default Chat;
