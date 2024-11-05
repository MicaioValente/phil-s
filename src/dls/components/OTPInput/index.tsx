import { useRef, useState } from 'react';
import type {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
} from 'react-native';

import { Input, XStack } from '@dls/components';
import type { OTPInputProps } from '@dls/components/OTPInput/interfaces';

function OTPInput({ length, value, onChange, ...rest }: OTPInputProps) {
  const inputRefs = useRef<TextInput[]>([]);

  const data = Array(length).fill(null);

  const splitValue = value.split('');

  function setRefs(ref: TextInput | null, index: number) {
    if (!ref) return;

    inputRefs.current.includes(ref) ? null : (inputRefs.current[index] = ref);
  }

  function onChangeValue(char: string, index: number) {
    const newValue = [...splitValue];

    newValue[index] = char;

    onChange(newValue.join(''));
  }

  function onChangeText(char: string, index: number) {
    onChangeValue(char, index);

    if (!!char.length) {
      inputRefs.current[index + 1]?.focus();

      return;
    }

    inputRefs.current[index - 1]?.focus();
  }

  function onKeyPress(
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) {
    if (event.nativeEvent.key === 'Backspace') onChangeText('', index);
  }

  return (
    <XStack gap="$3" jc="center">
      {data.map((_, index) => {
        const [, setIsFilled] = useState(false);
        const [isFocused, setIsFocused] = useState(false);

        function onFocus() {
          setIsFocused(true);
        }

        function onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
          setIsFocused(false);
          setIsFilled(!!e.nativeEvent.text);
        }

        return (
          <XStack
            key={index}
            w="$3.5"
            h="$5"
            pb="$1"
            bbw="$0.5"
            bbc={isFocused ? '$primary' : 'gray'}
            ai="center"
            jc="center">
            <Input
              ref={ref => setRefs(ref, index)}
              value={splitValue[index]}
              maxLength={1}
              contextMenuHidden
              selectTextOnFocus
              keyboardType="decimal-pad"
              onChangeText={text => onChangeText(text, index)}
              onKeyPress={event => onKeyPress(event, index)}
              h="100%"
              fos="$5"
              ta="center"
              {...{ ...rest, onFocus, onBlur }}
            />
          </XStack>
        );
      })}
    </XStack>
  );
}

export default OTPInput;
