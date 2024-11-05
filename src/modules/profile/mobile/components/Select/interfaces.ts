import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { InputProps } from 'tamagui';

export interface SelectProps<T extends FieldValues> extends InputProps {
  placeholder: string;
  options: string[];
  control: Control<T>;
  name: FieldPath<T>;
}
