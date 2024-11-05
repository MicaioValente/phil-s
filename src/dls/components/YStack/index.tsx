import { YStack as TamaguiYStack } from 'tamagui';

import type { YStackProps } from '@dls/components/YStack/interfaces';

function YStack({ ...rest }: YStackProps) {
  return <TamaguiYStack {...rest} />;
}

export default YStack;
