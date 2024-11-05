import React from 'react';
import { FlatList } from 'react-native';
import { Controller, FieldValues } from 'react-hook-form';

import AntDesign from '@expo/vector-icons/AntDesign';
import { YStack, Button, If, Text } from '@dls/components';
import type { SelectProps } from '@modules/profile/mobile/components/Select/interfaces';
import { ItemsContainer } from '@modules/profile/mobile/components/Select/styles';
import {
  hideBottomSheet,
  showBottomSheet,
} from '@dls/components/BottomSheet/methods';

function Select<T extends FieldValues>({
  options,
  placeholder,
  control,
  name,
}: SelectProps<T>) {
  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange }, fieldState: {} }) => {
          const h = '90%';

          function onSelect(item: string) {
            onChange(item);
            hideBottomSheet();
          }

          function openSelect() {
            showBottomSheet({
              isBlur: true,
              component: (
                <ItemsContainer br={'$2'} mt={'$1'} px={'$4'} height={500}>
                  <FlatList
                    data={options}
                    style={{ height: 500 }}
                    getItemLayout={(data, index) => ({
                      length: 55,
                      offset: 55 * index,
                      index,
                    })}
                    initialNumToRender={10}
                    maxToRenderPerBatch={20}
                    updateCellsBatchingPeriod={100}
                    windowSize={10}
                    renderItem={({ item }) => (
                      <Button
                        onPress={() => onSelect(item)}
                        h={55}
                        w={'100%'}
                        jc={'center'}
                        br={'$4'}>
                        <Text col={'$white1'} ml={'$2'}>
                          {item}
                        </Text>
                      </Button>
                    )}
                    ItemSeparatorComponent={() => (
                      <YStack h={1} w={'100%'} bg={'$contrast'} />
                    )}
                  />
                </ItemsContainer>
              ),
            });
          }

          return (
            <YStack>
              <Button
                {...{
                  h,
                }}
                fd={'row'}
                jc={'space-between'}
                bg="$contrast"
                h={52}
                borderRadius={10}
                w="100%"
                gap="$2"
                br="$4"
                ai="center"
                px="$4"
                onPress={openSelect}>
                <If
                  condition={!!value}
                  elseRender={<Text col="$placeholder">{placeholder}</Text>}>
                  <Text col="$text">{value}</Text>
                </If>

                <AntDesign name="downcircleo" size={20} color="white" />
              </Button>
            </YStack>
          );
        },
      }}
    />
  );
}

export default Select;
