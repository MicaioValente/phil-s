import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { If, XStack, LinearGradient } from '@dls/components';

import { styles } from './styles';
import { SelectionCardProps } from './interfaces';

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  onPress,
  selected,
}) => {
  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      <If
        condition={selected}
        elseRender={
          <XStack f={1} jc={'center'} ai={'center'}>
            <Text style={styles.text}>{title}</Text>
          </XStack>
        }>
        <LinearGradient
          colors={['$secondary', '$primary']}
          flex={1}
          jc="center"
          ai="center"
          br="$4"
          start={[0, 1]}
          end={[0, 0]}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </If>
    </TouchableOpacity>
  );
};

export default SelectionCard;
