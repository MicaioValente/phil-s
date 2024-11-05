import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import 'moment/locale/hi';
import i18n from '@core/translation';

const language = i18n.language

function getLocale(language: string) {
  switch (language) {
    case 'pt':
      return 'pt-br';
    case 'es':
      return 'es';
    case 'hi':
      return 'hi';
    default:
      return 'en';
  }
}

export function formatDatePost(date: string) {
  const locale = getLocale(language);
  moment.locale(locale);

  const now = moment();
  const messageDate = moment(date);

  const isRecent = now.diff(messageDate, 'hours') < 24;

  const timeAgo = messageDate.fromNow();

  const formattedDate = messageDate.format('DD/MM/YYYY');

  return isRecent ? timeAgo : formattedDate;
}

