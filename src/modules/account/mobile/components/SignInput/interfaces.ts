import type { Control, FieldPath, FieldValues } from 'react-hook-form';

import type { InputProps } from '@dls/components/Input/interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface SignInputProps<T extends FieldValues> extends InputProps {
  name: FieldPath<T>;
  control: Control<T>;
  isPassword?: boolean;
  isValidated?: boolean;
  setIsValidated?: Dispatch<SetStateAction<boolean>>;
  shouldShowCheck?: boolean;
  rightComponent?: React.ReactNode;
  pattern?(text: string): string;
}
