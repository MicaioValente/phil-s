import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import DeviceInfo from '@core/deviceInfo';
import type { NavigatorOptions, Screen } from '@core/navigation/interfaces';
const Stack = createNativeStackNavigator();

const stackOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animationTypeForReplace: 'push',
  animation: DeviceInfo.isIOS ? 'default' : 'none',
};

export function stackRootFactory(stacks: Screen[], options: NavigatorOptions) {
  const stackProps = {
    ...options,
    screenOptions: stackOptions,
  };

  return () => (
    <Stack.Navigator {...stackProps}>
      {stacks.map(screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
