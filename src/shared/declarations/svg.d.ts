declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  export default React.FC<SvgProps>;
}
