import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { paddingTop: Platform.OS === 'android' ? 25 : 0 },
});
