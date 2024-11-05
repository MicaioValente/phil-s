import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import DlsTranslations from '@dls/translations';

import AccountTranslation from '@modules/account/business/translations';
import OnboardingTranslation from '@modules/onboarding/business/translations';
import FeedTranslation from '@modules/feed/business/translations';
import ChatTranslation from '@modules/chat/business/translations';
import ProfileTranslation from '@modules/profile/business/translations';

export const resources = {
  en: {
    ...DlsTranslations.en,
    ...OnboardingTranslation.en,
    ...AccountTranslation.en,    
    ...FeedTranslation.en,
    ...ChatTranslation.en,
    ...ProfileTranslation.en,
  },
  pt: {
    ...OnboardingTranslation.pt,
    ...AccountTranslation.pt,    
    ...FeedTranslation.pt,
    ...ChatTranslation.pt,
    ...ProfileTranslation.pt,
  },
  es: {
    ...OnboardingTranslation.es,
    ...AccountTranslation.es,    
    ...FeedTranslation.es,
    ...ChatTranslation.es,
    ...ProfileTranslation.es,
  },
  hi: {
    ...OnboardingTranslation.hi,
    ...AccountTranslation.hi,    
    ...FeedTranslation.hi,
    ...ChatTranslation.hi,
    ...ProfileTranslation.hi,
  },
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    interpolation: {
      escapeValue: false,
    },
    // lng: 'en',
  });

const Translation = {
  get: i18n.getFixedT,
  language: i18n.language,
};

export default Translation;
