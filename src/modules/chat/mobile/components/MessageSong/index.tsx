import { XStack, Text, YStack, Image } from '@dls/components';
import {
  LockIcon,
  MusicalIcon,
} from '@modules/chat/mobile/components/MessageSong/styles';

function MessageSong() {
  return (
    <XStack
      w={'100%'}
      height={56}
      br={'$6'}
      bg={'$background'}
      ai={'center'}
      jc={'space-between'}
      px={'$3'}
      mt={'$6'}
      my={'$2'}
      py={'$2'}>
      <XStack>
        <XStack
          ai={'center'}
          jc={'center'}
          height={40}
          width={40}
          mr={'$2'}
          position="relative">
          <Image
            height={'100%'}
            width={'100%'}
            br={'$4'}
            blurRadius={4}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
            }
          />
          <LockIcon
            name="lock-closed"
            size={14}
            position="absolute"
            top={'50%'}
            left={'50%'}
            transform={[{ translateX: -7 }, { translateY: -7 }]}
            zIndex={1}
          />
        </XStack>

        <YStack>
          <Text color={'$white1'} fontSize={'$4'} fontWeight={'bold'}>
            Audacity (feat. Headie One)
          </Text>
          <Text color={'#bbb'} fow={'$1'} fos={'$1'}>
            Stormzy
          </Text>
        </YStack>
      </XStack>

      <MusicalIcon name="musical-note" size={16} mr={'$2'} />
    </XStack>
  );
}

export default MessageSong;
