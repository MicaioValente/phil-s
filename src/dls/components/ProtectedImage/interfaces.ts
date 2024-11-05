import type { Image } from 'tamagui';

export interface ProtectedImageProps
  extends Omit<React.ComponentProps<typeof Image>, 'source'> {
  uri: string;
}
