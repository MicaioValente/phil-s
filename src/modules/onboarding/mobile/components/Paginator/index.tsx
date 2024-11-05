import React from 'react';

import { View, Animated, useWindowDimensions } from 'react-native';
import { PaginatorProps } from './interfaces';
import { styles } from './styles';

const Paginator: React.FC<PaginatorProps> = ({
  data,
  scrollX,
  currentIndex,
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 24, 8],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                backgroundColor: currentIndex == i ? '#E64E17' : '#D7D8DB',
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
