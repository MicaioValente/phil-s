import { BlurView } from 'expo-blur';
import { Animated } from 'react-native';
import { styled } from 'tamagui';

export const Content = styled(Animated.View, {});

export const BackgroundBlur = styled(BlurView, {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-end',
});
