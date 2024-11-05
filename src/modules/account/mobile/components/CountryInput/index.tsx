import { TouchableWithoutFeedback } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import {
  Button,
  If,
  Image,
  List,
  Spinner,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import {
  hideBottomSheet,
  showBottomSheet,
} from '@dls/components/BottomSheet/methods';
import type { CountryCodeInputProps } from '@modules/account/mobile/components/CountryInput/interfaces';
import { useCountryCode } from '@modules/account/business/useCases';
import { CountryCodeReturn } from '@modules/account/business/useCases/useCountryCode/interfaces';
import { useWindowDimensions } from '@shared/hooks';
import { useState } from 'react';

function CountryCodeInput<T extends FieldValues>({
  name,
  control,
  placeholder,
}: CountryCodeInputProps<T>) {
  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange } }) => {
          const { height } = useWindowDimensions();

          const { data, isLoading } = useCountryCode();

          const [selectedCountry, setSelectedCountry] =
            useState<CountryCodeReturn>({} as CountryCodeReturn);

          function onChangeCountry(item: CountryCodeReturn) {
            hideBottomSheet();

            onChange(item.code);

            setSelectedCountry(item);
          }

          function openCountryPicker() {
            showBottomSheet({
              isBlur: true,
              component: (
                <Button fg={1} activeOpacity={0}>
                  <YStack h={height * 0.5}>
                    <List<CountryCodeReturn>
                      data={data}
                      withBottomInset
                      estimatedItemSize={22}
                      contentContainerStyle={{ padding: 16 }}
                      ItemSeparatorComponent={() => (
                        <TouchableWithoutFeedback>
                          <YStack h={'$1'} w={'100%'} />
                        </TouchableWithoutFeedback>
                      )}>
                      {item => (
                        <Button onPress={() => onChangeCountry(item)}>
                          <XStack ai="center">
                            <Image
                              w="$4"
                              br={'$1'}
                              aspectRatio={2}
                              source={{ uri: item.flag }}
                            />

                            <Text textAlign="center" w="$8" col="$text">
                              {item.code}
                            </Text>

                            <Text col="$text">{item.name}</Text>
                          </XStack>
                        </Button>
                      )}
                    </List>
                  </YStack>
                </Button>
              ),
            });
          }

          return (
            <XStack
              f={1}
              gap="$2"
              h="$5"
              mah="$5"
              br="$4"
              ai="center"
              bg="$contrast">
              <If
                condition={isLoading}
                elseRender={
                  <Button
                    f={1}
                    px="$4"
                    h="100%"
                    jc="center"
                    onPress={openCountryPicker}>
                    <If
                      condition={!!value}
                      elseRender={
                        <Text col="$placeholder">{placeholder}</Text>
                      }>
                      <XStack gap="$2" ai="center" jc="center">
                        <Image
                          w="$3.5"
                          br={'$1'}
                          aspectRatio={2}
                          source={{ uri: selectedCountry.flag }}
                        />
                        <Text col="$text">{selectedCountry.code}</Text>
                      </XStack>
                    </If>
                  </Button>
                }>
                <XStack f={1} ai="center" jc="center">
                  <Spinner color="$text" />
                </XStack>
              </If>
            </XStack>
          );
        },
      }}
    />
  );
}

export default CountryCodeInput;
