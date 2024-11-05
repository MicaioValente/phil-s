export interface DatePickerOptions {
  value: Date;
}

export interface DatePickerParams extends PromiseObject<DatePickerResponse> {
  options: DatePickerOptions;
}

export type DatePickerResponse = Date | null;
