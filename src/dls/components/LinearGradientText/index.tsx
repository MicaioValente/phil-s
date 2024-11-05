import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';

import { LinearGradient, Text } from '@dls/components';
import type { GradientTextProps } from '@dls/components/LinearGradientText/interfaces';

function LinearGradientText({ children, ...rest }: GradientTextProps) {
  return (
    <MaskedView maskElement={<Text {...rest}>{children}</Text>}>
      <LinearGradient
        colors={['$secondary', '$primary']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text opacity={0} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default LinearGradientText;
