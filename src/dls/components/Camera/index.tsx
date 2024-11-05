import { Camera as CameraVision } from 'react-native-vision-camera';
import { CameraProps } from '@src/dls/components/Camera/interfaces';
import { forwardRef, Ref, useEffect } from 'react';
import { useCameraPermisssion, useMicrophonePermission } from '@src/dls/components/Camera/hooks';
import { If } from '@src/dls/components';
import { StyleSheet } from 'react-native';
import useIsFocused from '@shared/hooks/useIsFocused';

function Camera({ device, audio, ...rest  }: CameraProps, ref: Ref<CameraVision>) {
  const { hasPermission, requestPermission } = useCameraPermisssion()
  const { hasPermission: hasMicrophonePermission, requestPermission: requestMicrophonePermission } = useMicrophonePermission()
  const isFocused = useIsFocused()
  useEffect( () => {
    if(!hasPermission) requestPermission()
    if(!hasMicrophonePermission) requestMicrophonePermission()
  }, [isFocused])

  return (
    <If 
      condition={hasPermission && isFocused && device != null}
      elseRender={null}
    >
      <CameraVision
        style={StyleSheet.absoluteFill}
        device={device}
        onError={(e) => console.log('Error',e)}
        {...{ ...rest, ref }}
      />
    </If>
  );
}

export default forwardRef(Camera);
