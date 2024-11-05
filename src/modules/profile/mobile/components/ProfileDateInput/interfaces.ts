import type { Control, FieldPath, FieldValues } from 'react-hook-form';

import type { InputProps } from '@dls/components/Input/interfaces';

export interface ProfileDateInputProps<T extends FieldValues>
  extends InputProps {
  name: FieldPath<T>;
  control: Control<T>;
}
