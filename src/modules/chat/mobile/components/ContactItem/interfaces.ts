
import { StackProps } from 'tamagui';

export interface ContactItemProps extends StackProps {
  data: {
    name: string;

    image: string;
    type: string;
    invited: boolean;
  };
}
