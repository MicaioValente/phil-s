import { useRef, useState } from 'react';
import RNDatePicker from 'react-native-date-picker';

import type {
  DatePickerParams,
  DatePickerResponse,
} from '@dls/components/DatePicker/interfaces';
import { TamaguiDatePicker } from '@dls/components/DatePicker/styles';
import { getCurrentDate } from '@shared/formatting';
import { useEventListener, useTranslation } from '@shared/hooks';

function DatePicker() {
  const { t } = useTranslation('datePicker');

  const promise = useRef<PromiseObject<DatePickerResponse>>();

  const [isVisible, setIsVisible] = useState(false);
  const [initialValue, setInitialValue] = useState<Date>(getCurrentDate());

  useEventListener<DatePickerParams>('datePicker', showDatePicker);

  function showDatePicker({ options, ...promiseObject }: DatePickerParams) {
    promise.current = promiseObject;

    setIsVisible(true);

    if (options.value) setInitialValue(options.value);
  }

  function hideDatePicker() {
    setIsVisible(false);

    setInitialValue(getCurrentDate());
  }

  function onClose(date: Date | null = null) {
    promise.current?.resolve(date);

    hideDatePicker();
  }

  function onConfirm(date: Date) {
    onClose(date);
  }

  return (
    <RNDatePicker
      modal
      mode={'date'}
      open={isVisible}
      date={initialValue}
      timeZoneOffsetInMinutes={0}
      title={t('title')}
      confirmText={t('confirmText')}
      cancelText={t('cancelText')}
      locale={t('locale')}
      onConfirm={onConfirm}
      onCancel={onClose}
    />
  );
}

export default DatePicker;
