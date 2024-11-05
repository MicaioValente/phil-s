import { LinearGradient as TamaguiLinearGradient } from 'tamagui/linear-gradient';

import type { LinearGradientProps } from '@dls/components/LinearGradient/interfaces';

function LinearGradient({ ...rest }: LinearGradientProps) {
  return <TamaguiLinearGradient {...rest} />;
}

export default LinearGradient;
