
import { Camera, PhotoFile as PhotoFileVision, VideoFile as VideoFileVision } from 'react-native-vision-camera';

export type { Camera as CameraType } from 'react-native-vision-camera';
export interface CameraProps extends React.ComponentProps<typeof Camera> {

}

export interface CameraPermissionHook {
  hasPermission: boolean
  requestPermission: () => Promise<boolean>
}

export interface MicrophonePermissionHook {
  hasPermission: boolean
  requestPermission: () => Promise<boolean>
}

export interface PhotoFile extends PhotoFileVision {
  duration?: number
}

export interface VideoFile extends VideoFileVision {}
