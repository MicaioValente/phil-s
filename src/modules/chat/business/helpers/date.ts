import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import 'moment/locale/hi';
import { SectionType } from '@modules/chat/mobile/screens/Chat/interfaces';

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

export function formatMessageDate(date: string, language: string) {
  const locale = getLocale(language);
  moment.locale(locale);

  const now = moment();
  const messageDate = moment(date);

  const isRecent = now.diff(messageDate, 'hours') < 24;

  const timeAgo = messageDate.fromNow();

  const formattedDate = messageDate.format('DD/MM/YYYY');

  return isRecent ? timeAgo : formattedDate;
}

function getLocalizedDateTitle(date: moment.Moment, language: string) {
  const locale = getLocale(language);
  moment.locale(locale);

  const now = moment();
  const today = now.startOf('day');
  const yesterday = moment(today).subtract(1, 'days');

  if (date.isSame(today, 'd')) {
    return moment.duration(0, 'days').humanize(true);
  } else if (date.isSame(yesterday, 'd')) {
    return moment.duration(-1, 'days').humanize(true);
  } else {
    return date.format('DD/MM/YYYY');
  }
}

export function groupMessagesByDate(messages: MessageModel[], language: string) {
  return messages.reduce((sections: SectionType, message) => {
    const messageDate = moment(message.date);
    const dateTitle = getLocalizedDateTitle(messageDate, language);
    const section = sections.find(section => section.title === dateTitle);
    if (section) {
      section.data.push(message);
    } else {
      sections.push({ title: dateTitle, data: [message] });
    }
    return sections;
  }, [] as SectionType);
}
