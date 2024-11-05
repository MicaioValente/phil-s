import Config from 'react-native-config';

import DeviceInfo from '@core/deviceInfo';
import type { EnvironmentApi } from '@core/environment/interfaces';

const environmentVariables: typeof Config = Config;

const isDevelopment = process.env.NODE_ENV === 'development';

const isProduction = process.env.NODE_ENV === 'production';

function getBaseUrl(): string {
  const localURL = DeviceInfo.isAndroid
    ? 'http://10.0.2.2:3000/'
    : 'http://localhost:3000/';

  return Config.BASE_URL ?? localURL;
}

function getByKey(key: keyof typeof Config): string {
  return environmentVariables[key];
}

const Environment: EnvironmentApi = {
  isDevelopment,
  isProduction,
  getBaseUrl,
  getByKey,
};

export default Environment;
