import { styled } from 'tamagui';
import { BlurView } from 'expo-blur';
import { Entypo } from '@expo/vector-icons';

export const DotsThreeIcon = styled(Entypo, {
  position: 'absolute',
  right: 0,
  bottom: 0,
});

export const Blur = styled(BlurView, {
  borderRadius: 4,
  paddingHorizontal: 8,
  paddingVertical: 2,
  zIndex: 999,
  position: 'absolute',
  top: 8,
  right: 8,
  overflow: 'hidden',
})

