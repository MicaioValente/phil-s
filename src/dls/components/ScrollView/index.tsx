import { ScrollView as TamaguiScroll } from 'tamagui';

import type { ScrollViewProps } from '@dls/components/ScrollView/interfaces';

function ScrollView({ ...rest }: ScrollViewProps) {
  return (
    <TamaguiScroll
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  );
}

export default ScrollView;
