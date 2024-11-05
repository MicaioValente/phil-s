import { XStack, Button, Text, If, Image } from '@dls/components';

function MessagePhoto() {
  return (
    <XStack alignSelf="flex-start" width={180} height={140} my={'$2'}>
      <XStack width={140} height={140} borderRadius={'$4'} zIndex={2}>
        <Image
          width={'100%'}
          height={'100%'}
          borderRadius={'$4'}
          blurRadius={2}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
          }
        />
        <Button
          position="absolute"
          top={'50%'}
          left={'50%'}
          transform={[{ translateX: -19 }, { translateY: -19 }]}
          width={38}
          height={38}
          justifyContent="center"
          alignItems="center"
          backgroundColor={'$colorTransparent'}
          borderWidth={3}
          borderColor={'$white1'}
          borderRadius={'$12'}>
          <Text color={'$white1'} fontSize={'$8'} fontWeight={'bold'}>
            3
          </Text>
        </Button>
      </XStack>
      <If condition={true}>
        <XStack
          width={120}
          height={120}
          borderRadius={'$4'}
          position="absolute"
          alignSelf="center"
          right={10}
          zIndex={1}>
          <Image
            width={'100%'}
            height={'100%'}
            borderRadius={'$4'}
            blurRadius={2}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
            }
          />
        </XStack>
      </If>
    </XStack>
  );
}

export default MessagePhoto;
