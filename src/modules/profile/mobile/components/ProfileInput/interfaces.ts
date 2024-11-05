import type { Control, FieldPath, FieldValues } from 'react-hook-form';

import type { InputProps } from '@dls/components/Input/interfaces';

export interface ProfileInputProps<T extends FieldValues> extends InputProps {
  name: FieldPath<T>;
  control: Control<T>;
  isPassword?: boolean;
  title?: string;
  isVisibleCounter?: boolean;
  pattern?(text: string): string;
  RightComponent?: React.ReactNode;
}
