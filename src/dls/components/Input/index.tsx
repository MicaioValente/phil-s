import { forwardRef, Ref } from 'react';
import { Input as TamaguiInput } from 'tamagui';

import type { InputProps } from '@dls/components/Input/interfaces';

function Input({ ...rest }: InputProps, ref: Ref<TamaguiInput>) {
  return (
    <TamaguiInput
      f={1}
      unstyled
      color="$text"
      placeholderTextColor="$placeholder"
      {...{ ...rest, ref }}
    />
  );
}

export default forwardRef(Input);
