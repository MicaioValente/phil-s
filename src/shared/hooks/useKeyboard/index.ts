import { useLayoutEffect, useState } from 'react';
import {
  Keyboard,
  LayoutAnimation,
  LogBox,
  type KeyboardEvent,
} from 'react-native';

export function useKeyboard() {
  const [height, setHeight] = useState(0);
  const [isVisible, setVisible] = useState(Keyboard.isVisible);

  useLayoutEffect(() => {
    LogBox.ignoreLogs(['Overriding previous layout animation']);

    function onKeyboardDidShow(e: KeyboardEvent) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      setVisible(true);
      setHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      setHeight(0);
      setVisible(false);
    }

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return { height, isVisible };
}
