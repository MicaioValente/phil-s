import {
  XStack,
  Text,
  LinearGradient,
  YStack,
} from '@dls/components';

function MessageUser() {
  return (
    <XStack maxWidth={'96%'} alignSelf="flex-end" my={'$2'}>
      <YStack br={'$4'} jc={'center'} ai={'center'} gap={'$1'}>
        <LinearGradient
          colors={['$secondary', '$primary']}
          br="$12"
          jc="center"
          px={'$5'}
          py={'$2'}
          ai="center"
          start={[0, 1]}
          end={[0, 0]}>
          <Text col="$text" fos="$4" fontWeight="600">
            Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem
            Mensagem Mensagem
          </Text>
        </LinearGradient>
        <Text color={'#bbb'} fow={'$1'} fos={'$1'} alignSelf="flex-end">
          12:00
        </Text>
      </YStack>
    </XStack>
  );
}

export default MessageUser;
