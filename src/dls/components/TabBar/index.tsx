import { Button, XStack } from '@dls/components';

import type { TabBarProps } from '@dls/components/TabBar/interfaces';

import { showBottomSheet } from '@dls/components/BottomSheet/methods';
import { CreationOptions } from '@modules/feed/mobile/components';

function TabBar({ tabs, navigation, state }: TabBarProps) {
  function handleNavigate(routeName: string) {
    if (routeName === 'feed/plus')
      return () =>
        showBottomSheet({
          isBlur: true,
          component: <CreationOptions />,
        });

    return () => navigation.navigate(routeName);
  }

  return (
    <XStack b={0} w="100%" pos="absolute" pb="$ib" bg="$background">
      <XStack f={1} jc="space-between" h="$tbh" bg="$background">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const screen = tabs.find(screen => screen.name === route.name)!;

          return (
            <Button
              key={route.key}
              f={1}
              ai="center"
              jc="center"
              onPress={handleNavigate(route.name)}>
              {screen.bottomBarOptions.icon({
                color: isFocused ? '$white1' : '$white10',
                isFocused,
                size: 24,
              })}
            </Button>
          );
        })}
      </XStack>
    </XStack>
  );
}

export default TabBar;
