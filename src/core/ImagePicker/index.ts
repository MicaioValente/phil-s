import * as RNImagePicker from 'react-native-image-picker';

import type { ImagePickerApi } from '@core/ImagePicker/interfaces';

export async function launchImageLibrary() {
  try {
    const result = await RNImagePicker.launchImageLibrary({
      includeBase64: true,
      mediaType: 'photo',
      quality: 1,
    });

    const image = result.assets!.firstItem();

    return {
      base64: image.base64!,
      path: image.uri!,
      type: image.fileName!.split('.').lastItem()!,
    };
  } catch (error) {
    return null;
  }
}

const ImagePicker: ImagePickerApi = {
  launchImageLibrary,
};

export default ImagePicker;
