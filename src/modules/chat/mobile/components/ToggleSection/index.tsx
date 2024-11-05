import { StackProps } from 'tamagui';

import { XStack, Button, Text, LinearGradient, If } from '@dls/components';
import { useTranslation } from '@shared/hooks';
import type { ToggleSectionProps } from '@modules/chat/mobile/components/ToggleSection/interfaces';

const buttons: Array<'Chats' | 'Calls'> = ['Chats', 'Calls'];

function ToggleSection({ setValue, value, ...props }: ToggleSectionProps) {
  const { t } = useTranslation('inbox');

  const stylesButton = {
    w: 177,
    h: 34,
    br: 4,
    jc: 'center',
    ai: 'center',
  } as StackProps;

  return (
    <XStack
      ai={'center'}
      jc={'center'}
      w={'100%'}
      gap={'$2'}
      justifyContent={'space-evenly'}
      {...props}>
      {buttons.map((button, index) => (
        <If
          condition={value === button}
          key={index}
          elseRender={
            <Button
              bg={'#242424'}
              onPress={() => setValue(button)}
              {...{ ...stylesButton }}>
              <Text col="$text" fos="$5" fow="bold">
                {t(button.toLocaleLowerCase() as 'calls' | 'chats')}
              </Text>
            </Button>
          }>
          <Button
            onPress={() => setValue(button)}
            {...{ ...stylesButton }}
            opacity={0.1}>
            <LinearGradient
              colors={['$secondary', '$primary']}
              w="100%"
              h="100%"
              br="$2"
              jc="center"
              ai="center"
              start={[0, 1]}
              end={[0, 0]}>
              <Text col="$text" fos="$5" fow="bold">
                {t(button.toLocaleLowerCase() as 'calls' | 'chats')}
              </Text>
            </LinearGradient>
          </Button>
        </If>
      ))}
    </XStack>
  );
}

export default ToggleSection;
