import { useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import type { PaginationProps } from '@dls/components/Pagination/interfaces';
import { Dot, styles } from '@dls/components/Pagination/styles';
import { XStack } from '@dls/components';

export function Pagination({
  gap,
  width,
  length,
  scrollX,
  ...props
}: PaginationProps) {
  const window = useWindowDimensions();

  const data = Array(length).fill(null);

  const activeSize = 8;
  const inactiveSize = 6;

  const maxDots = data.length;
  const dotsToShow = Math.min(length, maxDots);

  const { tabIndex, ...restProps } = props;

  return (
    <XStack
      {...restProps}
      jc={'center'}
      ai={'center'}
      width={'$3.5'}
      pos={'absolute'}
      bottom={12}
      alignSelf="center">
      <BlurView
        style={[styles.blur, { gap }]}
        intensity={10}
        tint="regular"
        experimentalBlurMethod="dimezisBlurView">
        {data.slice(0, dotsToShow).map((_, key) => {
          const isMoreThanOne = length > 1;
          const isLast = key === dotsToShow - 1;
          const isSecondToLast = key === dotsToShow - 2;

          let inputRange = [
            (key - 1) * width + (key - 1) * gap,
            key * width + key * gap,
            (key + 1) * width + (key + 1) * gap,
          ];

          if (isMoreThanOne && isLast) {
            inputRange = [
              (key - 1) * width + (key - 1) * gap,
              width * length - window.width + gap * (length + 1),
              (key + 1) * width + (key + 1) * gap,
            ];
          } else if (isSecondToLast) {
            inputRange = [
              (key - 1) * width + (key - 1) * gap,
              key * width + key * gap,
              width * length - window.width + gap * (length + 1),
            ];
          }

          inputRange = inputRange.map((value, idx, arr) => {
            if (idx > 0 && value < arr[idx - 1]) {
              return arr[idx - 1] + 0.01;
            }
            return value;
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          const size = scrollX.interpolate({
            inputRange,
            outputRange: [inactiveSize, activeSize, inactiveSize],
            extrapolate: 'clamp',
          });

          const style = {
            opacity,
            width: size,
            height: size,
          };

          return <Dot key={key} bg={'$white1'} br={'$14'} style={style} />;
        })}
      </BlurView>
    </XStack>
  );
}

export default Pagination;
