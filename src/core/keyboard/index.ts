import { Keyboard as RNKeyboard } from 'react-native';

import type { KeyboardApi } from '@core/keyboard/interfaces';

function dismiss() {
  RNKeyboard.dismiss();
}

const Keyboard: KeyboardApi = {
  dismiss,
};

export default Keyboard;
