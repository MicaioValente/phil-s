import { Controller, type FieldValues } from 'react-hook-form';

import { Button, Input, XStack } from '@dls/components';
import type { InputProps } from '@dls/components/Input/interfaces';
import type { SearchInputProps } from '@modules/profile/mobile/components/SearchInput/interfaces';
import { SearchIcon } from '@modules/profile/mobile/components/SearchInput/styles';

function SearchInput<T extends FieldValues>({
  name,
  control,
  pattern = (text: string) => text,
  ...rest
}: SearchInputProps<T>) {
  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange } }) => {
          const customProps: InputProps = {
            h: '100%',
            autoCorrect: false,
            value,
            onChangeText,
          };

          function onChangeText(text: string) {
            onChange(pattern(text));
          }

          return (
            <XStack
              w="100%"
              gap="$2"
              h="$5"
              br="$12"
              ai="center"
              bg="$contrast"
              px="$4">
              <Button hitSlop={8}>
                <SearchIcon name="search" size={24} />
              </Button>
              <Input {...{ ...rest, ...customProps }} />
            </XStack>
          );
        },
      }}
    />
  );
}

export default SearchInput;
