import { Animated } from 'react-native';
import { StackProps } from 'tamagui';

export interface PaginationProps extends StackProps {
  gap: number;
  width: number;
  length: number;
  scrollX: Animated.Value;
}

export interface DotStyle {
  size: number;
}
