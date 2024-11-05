import { useState } from 'react';
import { Controller, type FieldValues } from 'react-hook-form';

import { Button, If, Input, XStack } from '@dls/components';
import type { InputProps } from '@dls/components/Input/interfaces';
import type { SignInputProps } from '@modules/account/mobile/components/SignInput/interfaces';
import {
  CheckIcon,
  EyeIcon,
} from '@modules/account/mobile/components/SignInput/styles';
import { useEventListener } from '@shared/hooks';

function SignInput<T extends FieldValues>({
  name,
  control,
  isPassword,
  shouldShowCheck,
  rightComponent,
  isValidated = false,
  setIsValidated,
  pattern = (text: string) => text,
  ...rest
}: SignInputProps<T>) {
  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange }, fieldState: { invalid } }) => {
          const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

          if (shouldShowCheck) {
            useEventListener(`${name}IsValidated`, () => {
              setIsValidated?.(true);
            });

            useEventListener(`${name}IsNotValidated`, () => {
              setIsValidated?.(false);
            });
          }

          const customProps: InputProps = {
            h: '100%',
            autoCorrect: false,
            secureTextEntry,
            value,
            onChangeText,
          };

          function onChangeText(text: string) {
            onChange(pattern(text));
          }

          function onVisible() {
            setSecureTextEntry(prevState => !prevState);
          }

          return (
            <XStack
              f={1}
              gap="$2"
              h="$5"
              mah="$5"
              br="$4"
              ai="center"
              bg="$contrast"
              px="$4">
              <Input {...{ ...rest, ...customProps }} />

              <If
                condition={!!value}
                elseRender={
                  <If condition={!!rightComponent}>{rightComponent}</If>
                }>
                <If
                  condition={[isValidated, shouldShowCheck].every(Boolean)}
                  elseRender={
                    <If condition={!!isPassword}>
                      <Button hitSlop={8} onPress={onVisible}>
                        <EyeIcon
                          name={secureTextEntry ? 'eye-off' : 'eye'}
                          size={24}
                        />
                      </Button>
                    </If>
                  }>
                  <CheckIcon name="checkcircle" size={24} />
                </If>
              </If>
            </XStack>
          );
        },
      }}
    />
  );
}

export default SignInput;
