import { StyleSheet } from 'react-native';
import DeviceInfo from '@core/deviceInfo';

export const styles = StyleSheet.create({
  safeArea: {
    paddingTop: DeviceInfo.getPlatform() === 'android' ? 25 : 0,
    flex: 1,
  },
});
