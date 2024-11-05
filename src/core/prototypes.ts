import isEmpty from 'lodash/isEmpty';
import Translation from '@core/translation';
const t = Translation.get(null, 'datePicker');

declare global {
  interface String {
    sanitize(): string;
  }

  interface Array<T> {
    firstItem(): T;
    lastItem(): T;
    lastIndex(): number;
    secondToLastIndex(): number;
    removeDuplicates(key: keyof T): T[];
  }

  interface Object {
    isEmpty(value: object): boolean;
  }

  interface Date {
    isAtLeastThirteenYearsOld(): boolean;
    fromNow(): string;
  }
}

String.prototype.sanitize = function () {
  return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
};

Array.prototype.firstItem = function () {
  return this[0];
};

Array.prototype.lastItem = function () {
  return this[this.length - 1];
};

Array.prototype.lastIndex = function () {
  return this.length - 1;
};

Array.prototype.secondToLastIndex = function () {
  return this.length - 2;
};

Array.prototype.removeDuplicates = function <T>(key: keyof T): T[] {
  const uniqueItems = new Map();

  this.forEach((item: T) => {
    const value = item[key];
    if (!uniqueItems.has(value)) {
      uniqueItems.set(value, item);
    }
  });

  return Array.from(uniqueItems.values());
};
Object.setPrototypeOf(Object, {
  isEmpty: (value: object) => isEmpty(value),
});

Date.prototype.isAtLeastThirteenYearsOld = function () {
  const today = new Date();
  const minDate = new Date(today.setFullYear(today.getFullYear() - 13));
  return this <= minDate;
};

Date.prototype.fromNow = function (){
  const now = new Date();
  const past = this
  const seconds = Math.floor((now - past) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);


  if (seconds < 60) return `${seconds}${t.second} ${t.ago}`;
  if (minutes < 60) return `${minutes}${t.minute} ${t.ago}`;
  if (hours < 24) return `${hours}${t.hour} ${t.ago}`;
  if (days < 30) return `${days}${t.day} ${t.ago}`;
  if (months < 12) return `${months}${t.month} ${t.ago}`;
  return `${years}${t.year} ${t.ago}`;
}

export default {};
