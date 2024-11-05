import React, { useEffect } from 'react';
import { PaginatorStoryProps } from '@modules/feed/mobile/components/PaginatorStory/interfaces';
import { styles } from '@modules/feed/mobile/components/PaginatorStory/styles';
import { YStack } from '@dls/components';
import Animated, { Easing, runOnJS, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const PaginatorStory: React.FC<PaginatorStoryProps> = ({
  data,
  currentIndex,
  change
}) => {
  const progress = useSharedValue(0);
  const duration = data[currentIndex]?.duration || 0;

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration,
      easing: Easing.linear,
    });
  }, [currentIndex,data]);

  useAnimatedReaction(
    () => progress.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue && currentValue === 1 && duration > 0) {
        runOnJS(change)(currentIndex+1);
      }
    }
  );

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (

    <YStack fd="row">
      {data.map((_: any, i: number) => {
        return (
          <YStack style={styles.dot} key={`pageIndicator-${i}`}>
            <Animated.View
              style={[
                styles.dot,
                {
                  marginHorizontal: 0,
                  backgroundColor: 'white',
                },
                i === currentIndex && indicatorAnimatedStyle,
                i > currentIndex && { width: 0 },
                i < currentIndex && { width: '100%' },
              ]}
              key={i.toString()}
            />
          </YStack>
        );
      })}
    </YStack>
  );
};

export default PaginatorStory;
