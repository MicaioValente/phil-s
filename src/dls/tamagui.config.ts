import { config } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';

const appConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    space: {
      ...config.tokens.space,
      it: 0,
      il: 0,
      ib: 0,
      ir: 0,
      tbh: 0,
    },
  },
});

export default appConfig;
export type AppConfig = typeof appConfig;
