import { Button, YStack } from '@dls/components';
import type { SignCloseProps } from '@modules/account/mobile/components/SignClose/interfaces';
import { CloseIcon } from '@modules/account/mobile/components/SignClose/styles';

function SignClose({ onPress }: SignCloseProps) {
  return (
    <YStack pos="absolute" t="$it" mt="$4" l="$4" zi={999}>
      <Button hitSlop={8} {...{ onPress }}>
        <CloseIcon name="close" size={24} />
      </Button>
    </YStack>
  );
}

export default SignClose;
