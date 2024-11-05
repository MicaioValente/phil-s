import { styled } from 'tamagui';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';

import DeviceInfo from '@core/deviceInfo';

const KeyboardAvoidingView = styled(RNKeyboardAvoidingView, {
  flex: 1,
  behavior: DeviceInfo.isIOS ? 'padding' : undefined,
});

export default KeyboardAvoidingView;
