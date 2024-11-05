import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useTranslation } from '@shared/hooks'
import { Button, If, Image, LinearGradient, Spinner, Text, YStack, PhilCamera } from '@dls/components'
import {  CheckedIcon, PhilEffect, PhilMenuStory4, PhilMusic, PhilStoryUser, PhilTextButton } from '@modules/feed/mobile/assets'
import { GalleryList, SimpleHeader } from '@modules/feed/mobile/components'
import { VideoStory } from '@modules/feed/mobile/components/ModalStory/styles'
import { useCreateStory } from '@modules/feed/business/useCases/useCreateStory'
import { PhotoIdentifier } from '@core/cameraRoll/interfaces';
import { PhotoFile, VideoFile } from '@dls/components/Camera/interfaces';
import useIsFocused from '@shared/hooks/useIsFocused';
import { VideoRef } from '@dls/components/Video/interfaces';

const optionsConfirm = [{ id: 1, svg: <PhilMusic />},{ id: 2, svg: <PhilEffect />},{ id: 3, svg: <PhilTextButton />},{ id: 4, svg: <PhilMenuStory4 />},{ id: 5, svg: <PhilStoryUser />}]

const CreateStory = () => {
    const { t } = useTranslation('feedCreation')
    const nav = useNavigation()
    const [step, setStep] = useState<'SELECT' | 'TAKE_PICTURE' | 'CONFIRM'>('SELECT')
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoIdentifier>()
    const videoRef = useRef<VideoRef>(null);
    const { isLoading, mutateAsync, isError } = useCreateStory()
    const isFocused = useIsFocused()

    const title = step === 'CONFIRM' ? '' : t('story.title')
    const setPhoto = useCallback( (item: PhotoIdentifier) => {
        if(item.node.id === 'takePicture'){
            setStep('TAKE_PICTURE')
        } else setSelectedPhoto(item)
    }, [])

    const goBack = () => {
        setSelectedPhoto(undefined)
        if(step != 'SELECT' ){
            setStep('SELECT')
        } else nav.goBack()
    }

    const adapterFileCamera = (file: VideoFile | PhotoFile  ): PhotoIdentifier => {
        const splitPath = file.path.split('/')
        const ext = splitPath[splitPath.length -1]?.split('.')?.[1] 
        const filename = splitPath[splitPath.length -1]?.split('.')?.[0] 
        const newFormat = { node: {
            id: 'camera',
            type: ext === 'mov' ? 'video' : 'image',
            image: {
                filename,
                filepath: file.path,
                extension: ext,
                uri: file.path,
                height: file.height,
                width: file.width,
                fileSize: null,
                playableDuration: file.duration as number,
                orientation: null
            },
        } }
        
        return  newFormat as PhotoIdentifier
    }

    const renderStep = () => {
        const isVideo = selectedPhoto?.node.type.includes('video')
        switch(step){
            case 'SELECT':
                return <YStack f={1} backgroundColor={'#454545'} height={'100%'}>
                            <YStack fd={'row'} my={'$4'} px={"$4"}  ai='center' jc={'space-between'}>
                                <YStack flexDirection='row' ai={'center'}>
                                    <Text fontSize={'$6'} color={'$white1'} fontWeight={'bold'} mr={'$2'}>{t('story.subTitle')}</Text>
                                    <AntDesign name='downcircleo'  size={17} color={'white'} style={{ marginTop: 2}} />
                                </YStack>
                                <CheckedIcon />
                            </YStack>
                            <GalleryList selectedItem={(item) => setPhoto(item)} />
                        </YStack>
            case 'CONFIRM':
                return <YStack f={1} w={'100%'} h={'100%'} px={"$3"}>
                            <If
                                condition={!isVideo}
                                elseRender={
                                    <VideoStory
                                        source={{ uri: selectedPhoto?.node.image.uri }}
                                        ref={videoRef}
                                        onError={ e => console.log('AQUI', e)}
                                        playInBackground={false}
                                        playWhenInactive={false}
                                        paused={false}
                                        repeat={true}
                                        borderRadius={12}
                                        overflow='hidden'
                                        w={'100%'}
                                        h={'100%'}
                                        aspectRatio={'unset'}
                                        resizeMode='cover'
                                    />
                                }
                            >
                                <Image source={{ uri: selectedPhoto?.node.image.uri }}  f={1} overflow='hidden' borderRadius={12}/>
                            </If>
                        </YStack>
            case 'TAKE_PICTURE':
                return <PhilCamera 
                        openCamera={true}
                        closeCamera={ () => setStep('SELECT')}
                        getFile={ (file) => {setPhoto(adapterFileCamera(file)); setStep('CONFIRM')}}
                    />
        }
    }

    const next = async (highlights = false) => {
        switch(step) {
            case "SELECT": 
                if(selectedPhoto?.node?.image) setStep('CONFIRM')
            break;
            case "CONFIRM":
                const isVideo = selectedPhoto?.node.type.includes('video')
                await mutateAsync({
                    typeStory: isVideo ? 'VIDEO' : 'IMAGE',
                    duration: selectedPhoto?.node.image.playableDuration as number,
                    url: selectedPhoto?.node.image.uri as string,
                    extension: (selectedPhoto?.node.image.extension || selectedPhoto?.node.type) as string,
                    location: '',
                    highlights,
                    filename: selectedPhoto?.node.image.filename as string,
                    height: selectedPhoto?.node.image.height,
                    width: selectedPhoto?.node.image.width,
                })
                !isError && reset()
            break;
        }
    
    }
    
    const reset = () => {
        setSelectedPhoto(undefined)
        setStep('SELECT')
    }

    useEffect( () => {
        const isVideo = selectedPhoto?.node?.type.includes('video')
        if(step !== 'CONFIRM' && isVideo){
            videoRef.current?.seek(0)
            videoRef.current?.pause()
        } 
    }, [step])

    useEffect( () => {
        !isFocused && setSelectedPhoto(undefined)
    }, [isFocused])

    return (
        <YStack backgroundColor={"#252525"} pt={"$it"} fd={'column'} width={'100%'} height={'100%'}>
            <YStack px={"$4"}>
                <SimpleHeader title={title} goBack={goBack}>
                    <If
                        condition={step === 'CONFIRM'}
                    >
                        <YStack fd={'row'} ai={'center'} jc={'flex-end'} width={'100%'}>
                            {optionsConfirm.map( (oc, index) => <Button key={`optionsConfirm${oc.id}`} mr={index == optionsConfirm.length -1 ? 0 : '$2'}>{oc.svg}</Button>)}
                        </YStack>
                    </If>
                </SimpleHeader>
            </YStack>
            
            {renderStep()}
            
            <YStack  fd={'row'} h={100} p={'$4'} pt={'$1'} ai='center' jc={step === 'CONFIRM' && !isLoading ? 'space-between' : 'center'}>
                <If
                    condition={!isLoading}
                    elseRender={<Spinner color={'$primary'} size='large'/> }
                >

                    <If
                        condition={step === 'CONFIRM'}
                        elseRender={<Button f={1} maxWidth={'70%'} onPress={() => next()}>
                                        <LinearGradient colors={['$primary', '$secondary']} width={'100%'} h={42} borderRadius={16} jc={'center'} ai={'center'}>
                                            <Text color={'$white1'} fontWeight={'bold'}>{t('story.btnNext')}</Text>
                                        </LinearGradient>
                                    </Button>
                                }
                    >
                        <Button f={1} maxWidth={'48%'} onPress={() => next()}>
                            <LinearGradient colors={['$primary', '$secondary']} width={'100%'} h={42} borderRadius={16} jc={'center'} ai={'center'}>
                                <Text color={'$white1'} fontWeight={'bold'}>{t('story.btnConfirm.story')}</Text>
                            </LinearGradient>
                        </Button>

                        <Button f={1} maxWidth={'48%'} onPress={() => next(true)}>
                            <LinearGradient colors={['$primary', '$secondary']} width={'100%'} h={42} borderRadius={16} jc={'center'} ai={'center'}>
                                <Text color={'$white1'} fontWeight={'bold'}>{t('story.btnConfirm.highlights')}</Text>
                            </LinearGradient>
                        </Button>
                    </If>
                </If>
            </YStack>
        </YStack>
    )
}


export default CreateStory