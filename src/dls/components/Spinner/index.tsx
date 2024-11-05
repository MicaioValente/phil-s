import { Spinner as TamaguiSpinner } from 'tamagui';

import type { SpinnerProps } from '@dls/components/Spinner/interfaces';

function Spinner({ ...rest }: SpinnerProps) {
  return <TamaguiSpinner {...rest} />;
}

export default Spinner;
