import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { NavigatorOptions, TabScreen } from './interfaces';
import { TabBar } from '@dls/components';

const Tab = createBottomTabNavigator();

const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export function tabRooFactory(tabs: TabScreen[], options: NavigatorOptions) {
  const tabProps = {
    ...options,
    screenOptions: tabOptions,
  };

  return () => (
    <Tab.Navigator
      {...tabProps}
      tabBar={props => <TabBar {...{ ...props, tabs }} />}>
      {tabs.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
}
