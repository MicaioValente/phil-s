import { Image as TamaguiImage } from 'tamagui';

import type { ImageProps } from '@dls/components/Image/interfaces';

function Image({ ...rest }: ImageProps) {
  return <TamaguiImage {...rest} />;
}

export default Image;
