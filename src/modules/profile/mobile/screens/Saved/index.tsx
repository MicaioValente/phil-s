import React from 'react';
import { Alert } from 'react-native';

import { useNavigation, useTranslation } from '@shared/hooks';
import { YStack } from '@dls/components';

import { HeaderList, SquareCategory } from '@modules/profile/mobile/components';
import { Category } from '../../components/SquareCategory/interface';

const padding = 15;

const categories: Category[] = [
  {
    id: '1',
    name: 'Photos',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
        onPress: () => Alert.alert('Item 1'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
      {
        id: '3',
        title: 'Item 3',
        image: require('../../assets/Rectangle3.png'),
      },
      {
        id: '4',
        title: 'Item 4',
        image: require('../../assets/Rectangle4.png'),
      },
    ],
  },
  {
    id: '2',
    name: 'Videos',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
    ],
  },
  {
    id: '3',
    name: 'Music',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
      {
        id: '3',
        title: 'Item 3',
        image: require('../../assets/Rectangle3.png'),
      },
      {
        id: '4',
        title: 'Item 4',
        image: require('../../assets/Rectangle4.png'),
      },
    ],
  },
  {
    id: '4',
    name: 'Causes',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
      {
        id: '3',
        title: 'Item 3',
        image: require('../../assets/Rectangle3.png'),
      },
      {
        id: '4',
        title: 'Item 4',
        image: require('../../assets/Rectangle4.png'),
      },
    ],
  },
  {
    id: '5',
    name: 'Education',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
      {
        id: '3',
        title: 'Item 3',
        image: require('../../assets/Rectangle3.png'),
      },
      {
        id: '4',
        title: 'Item 4',
        image: require('../../assets/Rectangle4.png'),
      },
    ],
  },
  {
    id: '6',
    name: 'Education',
    items: [
      {
        id: '1',
        title: 'Item 1',
        image: require('../../assets/Rectangle1.png'),
      },
      {
        id: '2',
        title: 'Item 2',
        image: require('../../assets/Rectangle2.png'),
      },
      {
        id: '3',
        title: 'Item 3',
        image: require('../../assets/Rectangle3.png'),
      },
    ],
  },
];

const Saved = () => {
  const { t } = useTranslation('profile');
  const navigation = useNavigation();

  return (
    <YStack f={1} bg={'$background'} pt={'$it'}>
      <HeaderList onPressBack={navigation.goBack} title={t('saved')} />
      <YStack fg={1} bg={'$contrast'} p={padding} pt="$5">
        <SquareCategory categories={categories} p={padding} />
      </YStack>
    </YStack>
  );
};

export default Saved;
