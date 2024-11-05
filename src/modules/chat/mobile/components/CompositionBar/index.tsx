import { useCallback, useState } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { XStack, Button, If, Input } from '@dls/components';
import { useTranslation } from '@shared/hooks';
import {
  CameraIcon,
  MicrophoneIcon,
  styles,
} from '@modules/chat/mobile/components/CompositionBar/styles';
import { showToast } from '@dls/stores';

import EmojiIcon from '@modules/chat/mobile/assets/images/emoji.svg';
import CloseIcon from '@modules/chat/mobile/assets/images/close.svg';
import PlusIcon from '@modules/chat/mobile/assets/images/plus.svg';

import CompositionActions from '@modules/chat/mobile/components/CompositionActions';

function CompositionBar() {
  const { t } = useTranslation('chat');
  const insets = useSafeAreaInsets();

  const [isOpenTools, setIsOpenTools] = useState(false);

  const height = useSharedValue(66);
  const opacity = useSharedValue(0);

  const pressPlus = () => {
    showToast({ message: 'Pressionou em plus', title: 'Plus' });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 300,
        easing: Easing.ease,
      }),
    };
  });

  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 200,
        easing: Easing.ease,
      }),
    };
  });

  const toggleTools = useCallback(() => {
    const newState = !isOpenTools;
    height.value = newState ? 152 : 66;
    opacity.value = newState ? 1 : 0;

    setIsOpenTools(newState);
  }, [height, opacity, isOpenTools]);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        { paddingBottom: insets.bottom },
      ]}>
      <XStack ai={'center'} py={'$2'}>
        <If
          condition={isOpenTools}
          elseRender={
            <Button onPress={toggleTools} mr={'$2'}>
              <PlusIcon />
            </Button>
          }>
          <Button onPress={toggleTools}>
            <CloseIcon />
          </Button>
        </If>

        <XStack
          backgroundColor={'#666666'}
          borderRadius={'$2'}
          ai={'center'}
          height={46}
          width={'70%'}
          px={'$2'}
          jc={'center'}>
          <Input
            placeholder={t('message')}
            value={''}
            onChangeText={() => {}}
            placeholderTextColor={'$placeholder'}
            ml={'$2'}
            w={'80%'}
            h={'100%'}
            onSubmitEditing={() => {}}
          />
          <EmojiIcon />
        </XStack>

        <XStack gap={'$2'} ml={'$2'}>
          <Button onPress={pressPlus} padding={'$1.5'} borderRadius={'$7'}>
            <CameraIcon name="camera-outline" size={22} />
          </Button>
          <Button onPress={pressPlus} padding={'$1.5'} borderRadius={'$7'}>
            <MicrophoneIcon name="microphone" size={22} />
          </Button>
        </XStack>
      </XStack>

      <Animated.View style={[animatedOpacity]}>
        <If condition={isOpenTools}>
          <CompositionActions
            onPress={action => showToast({ message: action, title: 'Action' })}
          />
        </If>
      </Animated.View>
    </Animated.View>
  );
}

export default CompositionBar;
