import { styled } from 'tamagui';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const CircleIcon = styled(Entypo, {
  color: '#FFF',
});

export const styles = StyleSheet.create({
  imageBackground: {
    width: 160,
    height: 160,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})