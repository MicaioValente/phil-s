import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';


import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import { If } from '@dls/components';
import type { LoadsFontsProps } from '@dls/providers/FontsProvider/interfaces';
import { useDidUpdateEffect } from '@shared/hooks';

preventAutoHideAsync();

function FontsProvider({ children }: LoadsFontsProps) {
  const [isLoaded] = useFonts({
    ...AntDesign.font,
    ...Entypo.font,
    ...Feather.font,
    ...FontAwesome.font,
    ...FontAwesome6.font,
    ...Foundation.font,
    ...Ionicons.font,
    ...MaterialCommunityIcons.font,
    ...MaterialIcons.font,
    ...Octicons.font,
    ...SimpleLineIcons.font,
  });

  useDidUpdateEffect(() => {
    hideAsync();
    
  }, [isLoaded]);

  return <If condition={isLoaded}>{children}</If>;
}

export default FontsProvider;
