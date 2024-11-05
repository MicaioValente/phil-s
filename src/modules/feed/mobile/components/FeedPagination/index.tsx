import { Button, LinearGradient, Text, YStack } from '@dls/components';
import { useTranslation } from '@shared/hooks/useTranslation';
import { IconLeaftPhilcoin } from '@modules/feed/mobile/assets';
import type { FeedPaginationProps } from '@modules/feed/mobile/components/FeedPagination/interfaces';
import {  LayoutChangeEvent } from 'react-native';
import { useState } from 'react';
import ModalProducts from '../ModalProducts';
import { useNavigation } from '@shared/hooks';

const FeedPagination: React.FC<FeedPaginationProps> = ({
  closeMenuProducts,
  visibleMenuProducts
}) => {
  const { t } = useTranslation('feedHome');
  const [parentDimensions, setParentDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height, x, y } = event.nativeEvent.layout;
    setParentDimensions({ width, height, x, y });
  };
  const nav = useNavigation()

  return (
    <YStack w={'100%'} bg="$background" pos={'relative'} zIndex={1}
      onLayout={handleLayout}
    >
      <YStack fd={'row'} width={'100%'} h={34}>
        <Button flex={1} ai="center" jc="center" bg="#181818" fd={'row'}>
          <IconLeaftPhilcoin
            width={9.25}
            height={14}
            style={{ marginRight: -5 }}
          />
          <Text color="$color.white1" fontSize="$3" fontWeight="bold" marginLeft={0}>
            {t('displayCategory1')}
          </Text>
        </Button>

        <Button flex={1}>
          <LinearGradient
            flex={1}
            ai="center"
            jc="center"
            colors={['$primary', '$secondary']}>
            <Text color="$color.white1" fontSize="$3" fontWeight="bold">
              {t('displayCategory2')}
            </Text>
          </LinearGradient>
        </Button>

        <Button flex={1} ai="center" jc="center" bg="#181818" onPress={ () => {
          nav.navigate('feed/suggestions')
        }}>
          <Text color="$color.white1" fontSize="$4" fontWeight="bold">
            {t('displayCategory3')}
          </Text>
        </Button>
      </YStack>
      
      <ModalProducts 
        parentDimensions={parentDimensions}
        visible={visibleMenuProducts} 
        title={t('titleMenuProducts')} 
        onClose={closeMenuProducts}      
      />
    </YStack>
  );
}

export default FeedPagination;
