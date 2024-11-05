import { Linking as RNLinking } from 'react-native';
import {
  startActivityAsync,
  ActivityAction,
  IntentLauncherParams,
} from 'expo-intent-launcher';

import type { LinkingApi } from '@core/linking/interfaces';
import DeviceInfo from '@core/deviceInfo';

async function openUrl(url: string) {
  if (await RNLinking.canOpenURL(url)) {
    await RNLinking.openURL(url);

    return true;
  }

  return false;
}

async function openMail() {
  if (DeviceInfo.isAndroid) {
    const activityAction = 'android.intent.action.MAIN';

    const intentParams: IntentLauncherParams = {
      category: 'android.intent.category.APP_EMAIL',
    };

    await startActivityAsync(activityAction, intentParams);

    return true;
  } else if (DeviceInfo.isIOS) {
    const url = 'mailto:';

    const canOpen = await openUrl(url);

    return canOpen;
  }

  return false;
}

const Linking: LinkingApi = {
  openUrl,
  openMail,
};

export default Linking;
