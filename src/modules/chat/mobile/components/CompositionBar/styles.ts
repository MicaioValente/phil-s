import { styled } from 'tamagui';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

export const Container = styled(Animated.View, {});

export const CameraIcon = styled(Ionicons, {
  color: '#fff',
});

export const MicrophoneIcon = styled(FontAwesome, {
  color: '#fff',
});

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#242424',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    zIndex: 3,
  },
});
