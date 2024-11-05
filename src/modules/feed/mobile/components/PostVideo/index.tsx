import { useEffect, useRef, useState } from 'react';
import Video, { OnProgressData, VideoRef } from 'react-native-video';
import { Button, If, Text, XStack } from '@dls/components';
import { PostVideoProps } from '@modules/feed/mobile/components/PostVideo/interfaces';
import {
  PlayIcon,
  BlurPlay,
  BlurContainer,
} from '@modules/feed/mobile/components/PostVideo/styles';
import { useVideoLayout } from '@modules/feed/mobile/components/PostVideo/hooks';
import { formatDuration } from '@modules/feed/business/helpers';
import { useTranslation } from '@shared/hooks';

export function PostVideo({ data }: PostVideoProps) {
  const { style } = useVideoLayout();
  const { t } = useTranslation('feedHome');

  const videoRef = useRef<VideoRef>(null);

  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);

  const display = isPaused ? 'flex' : 'none';

  const renderDuration = (
    <XStack fullscreen>
      <BlurContainer
        intensity={40}
        tint="prominent">
        <Text fos={'$2'} fow={'bold'} col={'$text'}>
          {formatDuration(duration ?? 0, 'durationVideo', t)}
        </Text>
      </BlurContainer>
    </XStack>
  );

  const handleChange = () => {
    if (isPaused) videoRef.current?.resume();
    else videoRef.current?.pause();

    setIsPaused(!isPaused);
  };

  const onProgress = (event: OnProgressData) => {
    setDuration(event.currentTime);
  };

  useEffect(() => {
    videoRef.current?.pause();
  }, []);

  return (
    <XStack
      w={style.width}
      h={style.height}
      zIndex={1}
      ai={'center'}
      jc={'center'}
      bg={'$black1'}>
      <Button
        onPress={handleChange}
        w={48}
        h={48}
        br={'$2'}
        zIndex={2}
        pos={'absolute'}>
        <BlurPlay
          intensity={40}
          tint="regular"
          experimentalBlurMethod="dimezisBlurView"
          style={[{ display }]}>
          <If condition={isPaused}>
            <PlayIcon name="play" size={18} />
          </If>
        </BlurPlay>
      </Button>

      {renderDuration}

      <Video
        source={{ uri: data[0].url }}
        ref={videoRef}
        resizeMode="cover"
        repeat
        paused={isPaused}
        onProgress={onProgress}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
        }}
      />
    </XStack>
  );
}

export default PostVideo;
