import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { If, YStack, Button, Image, Video, Camera } from '@dls/components';
import { AntDesignIcons, EntypoIcons, IoniconsCamera } from '@dls/components/PhilCamera/styles';
import { useCameraDevice, useCameraPermisssion, useMicrophonePermission } from '@dls/components/Camera/hooks';
import type { PhilCameraProps } from '@dls/components/PhilCamera/interfaces';
import type { CameraType, PhotoFile, VideoFile } from '@dls/components/Camera/interfaces';
import DeviceInfo from '@core/deviceInfo';
import useIsFocused from '@shared/hooks/useIsFocused';

function PhilCamera({ 
  closeCamera,
  getFile,
  openCamera
}: PhilCameraProps) {
  const { hasPermission, requestPermission } = useCameraPermisssion()
  const { hasPermission: hasMicrophonePermission, requestPermission: requestMicrophonePermission } = useMicrophonePermission()

  const cameraRef = useRef<CameraType>(null)
  const [flash, setFlash] = useState(false)
  const [front, setFront] = useState(false)
  const [startRecording, setStartRecording] = useState(false)
  const [file, setGetFile] = useState<PhotoFile | VideoFile>()
  const device = useCameraDevice(front ? 'front' : 'back')
  const [typeTakePicture, setTypeTakePicture] = useState(true)
  const isFocused = useIsFocused()
  const preview = useMemo( () => !!file?.path, [file])
  const changeFlash = () => setFlash(!flash)
  const changeTypeCamera = () => setTypeTakePicture(!typeTakePicture)
  const changeFront = () => setFront(!front)

  const takePhoto = async () => {
    if(!cameraRef.current) return
    const photo = await cameraRef?.current.takePhoto({ flash: flash ? 'on' : 'off' })
    setFile(photo)
  }

  const confirmFile = () => getFile(file as PhotoFile)

  const pressClose = () => {
    if(!typeTakePicture && startRecording) cameraRef.current?.cancelRecording()
      closeCamera()
  }

  const recordVideo = () => {
    if(startRecording) return
    setStartRecording(true)
    cameraRef?.current?.startRecording({
      flash: flash ? 'on' : 'off',
      onRecordingError: (e) => console.log('ERROR START', e),
      onRecordingFinished: (video) => {
        setFile(video)
      },
    })
  }

  const stopVideo = async () => {
    setStartRecording(false)
    await cameraRef?.current?.stopRecording().catch( e => console.log('AQUI ERROR', e))
  }

  const setFile = (file?: PhotoFile | VideoFile) => setGetFile(!!file ? { ...file, path: DeviceInfo.isAndroid ? `file://${file.path}` : file.path} : undefined)
  
  useEffect( () => {
    if(!hasPermission) requestPermission()
    if(!hasMicrophonePermission) requestMicrophonePermission()
  }, [isFocused])

  return (
    <If 
      condition={hasPermission && isFocused && device != null}
      elseRender={null}
    >
      <Modal visible={openCamera} statusBarTranslucent>
        <YStack f={1} pt={'$it'} w={'100%'} h='100%' minHeight={'100%'} backgroundColor={'$background'}>

          <YStack position='absolute' top={'$it'} zIndex={2} p={'$4'} w={'100%'} fd={'row'} jc={'space-between'} ai={'center'} elevation={5}>
            <Button onPress={pressClose}>
              <AntDesignIcons name={'close'} size={35} color={'white'} />
            </Button>

            <If condition={!preview}>
              <Button onPress={changeFlash}>
                <IoniconsCamera name={flash ? 'flash' : 'flash-off'} size={35} />
              </Button>
            </If>
          </YStack>

          <If
            condition={preview}
            elseRender={
              <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device as any}
                onError={(e) => console.log('Error', e)}
                photo={typeTakePicture}
                video={!typeTakePicture}
                audio={!typeTakePicture}
                isActive={true} 
              />
            }
          >
            <If
              condition={typeTakePicture}
              elseRender={
                <Video 
                  source={{ uri: file?.path }}
                  style={{ flex: 1, width:'100%', height:'100%'}}
                />
              }
            >
                <Image source={{ uri: file?.path }} f={1} w={'100%'} h={'100%'}/>
            </If>
          </If>
          
          <YStack position='absolute' bottom={0} zIndex={2} p={'$6'} w={'100%'} fd={'row'} jc={'space-between'} ai={'center'} elevation={5}>     
            <If  condition={!preview}>
              <Button onPress={changeFront}>
                <IoniconsCamera name={front ? 'camera-reverse-outline' : 'camera-reverse'} size={35}  />
              </Button>
              
              <If
                condition={!typeTakePicture}
                elseRender={ <Button onPress={takePhoto}><EntypoIcons name='camera' size={50}  color={'$primary'}/></Button>}
              >
                <If
                  condition={startRecording}
                  elseRender={<Button onPress={recordVideo}><IoniconsCamera name='play-circle' size={50} color={'$primary'} /></Button>}
                >
                  <Button onPress={stopVideo}><IoniconsCamera name='stop-circle' size={50} color={'$primary'} /></Button>
                </If>
              </If>

              <Button onPress={changeTypeCamera}>
                <If
                  elseRender={<EntypoIcons name='camera' size={35} />}
                  condition={typeTakePicture}
                >
                  <EntypoIcons name='video-camera' size={35} />       
                </If>
                    
              </Button>      
            </If>      

            <If condition={preview}>
              <Button onPress={() => {setFile(undefined); setStartRecording(false)}}>
                <AntDesignIcons name={'closecircle'} size={40}  color={'red'} />
              </Button>

              <Button onPress={confirmFile}>
                <AntDesignIcons name={'checkcircle'} size={40} color={'green'} />
              </Button>
            </If>
          </YStack>
        </YStack>
      </Modal>
    </If>
  );
}

export default PhilCamera;
