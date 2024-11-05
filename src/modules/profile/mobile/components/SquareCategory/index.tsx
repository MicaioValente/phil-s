import React from 'react';
import { Alert, Dimensions } from 'react-native';
import { Button, If, Image, List, Text, XStack } from '@dls/components';
import { SquareCategoryProps } from './interface';

const { width } = Dimensions.get('window');

const Placeholder = ({ size }: { size: number }) => (
  <XStack w={size} h={size} bg={'$background'} jc="center" ai="center" br={5} />
);

const SquareCategory = ({ categories, p }: SquareCategoryProps) => {
  const itemsPerRow = 2;
  const categoryWidth = width / itemsPerRow;
  const itemSize = categoryWidth / 2 - p;

  const createPlaceholderItem = (id: string) => ({
    id,
    image: null,
  });

  const getItemsWithPlaceholders = (items: any[]) => {
    const itemsToShow = items.slice(0, 4);
    const placeholdersNeeded = 4 - itemsToShow.length;
    if (placeholdersNeeded > 0) {
      for (let i = 0; i < placeholdersNeeded; i++) {
        itemsToShow.push(createPlaceholderItem(`placeholder-${i}`));
      }
    }
    return itemsToShow;
  };

  return (
    <List data={categories} keyExtractor={item => item.id} numColumns={2}>
      {({ name, items }) => {
        const itemsToDisplay = getItemsWithPlaceholders(items);
        return (
          <XStack flex={1} fd="column" mb="$4" ai="center" jc="center">
            <XStack w="100%" jc="center" ai="center" fw="wrap" gap="$1.5">
              {itemsToDisplay.map(({ id, image: uri, onPress }) => (
                <If
                  condition={!!uri}
                  elseRender={<Placeholder key={id} size={itemSize} />}>
                  <Button
                    key={id}
                    width={itemSize}
                    height={itemSize}
                    {...{ onPress }}>
                    <Image
                      resizeMode="cover"
                      src={uri}
                      w="100%"
                      h="100%"
                      br={5}
                    />
                  </Button>
                </If>
              ))}
            </XStack>
            <XStack flex={1} w={itemSize * 2} ai="flex-start" jc="flex-start">
              <Button onPress={() => Alert.alert('click on category ' + name)}>
                <Text
                  fontSize={18}
                  fontWeight="bold"
                  color="$text"
                  textAlign="center"
                  pt="$4">
                  {name}
                </Text>
              </Button>
            </XStack>
          </XStack>
        );
      }}
    </List>
  );
};

export default SquareCategory;
