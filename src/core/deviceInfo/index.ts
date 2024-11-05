import { Platform } from 'react-native';
import RNDeviceInfo from 'react-native-device-info';

import type { DeviceInfoApi } from '@core/deviceInfo/interfaces';

const isAndroid = Platform.OS === 'android',
  isIOS = Platform.OS === 'ios';

function getBuildNumber() {
  return RNDeviceInfo.getBuildNumber();
}

function getVersion() {
  return RNDeviceInfo.getVersion();
}

function getPlatform() {
  return Platform.OS as OS;
}

function getSystemVersion() {
  return RNDeviceInfo.getSystemVersion();
}

function getPackageName() {
  return RNDeviceInfo.getBundleId();
}

const DeviceInfo: DeviceInfoApi = {
  isAndroid,
  isIOS,
  getBuildNumber,
  getVersion,
  getPlatform,
  getSystemVersion,
  getPackageName,
};

export default DeviceInfo;
