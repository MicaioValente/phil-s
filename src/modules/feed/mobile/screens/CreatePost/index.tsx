import React, { useCallback, useEffect, useRef, useState } from 'react';
import { VideoRef } from 'react-native-video';
import { PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'

import {
  Button,
  If,
  Image,
  LinearGradient,
  Spinner,
  Text,
  YStack,
  PhilCamera
} from '@dls/components';

import {
  CheckedIcon,
  PhilEffect,
  PhilMenuStory4,
  PhilMusic,
  PhilStoryUser,
  PhilTextButton,
} from '@modules/feed/mobile/assets';

import { Screen } from '@core/navigation/interfaces';
import { useNavigation, useTranslation } from '@shared/hooks';
import { GalleryList, SimpleHeader } from '@modules/feed/mobile/components';
import { VideoStory } from '@modules/feed/mobile/components/ModalStory/styles';
import { useCreateStory } from '@modules/feed/business/useCases/useCreateStory';

const optionsConfirm = [
  { id: 1, svg: <PhilMusic /> },
  { id: 2, svg: <PhilEffect /> },
  { id: 3, svg: <PhilTextButton /> },
  { id: 4, svg: <PhilMenuStory4 /> },
  { id: 5, svg: <PhilStoryUser /> },
];

function Component() {
  const { t } = useTranslation('feedCreation');
  const nav = useNavigation();
  const [step, setStep] = useState<'SELECT' | 'TAKE_PICTURE' | 'CONFIRM'>(
    'SELECT',
  );
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoIdentifier>();
  const videoRef = useRef<VideoRef>(null);
  const { isLoading, mutateAsync, isError } = useCreateStory();
  const isFocused = useIsFocused();

  const title = step === 'CONFIRM' ? '' : t('story.title');
  const setPhoto = useCallback((item: PhotoIdentifier) => {
    if (item.node.id === 'takePicture') {
      setStep('TAKE_PICTURE');
    } else setSelectedPhoto(item);
  }, []);

  const goBack = () => {
    setSelectedPhoto(undefined);
    if (step != 'SELECT') {
      setStep('SELECT');
    } else nav.goBack();
  };

  const renderStep = () => {
    const isVideo = selectedPhoto?.node.type.includes('video');
    switch (step) {
      case 'SELECT':
        return (
          <YStack f={1} backgroundColor={'#454545'} height={'100%'}>
            <YStack
              fd={'row'}
              my={'$4'}
              px={'$4'}
              ai="center"
              jc={'space-between'}>
              <YStack flexDirection="row" ai={'center'}>
                <Text
                  fontSize={'$6'}
                  color={'$white1'}
                  fontWeight={'bold'}
                  mr={'$2'}>
                  {t('story.subTitle')}
                </Text>
                <AntDesign
                  name="downcircleo"
                  size={17}
                  color={'white'}
                  style={{ marginTop: 2 }}
                />
              </YStack>
              <CheckedIcon />
            </YStack>
            <GalleryList selectedItem={item => setPhoto(item)} />
          </YStack>
        );
      case 'CONFIRM':
        return (
          <YStack f={1} w={'100%'} h={'100%'} px={'$3'}>
            <If
              condition={!isVideo}
              elseRender={
                <VideoStory
                  source={{ uri: selectedPhoto?.node.image.uri }}
                  ref={videoRef}
                  onError={e => console.log('AQUI', e)}
                  playInBackground={false}
                  playWhenInactive={false}
                  paused={false}
                  repeat={true}
                  borderRadius={12}
                  overflow="hidden"
                  w={'100%'}
                  h={'100%'}
                  aspectRatio={'unset'}
                  resizeMode="cover"
                />
              }>
              <Image
                source={{ uri: selectedPhoto?.node.image.uri }}
                f={1}
                overflow="hidden"
                borderRadius={12}
              />
            </If>
          </YStack>
        );
      case 'TAKE_PICTURE':
        return (
          <PhilCamera
            openCamera={true}
            closeCamera={() => setStep('SELECT')}
            getFile={file => console.log('AQUI', file)}
          />
        );
    }
  };

  const next = async (highlights = false) => {
    switch (step) {
      case 'SELECT':
        if (selectedPhoto?.node?.image) setStep('CONFIRM');
        break;
      case 'CONFIRM':
        const isVideo = selectedPhoto?.node.type.includes('video');
        await mutateAsync({
          typeStory: isVideo ? 'VIDEO' : 'IMAGE',
          duration: selectedPhoto?.node.image.playableDuration as number,
          url: selectedPhoto?.node.image.uri as string,
          extension: selectedPhoto?.node.image.extension as string,
          location: '',
          highlights,
          filename: selectedPhoto?.node.image.filename as string,
          height: selectedPhoto?.node.image.height,
          width: selectedPhoto?.node.image.width,
        });
        !isError && reset();
        break;
    }
  };

  const reset = () => {
    setSelectedPhoto(undefined);
    setStep('SELECT');
  };

  useEffect(() => {
    const isVideo = selectedPhoto?.node?.type.includes('video');
    if (step !== 'CONFIRM' && isVideo) {
      videoRef.current?.seek(0);
      videoRef.current?.pause();
    }
  }, [step]);

  useEffect(() => {
    !isFocused && setSelectedPhoto(undefined);
  }, [isFocused]);

  return (
    <YStack
      backgroundColor={'#252525'}
      pt={'$it'}
      fd={'column'}
      width={'100%'}
      height={'100%'}>
      <YStack px={'$4'}>
        <SimpleHeader title={title} goBack={goBack}>
          <If condition={step === 'CONFIRM'}>
            <YStack fd={'row'} ai={'center'} jc={'flex-end'} width={'100%'}>
              {optionsConfirm.map((oc, index) => (
                <Button
                  key={`optionsConfirm${oc.id}`}
                  mr={index == optionsConfirm.length - 1 ? 0 : '$2'}>
                  {oc.svg}
                </Button>
              ))}
            </YStack>
          </If>
        </SimpleHeader>
      </YStack>

      {renderStep()}

      <YStack
        fd={'row'}
        h={100}
        p={'$4'}
        pt={'$1'}
        ai="center"
        jc={step === 'CONFIRM' && !isLoading ? 'space-between' : 'center'}>
        <If
          condition={!isLoading}
          elseRender={<Spinner color={'$primary'} size="large" />}>
          <If
            condition={step === 'CONFIRM'}
            elseRender={
              <Button f={1} maxWidth={'70%'} onPress={() => next()}>
                <LinearGradient
                  colors={['$primary', '$secondary']}
                  width={'100%'}
                  h={42}
                  borderRadius={16}
                  jc={'center'}
                  ai={'center'}>
                  <Text color={'$white1'} fontWeight={'bold'}>
                    {t('story.btnNext')}
                  </Text>
                </LinearGradient>
              </Button>
            }>
            <Button f={1} maxWidth={'48%'} onPress={() => next()}>
              <LinearGradient
                colors={['$primary', '$secondary']}
                width={'100%'}
                h={42}
                borderRadius={16}
                jc={'center'}
                ai={'center'}>
                <Text color={'$white1'} fontWeight={'bold'}>
                  {t('story.btnConfirm.story')}
                </Text>
              </LinearGradient>
            </Button>

            <Button f={1} maxWidth={'48%'} onPress={() => next(true)}>
              <LinearGradient
                colors={['$primary', '$secondary']}
                width={'100%'}
                h={42}
                borderRadius={16}
                jc={'center'}
                ai={'center'}>
                <Text color={'$white1'} fontWeight={'bold'}>
                  {t('story.btnConfirm.highlights')}
                </Text>
              </LinearGradient>
            </Button>
          </If>
        </If>
      </YStack>
    </YStack>
  );
}

const CreatePost: Screen = {
  component: Component,
  name: 'feed/create-post',
  isPrivate: true,
};

export default CreatePost;
