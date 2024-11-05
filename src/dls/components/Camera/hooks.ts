import { CameraDevice, useCameraPermission as useCameraPermissionVision, useCameraDevice as useCameraDeviceVision, CameraPosition, DeviceFilter, useMicrophonePermission as useMicrophonePermissionVision } from "react-native-vision-camera"
import { CameraPermissionHook, MicrophonePermissionHook } from "@src/dls/components/Camera/interfaces"


export const useCameraPermisssion = ():CameraPermissionHook => {
    const { hasPermission, requestPermission } = useCameraPermissionVision()
    return {
        hasPermission,
        requestPermission
    }
}

export const useCameraDevice = (position: CameraPosition, filter?: DeviceFilter): CameraDevice | undefined => {
    const device = useCameraDeviceVision(position, filter)
    return device
}


export const useMicrophonePermission = (): MicrophonePermissionHook  => {
    const { hasPermission, requestPermission } = useMicrophonePermissionVision()
    return {
        hasPermission,
        requestPermission
    }
}
