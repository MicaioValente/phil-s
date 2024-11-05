import { XStack, Text, YStack } from '@dls/components';
import { Avatar } from 'tamagui';

function MessageOther() {
  return (
    <XStack maxWidth={'96%'} alignSelf="flex-start" my={'$2'}>
      <Avatar circular size={'$3'} marginRight={'$1'}>
        <Avatar.Image
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm6vLGqsEljppEWAfVdtUInEG96a5IgnoVQ&s'
          }
        />
      </Avatar>
      <YStack br={'$4'} jc={'center'} ai={'center'} gap={'$1'} ml={-2}>
        <XStack
          backgroundColor={'$white1'}
          br="$12"
          jc="center"
          px={'$5'}
          py={'$2'}
          alignSelf="flex-start"
          ml={'$1.5'}
          ai="center">
          <Text col="$black1" fos="$4" fontWeight="600" maxWidth={'95%'}>
            Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem
            Mensagem Mensagem
          </Text>
        </XStack>
        <Text color={'#bbb'} fow={'$1'} fos={'$1'} alignSelf="flex-start">
          12:00
        </Text>
      </YStack>
    </XStack>
  );
}

export default MessageOther;
