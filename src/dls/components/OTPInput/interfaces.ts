import type { InputProps } from '@dls/components/Input/interfaces';

export interface OTPInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  length: number;
  value: string;
  onChange: (value: string) => void;
}
