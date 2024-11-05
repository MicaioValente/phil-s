import { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import YStack from '@dls/components/YStack';
import { default as LogoLoading } from '@dls/components/LoadingFull/LogoLoading.svg';
import { useEventListener } from '@shared/hooks';

function LoadingFull() {
  const [visible, setVisible] = useState(false);
  const size = 159;
  const opacity = useSharedValue(0);

  function showLoadingFull() {
    setVisible(true);
  }

  function hideLoadingFull() {
    setVisible(false);
  }

  useEventListener('showLoadingFull', showLoadingFull);
  useEventListener('hideLoadingFull', hideLoadingFull);

  useEffect(() => {
    if (!visible) return cancelAnimation(opacity);

    opacity.value = 0;
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0, { duration: 1000 }),
      ),
      -1,
    );
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <YStack
        f={1}
        w={'100%'}
        height={'100%'}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        backgroundColor={'$background'}>
        <Animated.View style={[{ width: size, height: size }, animatedStyle]}>
          <LogoLoading width={size} height={size} />
        </Animated.View>
      </YStack>
    </Modal>
  );
}

export default LoadingFull;
