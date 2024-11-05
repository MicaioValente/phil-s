import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useDidUpdateEffect(
  callback: EffectCallback,
  dependencies: DependencyList,
) {
  const didMount = useRef(false);

  useEffect(() => {
    let cleanUp: ReturnType<EffectCallback>;

    didMount.current ? (cleanUp = callback()) : (didMount.current = true);

    return () => cleanUp?.();
  }, dependencies);
}
