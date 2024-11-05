import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList } from 'react-native';

import { If, Pagination, YStack } from '@dls/components';
import type {
  CarouselConstraints,
  CarouselProps,
  ViewableItemsChanged,
} from '@dls/components/Carousel/interfaces';

function Carousel<T extends CarouselConstraints>({
  data,
  width,
  autoPlay = false,
  withPagination = false,
  gap = 0,
  children,
  dotStyle,
  ...rest
}: CarouselProps<T>) {
  const { length } = data;

  const ref = useRef<FlatList<T>>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const defineSnapPoints = data.map((_, i) => i * width + gap * i);

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsChanged) => {
      if (!viewableItems.length) return;

      setCurrentIndex(viewableItems[0].index!);
    },
  ).current;

  const scrollEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false },
  );

  useEffect(() => {
    if ([!length, !autoPlay].some(Boolean)) return;

    const interval = setInterval(() => {
      const isLastIndex = currentIndex === data?.lastIndex();

      ref.current?.scrollToIndex({
        animated: true,
        index: isLastIndex ? 0 : currentIndex + 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, length]);

  return (
    <YStack flexShrink={1}>
      <FlatList<T>
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        onScroll={scrollEvent}
        snapToOffsets={defineSnapPoints}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap }}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => children(item, index)}
        {...{ ...rest, data, ref }}
      />

      <If condition={withPagination}>
        <Pagination {...dotStyle} {...{ gap, width, length, scrollX }} />
      </If>
    </YStack>
  );
}

export default Carousel;
