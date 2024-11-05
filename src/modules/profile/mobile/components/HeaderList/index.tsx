import type { UserListProps } from '@modules/profile/mobile/components/HeaderList/interfaces';
import { Button, Text, XStack, YStack } from '@dls/components';
import { BackIcon } from '@modules/account/mobile/components/SignBack/styles';

function HeaderList({ onPressBack, title }: UserListProps) {
  return (
    <XStack w={'100%'} pos="relative" justifyContent="space-between" p={'$3'}>
      <YStack w={'$2'}>
        <Button hitSlop={8} onPress={onPressBack}>
          <BackIcon name="arrowleft" size={24} />
        </Button>
      </YStack>
      <Text col={'$text'} fos={'$5'} fow={'bold'} numberOfLines={1}>
        {title}
      </Text>
      <YStack w={'$2'} />
    </XStack>
  );
}

export default HeaderList;
