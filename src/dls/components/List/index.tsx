import { FlashList, type FlashListProps } from '@shopify/flash-list';

import type {
  ListConstraints,
  ListProps,
} from '@dls/components/List/interfaces';

import { getTokens } from 'tamagui';

const List = <T extends ListConstraints>({
  children,
  withTopInset,
  withBottomInset,
  ...rest
}: ListProps<T>) => {
  const tokens = getTokens();

  const customProps: Omit<FlashListProps<T>, 'data' | 'renderItem'> = {
    ...rest,
  };

  if (withTopInset)
    customProps.contentContainerStyle = {
      ...customProps.contentContainerStyle,
      paddingTop: tokens.space.it.val,
    };

  if (withBottomInset)
    customProps.contentContainerStyle = {
      ...customProps.contentContainerStyle,
      paddingBottom: tokens.space.it.val,
    };

  return (
    <FlashList<T>
      {...{ ...customProps }}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => children(item, index)}
    />
  );
};

export default List;
