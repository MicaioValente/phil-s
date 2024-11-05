import i18n from '@core/translation';
import { TFunction } from 'i18next';

const language = i18n.language;

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat(language).format(number);
};

