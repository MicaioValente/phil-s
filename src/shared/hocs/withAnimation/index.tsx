import { Component, ComponentClass, ComponentType, ReactNode } from 'react';
import Animated, { type AnimatedProps } from 'react-native-reanimated';

export function withAnimated<T extends object>(
  WrappedComponent: ComponentType<T>,
): ComponentClass<AnimatedProps<T>> {
  class WithAnimated extends Component<T> {
    render(): ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Animated.createAnimatedComponent<T>(WithAnimated);
}
