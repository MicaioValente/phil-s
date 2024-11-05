import { useMemo } from 'react';
import { Controller, type FieldValues } from 'react-hook-form';
import { If, Input, Text, XStack, YStack } from '@dls/components';
import type { ProfileInputProps } from '@modules/profile/mobile/components/ProfileInput/interfaces';

function ProfileInput<T extends FieldValues>({
  name,
  control,
  pattern = (text: string) => text,
  isVisibleCounter = false,
  title,
  ...rest
}: ProfileInputProps<T>) {
  const renderTitle = (
    <If condition={!!title}>
      <Text
        fos={'$2'}
        fow={'bold'}
        pos={'absolute'}
        top={'$2'}
        left={'$4'}
        bg={'$contrast'}
        w={'100%'}
        col={'$white1'}
        h={'$1'}
        zIndex={3}>
        {title}
      </Text>
    </If>
  );

  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange }, fieldState: {} }) => {
          const h = '100%';
          const heightInput = !!title ? '$8' : '$5';
          const pb = !!isVisibleCounter ? '$2' : 0;

          const { maxLength, RightComponent } = rest;
          const shouldRenderRightComponent = !!RightComponent;

          const characterCount = useMemo(() => {
            return `${value ? value.length : 0}/${maxLength}`;
          }, [value, maxLength]);

          function onChangeText(text: string) {
            onChange(pattern(text));
          }

          const renderCounter = (
            <If condition={isVisibleCounter}>
              <Text
                fos={'$1'}
                pos={'absolute'}
                bottom={'$2'}
                right={'$4'}
                col={'#666666'}
                zIndex={3}>
                {characterCount}
              </Text>
            </If>
          );

          return (
            <YStack f={1} gap="$2">
              <XStack
                w="100%"
                gap="$2"
                h={heightInput}
                pb={pb}
                br="$4"
                ai="center"
                bg="$contrast"
                px="$4">
                {renderTitle}
                {renderCounter}
                <Input
                  {...{
                    ...rest,
                    h,
                    value,
                    onChangeText,
                  }}
                />

                <If condition={shouldRenderRightComponent}>{RightComponent}</If>
              </XStack>
            </YStack>
          );
        },
      }}
    />
  );
}

export default ProfileInput;
