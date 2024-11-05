import { useState } from 'react';
import type { GestureResponderEvent, ViewStyle } from 'react-native/types';
import { Button as TamaguiButton } from 'tamagui';

import { ButtonProps } from '@dls/components/Button/interfaces';

function Button({ activeOpacity = 0.8, ...rest }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  function onPressIn(event: GestureResponderEvent) {
    setIsPressed(true);

    rest.onPressIn?.(event);
  }

  function onPressOut(event: GestureResponderEvent) {
    setIsPressed(false);

    rest.onPressOut?.(event);
  }

  const style: ViewStyle = {
    opacity: isPressed ? activeOpacity : 1,
  };

  return (
    <TamaguiButton
      {...rest}
      unstyled
      style={style}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    />
  );
}

export default Button;
