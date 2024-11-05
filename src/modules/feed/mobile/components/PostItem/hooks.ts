import { useRef, useState } from 'react';
import { ButtonLayout } from './interfaces';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { PostActionsPopupRef } from '../PostActionsPopup/interfaces';

export function usePopup() {
  const [layout, setLayout] = useState<ButtonLayout | null>(null);
  const ref = useRef<PostActionsPopupRef>(null);
  const dotsRef = useRef<TouchableOpacity>(null);

  const handleOpenPopUp = () => {
    if (!dotsRef.current) return;

    ref.current?.open();
    dotsRef.current.measure((x, y, width, height, pageX, pageY) => {
      setLayout({ x: pageX, y: pageY, width, height });
    });
  };

  const onLayoutButton = (event: LayoutChangeEvent) => {
    if (!dotsRef.current) return;

    dotsRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setLayout({ x: pageX, y: pageY, width, height });
    });
  };

  return {
    layout,
    ref,
    dotsRef,
    handleOpenPopUp,
    onLayoutButton,
  }
}
