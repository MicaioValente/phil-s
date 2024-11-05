import { StatusBar, type StatusBarProps, UIManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createTamagui, createTokens, TamaguiProvider } from '@tamagui/core';

import DeviceInfo from '@core/deviceInfo';
import type { ThemeProviderProps } from '@dls/providers/ThemeProvider/interfaces';
import FontsProvider from '@dls/providers/FontsProvider';
import { withSafeAreaProvider } from '@dls/providers/ThemeProvider/hocs';
import appConfig from '@dls/tamagui.config';
import { colors } from '@dls/tokens/colors';

if (DeviceInfo.isAndroid)
  if (UIManager.setLayoutAnimationEnabledExperimental)
    UIManager.setLayoutAnimationEnabledExperimental(true);

function ThemeProvider({ children }: ThemeProviderProps) {
  const insets = useSafeAreaInsets();

  const statusBarProps: StatusBarProps = {
    animated: true,
    translucent: true,
    barStyle: 'light-content',
    backgroundColor: 'transparent',
  };

  const tokens = createTokens({
    ...appConfig.tokens,
    color: {
      ...appConfig.tokens.color,
      ...colors,
    },
    space: {
      ...appConfig.tokens.space,
      it: insets.top,
      il: insets.left,
      ib: insets.bottom,
      ir: insets.right,
      tbh: 56,
    },
  });

  const config = createTamagui({
    ...appConfig,
    themes: {
      ...appConfig.themes,
      light: {
        ...appConfig.themes.light,
        ...colors,
      },
      dark: {
        ...appConfig.themes.dark,
        ...colors,
      },
    },
    tokens,
  });

  return (
    <TamaguiProvider {...{ config }}>
      <GestureHandlerRootView>
        <StatusBar {...statusBarProps} />
        <FontsProvider>{children}</FontsProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}

export default withSafeAreaProvider(ThemeProvider);
