import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface CountryCodeInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  placeholder: string;
}
