import DeviceInfo from "@core/deviceInfo"
import Permissions from "@core/permissions"
import { GetPhotosParams, PhotoIdentifiersPage, PhotoThumbnail, PhotoThumbnailOptions } from "./interfaces"
import { CameraRoll } from "@react-native-camera-roll/camera-roll"

export const getPhotos = (params: GetPhotosParams) => new Promise<PhotoIdentifiersPage>( async (resolve, reject)  => {
    if(DeviceInfo.isAndroid) await Permissions.hasAndroidPermission()
    try{
        const res = await CameraRoll.getPhotos(params)
        resolve(res)
    }catch(e){
        reject(e)
    }
})

export const getPhotoThumbnail = (uri: string, options: PhotoThumbnailOptions) => new Promise<PhotoThumbnail>( async (resolve, reject)  => {
    if(DeviceInfo.isAndroid) await Permissions.hasAndroidPermission()
    try{
        const res = await CameraRoll.getPhotoThumbnail(uri, options)
        resolve(res)
    }catch(e){
        reject(e)
    }
})
