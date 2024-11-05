import type { Screen } from '@core/navigation/interfaces';
import { LinearGradient, XStack } from '@dls/components';
import { PlusIcon } from '@modules/feed/mobile/screens/Plus/styles';

function Component() {
  return null;
}

const Plus: Screen = {
  name: 'feed/plus',
  component: Component,
  isPrivate: true,
  bottomBarOptions: {
    index: 2,
    label: 'Plus',
    icon: ({ size }) => (
      <XStack w="$3" h="$3" ai="center" jc="center">
        <LinearGradient
          colors={['$secondary', '$primary']}
          start={[0, 1]}
          end={[0, 0]}
          w="100%"
          h="100%"
          jc="center"
          ai="center"
          br="$4">
          <PlusIcon name="plus" {...{ size }} />
        </LinearGradient>
      </XStack>
    ),
  },
};

export default Plus;
