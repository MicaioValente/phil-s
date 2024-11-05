import { useState } from 'react';
import { StatusBar } from 'react-native';
import TooltipRN, {
  TooltipProps as TooltipRNProps,
} from 'react-native-walkthrough-tooltip';

import DeviceInfo from '@core/deviceInfo';
import Keyboard from '@core/keyboard';
import { Button } from '@dls/components';
import type { TooltipProps } from '@dls/components/Tooltip/interfaces';

function Tooltip({ children, ...rest }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const customProps: TooltipRNProps = {
    topAdjustment: DeviceInfo.isAndroid ? -StatusBar.currentHeight! : 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    contentStyle: {
      borderRadius: 16,
      backgroundColor: '#181818',
    },
  };

  function onOpen() {
    Keyboard.dismiss();

    setIsVisible(true);
  }

  function onClose() {
    setIsVisible(false);
  }

  return (
    <TooltipRN {...{ ...rest, ...customProps, isVisible, onClose }}>
      <Button onPress={onOpen}>{children}</Button>
    </TooltipRN>
  );
}

export default Tooltip;
