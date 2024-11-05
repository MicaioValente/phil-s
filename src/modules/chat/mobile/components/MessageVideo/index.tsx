import { XStack, Button, LinearGradient, Image } from '@dls/components';
import { PlayIcon } from '@modules/chat/mobile/components/MessageVideo/styles';

function MessageVideo() {
  return (
    <XStack
      width={140}
      height={140}
      borderRadius={'$4'}
      alignSelf="flex-start"
      my={'$2'}>
      <Image
        width={'100%'}
        height={'100%'}
        borderRadius={'$4'}
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
        }
      />
      <Button
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent="center"
        alignItems="center">
        <LinearGradient
          colors={['$secondary', '$primary']}
          borderRadius="$12"
          justifyContent="center"
          padding={'$2'}
          alignItems="center"
          start={[0, 1]}
          end={[0, 0]}
          width={48}
          height={48}>
          <PlayIcon name="play" size={14} />
        </LinearGradient>
      </Button>
    </XStack>
  );
}

export default MessageVideo;
