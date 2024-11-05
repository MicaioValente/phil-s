import React from 'react';
import { Controller, type FieldValues } from 'react-hook-form';

import { Button, If, Text, XStack } from '@dls/components';
import { showDatePicker } from '@dls/components/DatePicker/methods';
import type { ProfileDateInputProps } from '@modules/profile/mobile/components/ProfileDateInput/interfaces';
import { dateFormattedToShow } from '@shared/formatting';
import { DateRangeIcon } from '@modules/profile/mobile/components/ProfileDateInput/styles';

function ProfileDateInput<T extends FieldValues>({
  name,
  control,
  placeholder,
}: ProfileDateInputProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        async function onChangeDate() {
          const date = await showDatePicker({
            value,
          });

          if (date) onChange(date);
        }

        return (
          <XStack
            w="100%"
            gap="$2"
            h="$5"
            br="$4"
            ov="hidden"
            bg="$contrast"
            ai={'center'}>
            <Button
              f={1}
              fd="row"
              px="$4"
              ai="center"
              jc="space-between"
              onPress={onChangeDate}>
              <If
                condition={!!value}
                elseRender={<Text col="$placeholder">{placeholder}</Text>}>
                <Text col="$text">{dateFormattedToShow(value)}</Text>
              </If>

              <DateRangeIcon name="calendar" size={20} />
            </Button>
          </XStack>
        );
      }}
    />
  );
}

export default ProfileDateInput;
