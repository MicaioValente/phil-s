import { XStack as TamaguiXStack } from 'tamagui';

import DeviceInfo from '@core/deviceInfo';
import type { XStackProps } from '@dls/components/XStack/interfaces';

function XStack({ ...rest }: XStackProps) {
  if (DeviceInfo.isIOS) delete rest.elevation;

  return <TamaguiXStack {...rest} />;
}

export default XStack;
