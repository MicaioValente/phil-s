import { Animated } from 'react-native';

export interface PaginatorStoryProps {
  data: any[];
  currentIndex: number;
  change: (index: number) => void;
}
