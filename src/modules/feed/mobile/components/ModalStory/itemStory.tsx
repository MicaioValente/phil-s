import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { VideoRef } from 'react-native-video';

import { YStack, If, Image, Text, Button, XStack } from '@dls/components';
import { SendInput } from '@modules/feed/mobile/components';
import PaginatorStory from '@modules/feed/mobile/components/PaginatorStory/index';
import {
  CloseIcon,
  ContainerHeaderStory,
  DotIcon,
  StoryImage,
  Styles,
  AtIcon,
  GiftIcon,
  VideoStory,
} from '@modules/feed/mobile/components/ModalStory/styles';
import { StoryData } from '@modules/feed/business/stores/useStories/interfaces';
import { TYPE_CHANGE_STORY_MODAL } from '@modules/feed/mobile/components/ModalStory/interfaces';
import { SmileEmojiIcon } from '@modules/feed/mobile/assets';
import { useTranslation } from '@shared/hooks';

const { width } = Dimensions.get('window');
interface ItemStoryProps {
  item: StoryData;
  changePersonStory: (type: TYPE_CHANGE_STORY_MODAL) => void;
  close: () => void;
}

const ItemStory = ({
  changePersonStory,
  item: { story, image, person, personId },
  close,
}: ItemStoryProps) => {

  const {t} = useTranslation('feedPost')
  const [currentIndexStory, setCurrentIndexStory] = useState<number>(0);

  const { type, url, location, data_created } = useMemo(() => {
    return {
      type: story[currentIndexStory]?.type || '',
      url: story[currentIndexStory]?.url || '',
      location: story[currentIndexStory]?.location || '',
      data_created: story[currentIndexStory]?.data_created || '',
    };
  }, [currentIndexStory]);

  const videoRef = useRef<VideoRef>(null);

  const changeStoryToView = useCallback(
    (index: number, type: TYPE_CHANGE_STORY_MODAL) => {
      if (index >= story.length || index < 0) return changePersonStory(type);
      index = index > 0 ? index : 0;
      setCurrentIndexStory(index);
    },
    [],
  );

  useEffect(() => {
    if (!videoRef?.current) return;
    if (story[currentIndexStory]?.type === 'VIDEO' && videoRef?.current)
      videoRef.current?.resume();
    else {
      videoRef.current?.seek(0);
      videoRef.current?.pause();
    }
  }, [currentIndexStory, personId]);

  return (
    <SafeAreaView>
      <YStack
        fd={'column'}
        width={width}
        height={'100%'}
        backgroundColor="$background"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={'$2'}
        zIndex={0}>
        <ContainerHeaderStory>
          <PaginatorStory
            data={story}
            currentIndex={currentIndexStory}
            change={index => changeStoryToView(index, 'PROX')}
          />
          <YStack
            fd="row"
            width="100%"
            mt="$3"
            p="$1"
            alignItems="center"
            justifyContent="space-between">
            <YStack fd="row" alignItems="center">
              <Image src={image} w={35} h={35} br={60} />
              <YStack fd="column" ml="$2">
                <Text fontSize="$3" color="$white1" fontWeight="bold">
                  {person}
                </Text>
                <Text fontSize="$1" color="$white1">
                  {new Date(data_created).fromNow()} - {location}
                </Text>
              </YStack>
            </YStack>

            <YStack fd="row">
              <Button mr="$3">
                <DotIcon name={'dots-three-horizontal'} size={25} />
              </Button>
              <Button onPress={close}>
                <CloseIcon name={'close'} size={25} />
              </Button>
            </YStack>
          </YStack>
        </ContainerHeaderStory>

        <YStack f={1} w={'100%'} justifyContent="center">
          <If
            condition={type === 'IMAGE'}
            elseRender={
              <VideoStory
                source={{ uri: url }}
                ref={videoRef}
                onError={e => console.log('AQUI', e)}
                playInBackground={false}
                playWhenInactive={false}
                paused={true}
              />
            }>
            <StoryImage source={{ uri: url }} />
          </If>
        </YStack>
        
        <XStack w={'100%'} h={90} pos={'absolute'} bottom={0} bg={'$background'}>
        <SendInput>
          <SendInput.Avatar/>

          <SendInput.ContainerInput>
            <SendInput.Input  placeholder={t("inputPlaceholder")} />
            <SendInput.ContainerIcons>
              <Button onPress={() => {}}>
                <AtIcon name="at-sign" size={18} />
              </Button>
              <Button onPress={() => {}}>
                <GiftIcon name="gift" size={18} />
              </Button>
              <Button onPress={() => {}}>
                <SmileEmojiIcon width={18} height={18} />
              </Button>
            </SendInput.ContainerIcons>
          </SendInput.ContainerInput>
          <SendInput.SendButton />
        </SendInput>
        </XStack>
     

        <YStack fd="row" position="absolute" width={'100%'} zIndex={1}>
          <TouchableOpacity
            style={Styles.btnPrevNext}
            onPress={() => changeStoryToView(currentIndexStory - 1, 'PREV')}
          />
          <TouchableOpacity
            style={Styles.btnPrevNext}
            onPress={() => changeStoryToView(currentIndexStory + 1, 'PROX')}
          />
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default ItemStory;
