import { useWindowDimensions } from 'react-native';

export function useVideoLayout() {
  const window = useWindowDimensions();

  const gap = 2;

  const width = window.width * 1
  const style = {
    height: width / 2,
    width: width,
  };

  return {
    gap,
    style,
  };
}
