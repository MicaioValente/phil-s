import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  header: {
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
});
