import { ZStack as TamaguiZStack } from 'tamagui';

import type { YStackProps } from '@dls/components/YStack/interfaces';

function ZStack({ ...rest }: YStackProps) {
  return <TamaguiZStack {...rest} />;
}

export default ZStack;
