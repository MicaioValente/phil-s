import REACT_FS from 'react-native-fs';
import { RnfsProps } from './interfaces';
import DeviceInfo from '@core/deviceInfo';

const convertFileToBase64 = async (filePath: string) => {
  try {
    let path = filePath
    if((/^ph:\/\//).test(filePath)){
        const initPath = DeviceInfo.isAndroid ? 'file://' : 'file:/'
        path = `${initPath}${REACT_FS.TemporaryDirectoryPath}/${filePath.split('ph://')[1]}`
    }
    const base64String = await REACT_FS.readFile(path, 'base64');
    return base64String;
  } catch (error) {

    throw error;
  }
};

export const RNFS: RnfsProps = {
    convertFileToBase64
}

export default RNFS