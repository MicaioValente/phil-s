import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    aspectRatio: 0.83,
  },
  description: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 29,
  },
});
