import { useWindowDimensions as useRNWindowDimensions } from 'react-native';

export function useWindowDimensions() {
  const window = useRNWindowDimensions();

  return {
    height: window.height,
    width: window.width,
  };
}
