import {
  CommonActions,
  StackActions,
  useNavigation as useRNNavigation,
} from '@react-navigation/native';

import Navigation from '@core/navigation';
import type {
  NavigationParams,
  NavigationReturn,
} from '@shared/hooks/useNavigation/interfaces';

export function useNavigation(): NavigationReturn {
  const navigation = useRNNavigation();

  function replace<T, K extends keyof T>(...args: NavigationParams<T, K>) {
    const [name, params] = args;

    Navigation.ref.dispatch(
      StackActions.replace(name as string, params as object),
    );
  }

  function reset<T, K extends keyof T>(...args: NavigationParams<T, K>) {
    const [name, params] = args;

    Navigation.ref.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: name as string, params: params as object }],
      }),
    );
  }

  function getScreenParams<T, K extends keyof T>(name: K): T[K] {
    if (Navigation.ref.getCurrentRoute()?.name === name) {
      return Navigation.ref.getCurrentRoute()?.params as T[K];
    }

    return Navigation.ref.getState().routes.find(route => route.name === name)
      ?.params as T[K];
  }

  return {
    getScreenParams,
    goBack: navigation.goBack,
    navigate: navigation.navigate,
    replace,
    reset,
  };
}
