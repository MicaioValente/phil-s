import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  type LayoutChangeEvent,
  Modal,
  PanResponder,
  ViewStyle,
} from 'react-native';

import EventEmitter from '@core/eventEmitter';
import { Button, XStack } from '@dls/components';
import { BackgroundBlur, Content } from '@dls/components/BottomSheet/styles';
import {
  BottomSheetOptions,
  Options,
} from '@dls/components/BottomSheet/interfaces';
import {
  useDidUpdateEffect,
  useEventListener,
  useKeyboard,
} from '@shared/hooks';

function BottomSheet() {
  const keyboard = useKeyboard();

  const translateY = useRef(new Animated.Value(0)).current;
  const translateYRef = useRef(0);

  const closeThreshold = useRef(0);
  const heightRef = useRef(0);

  const [height, setHeight] = useState(0);
  const [options, setOptions] = useState<Options | null>(null);

  const isVisible = options !== null;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: translateY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        const shouldCloseOnEndGesture =
          translateYRef.current >= closeThreshold.current;

        shouldCloseOnEndGesture
          ? EventEmitter.emit('hideBottomSheet')
          : Animated.timing(translateY, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }).start();
      },
    }),
  ).current;

  useEventListener('showBottomSheet', showBottomSheet);

  useEventListener('hideBottomSheet', () =>
    Animated.timing(translateY, {
      toValue: heightRef.current,
      duration: 200,
      useNativeDriver: true,
    }).start(() => hideBottomSheet()),
  );

  useEffect(() => {
    const id = translateY.addListener(({ value }) => {
      translateYRef.current = value;
    });

    return () => translateY.removeListener(id);
  }, [isVisible]);

  useLayoutEffect(() => {
    closeThreshold.current = (height - keyboard.height) * 0.5;

    heightRef.current = height;
  }, [height, keyboard.height]);

  useDidUpdateEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [keyboard.isVisible]);

  function showBottomSheet(options: BottomSheetOptions) {
    setOptions(options);
  }

  function hideBottomSheet() {
    setOptions(null);

    translateY.setValue(0);
  }

  function onLayout(event: LayoutChangeEvent) {
    setHeight(event.nativeEvent.layout.height);
  }

  const style: ViewStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, height],
          outputRange: [0, height],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const customProps = {
    style,
    onLayout,
    ...panResponder.panHandlers,
  };

  if (isVisible)
    return (
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        statusBarTranslucent>
        <BackgroundBlur
          tint="systemChromeMaterialDark"
          intensity={options.isBlur ? 40 : 0}
          experimentalBlurMethod="dimezisBlurView">
          <Content {...customProps} btrr="$6" btlr="$6" bg="$black3">
            <XStack
              h={6}
              w={'$7'}
              my="$3"
              als={'center'}
              bg={'$contrast'}
              br={'$true'}
            />
            {options.component}
            <XStack height={keyboard.height} />
          </Content>
        </BackgroundBlur>
      </Modal>
    );

  return null;
}

export default BottomSheet;
