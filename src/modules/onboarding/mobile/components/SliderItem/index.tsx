import React from 'react';
import { useTranslation } from '@shared/hooks';

import { View, Text, ImageBackground, useWindowDimensions } from 'react-native';
import { YStack, LinearGradientText } from '@dls/components';
import { SliderItemProps } from './interfaces';
import { styles } from './styles';

const SliderItem: React.FC<SliderItemProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation('intro');

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground
        source={item.image}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
      <View>
        <YStack ai="center" py="$4">
          <LinearGradientText fos={30} fow="bold">
            {t(item.titleKey)}
          </LinearGradientText>
        </YStack>
        <YStack f={1} py="$4" px="$4">
          <Text style={styles.description}>{t(item.descriptionKey)}</Text>
        </YStack>
      </View>
    </View>
  );
};

export default SliderItem;
