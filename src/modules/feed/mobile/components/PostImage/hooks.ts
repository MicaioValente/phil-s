import { useWindowDimensions } from 'react-native';

export function useCarouselLayout() {
  const window = useWindowDimensions();

  const gap = 2;

  const width = window.width
  const style = {
    height: width / 2,
    width: width,
  };

  return {
    gap,
    style,
  };
}
