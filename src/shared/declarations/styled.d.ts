import { AppConfig } from '@dls/tamagui.config';

declare module 'tamagui' {
  interface Insets {
    it: number;
    il: number;
    ir: number;
    ib: number;
  }

  interface TamaguiCustomConfig extends AppConfig, Insets {
    it: number;
    il: number;
    ir: number;
    ib: number;
  }
}
