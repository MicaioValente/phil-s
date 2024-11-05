import type { ModalProps } from 'react-native';

export interface BottomSheetRef {
  open: () => void;
  close: () => void;
}

export interface BottomSheetProps extends ModalProps {}

export interface BottomSheetOptions extends Options{
};

export interface Options {
  component: React.ReactNode
  isBlur?: boolean
}