import { Switch as TamaguiSwitch } from 'tamagui';

import type { SwitchProps } from '@dls/components/Switch/interfaces';

function Switch({ ...rest }: SwitchProps) {
  return <TamaguiSwitch {...rest} />;
}

export default Switch;
Switch.Thumb = TamaguiSwitch.Thumb;
