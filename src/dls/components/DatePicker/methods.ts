import EventEmitter from '@core/eventEmitter';
import type { DatePickerOptions } from '@dls/components/DatePicker/interfaces';

export function showDatePicker(
  options: DatePickerOptions,
): Promise<Date | null> {
  return new Promise((resolve, reject) =>
    EventEmitter.emit('datePicker', { options, resolve, reject }),
  );
}
