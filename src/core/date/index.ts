import type { DateProps } from '@core/date/interface';
import moment from 'moment';
moment.locale();

const fromNow = (date = '') => {
  return moment(date).fromNow();
};

const isAtLeastThirteenYearsOld = (dateOfBirth: Date) => {
  const minDate = moment().subtract(13, 'years');
  return moment(dateOfBirth).isSameOrBefore(minDate, 'day');
};

const Date: DateProps = {
  fromNow,
  isAtLeastThirteenYearsOld,
};

export default Date;
