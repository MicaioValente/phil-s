import { Text, Image, YStack } from '@dls/components';
import { useTranslation } from '@shared/hooks';

function ChatEmpty() {
  const { t } = useTranslation('inbox');

  return (
    <YStack ai={'center'} jc={'center'} mt={'$10'}>
      <Image
        source={require('@modules/chat/mobile/assets/images/chat-empty.png')}
      />

      <Text color={'#FFF'} fow={'bold'} fos={'$8'} mt={'$6'}>
        {t('chatEmptyTitle')}
      </Text>
      <Text color={'#bbb'} fow={'$1'} mt={'$2'}>
        {t('chatEmptySubtitle')}
      </Text>
    </YStack>
  );
}

export default ChatEmpty;
