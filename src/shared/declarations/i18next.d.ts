// import the original type declarations
import 'i18next';

import { resources } from '@core/translation';
import signEn from '@modules/account/screens/signin/en.json';
import signInEn from '@modules/account/screens/signin/en.json';
import signUpEn from '@modules/account/screens/signin/en.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom resources type
    resources: typeof resources.en;
    // other
  }
}
