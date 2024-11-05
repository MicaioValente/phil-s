import type { Button } from 'tamagui';

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  activeOpacity?: number;
}
