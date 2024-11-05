import { styled } from 'tamagui';
import { Fontisto } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

export const PlayIcon = styled(Fontisto, {
  color: '$white1',
});

export const BlurPlay = styled(BlurView, {
  width: '100%',
  height: '100%',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  overflow: 'hidden',
})

export const BlurContainer = styled(BlurView, {
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 4,
  zIndex: 2,
  position: 'absolute',
  top: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  right: 8,
})

