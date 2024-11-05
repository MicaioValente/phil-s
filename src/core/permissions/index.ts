import { PermissionsAndroid, Platform } from "react-native";
import { PermissionsProps } from "./interface";

async function getCheckPermissionAndroid() {
    if (Platform.Version  as any >= 33) {
        return Promise.all([
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
        ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
    } else {
        return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    }
};

async function getRequestPermissionAndroid() {
    if (Platform.Version as any >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        (statuses) =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
    }
};

async function hasAndroidPermission() {
    const hasPermission = await getCheckPermissionAndroid();

    if (!hasPermission) 
        return await getRequestPermissionAndroid();;

    return hasPermission 
}

const Permissions: PermissionsProps = {
  getCheckPermissionAndroid,
  getRequestPermissionAndroid,
  hasAndroidPermission
}

export default Permissions
    