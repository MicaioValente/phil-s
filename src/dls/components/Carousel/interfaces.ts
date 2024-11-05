import type { FlatListProps, ViewToken } from 'react-native';
import { StackProps } from 'tamagui';

export interface CarouselProps<T>
  extends Omit<FlatListProps<T>, 'data' | 'children' | 'renderItem'> {
  data: T[];
  width: number;
  autoPlay?: boolean;
  gap?: number;
  withPagination?: boolean;
  dotStyle?: StackProps
  children: (item: T, index: number) => JSX.Element;
}

export interface ViewableItemsChanged {
  viewableItems: ViewToken[];
}

export interface CarouselConstraints {
  id: string | number;
}
