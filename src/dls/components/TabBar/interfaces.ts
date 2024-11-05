import type { TabScreen } from '@core/navigation/interfaces';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export interface TabBarProps extends BottomTabBarProps {
  tabs: TabScreen[];
}
