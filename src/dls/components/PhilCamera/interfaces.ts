
import { PhotoFile, VideoFile } from 'react-native-vision-camera';

export interface PhilCameraProps  {
  openCamera: boolean,
  closeCamera: () => void,
  getFile: (file: PhotoFile | VideoFile) => void
}
