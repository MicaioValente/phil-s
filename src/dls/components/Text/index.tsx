import { Text as TamaguiText } from 'tamagui';

import type { TextProps } from '@dls/components/Text/interfaces';

function Text({ ...rest }: TextProps) {
  return <TamaguiText {...rest} unstyled />;
}

export default Text;
