import { styled } from 'tamagui';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { colors } from '@dls/tokens/colors';

export const EmptyProfileIcon = styled(Feather, {
  color: '$contrast',
});

export const styles = StyleSheet.create({
  container: {},
  perfilImage: {
    width: '100%',
    height: '100%',
    borderColor: colors.icon,
    borderRadius: 40 / 2,
  },
});
