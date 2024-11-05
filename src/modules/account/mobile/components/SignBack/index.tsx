import { Button, YStack } from '@dls/components';
import { BackIcon } from '@modules/account/mobile/components/SignBack/styles';
import { useNavigation } from '@shared/hooks';

function SignBack() {
  const { goBack } = useNavigation();

  return (
    <YStack pos="absolute" t="$it" mt="$4" l="$4" zIndex={999}>
      <Button hitSlop={8} onPress={goBack}>
        <BackIcon name="arrowleft" size={24} />
      </Button>
    </YStack>
  );
}

export default SignBack;
