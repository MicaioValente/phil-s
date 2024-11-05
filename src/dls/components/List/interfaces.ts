import type { FlashListProps } from '@shopify/flash-list';

export interface ListConstraints {
  id: string;
}

export interface ListContainerStyle<T>
  extends Omit<FlashListProps<T>, 'data' | 'renderItem' | 'children'> {
  withTopInset: boolean;
  withBottomInset: boolean;
  ItemSeparatorComponent: () => JSX.Element;
}

export interface ListProps<T> extends Partial<ListContainerStyle<T>> {
  data: T[];
  children: (item: T, index: number) => JSX.Element;
}
