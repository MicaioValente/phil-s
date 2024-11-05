export type { CameraRoll as CameraRollType } from "@react-native-camera-roll/camera-roll"

export type GroupTypes = "Album" | "All" | "Event" | "Faces" | "Library" | "SmartAlbum" | "PhotoStream" | "SavedPhotos"
export type AssetType = "All" | "Videos" | "Photos"
export type Include = "filename" | "fileSize" | "fileExtension" | "location" | "imageSize" | "playableDuration" | "orientation" | "albums" | "sourceType"
export type SourceType = "UserLibrary" | "CloudShared"
export type SubTypes = "PhotoPanorama" | "PhotoHDR" | "PhotoScreenshot" | "PhotoLive" | "PhotoDepthEffect" | "VideoStreamed" | "VideoHighFrameRate" | "VideoTimelapse"

export interface PhotoThumbnail {
    thumbnailBase64: string;
}

export interface  PhotoThumbnailOptions {
    allowNetworkAccess: boolean,
    targetSize: {
        width: number,
        height: number
    },
    quality: number
}

export interface GetPhotosParams {
    first: number,
    after?: string,
    groupTypes?: GroupTypes,
    groupName?: string,
    includeSharedAlbums?: boolean,
    assetType?: AssetType,
    fromTime?: number,
    toTime?: number,
    mimeTypes?: Array<string>,
    include?: Include[]
}

export interface PhotoIdentifiersPage  {
    edges: Array<PhotoIdentifier>,
    page_info: {
      has_next_page: boolean,
      start_cursor?: string,
      end_cursor?: string,
    },
    limited?: boolean
};

export interface PhotoIdentifier {
    node: {
        id: string,
        type: string,
        subTypes: SubTypes,
        sourceType: SourceType,
        group_name: string[],
        image: {
          filename: string | null,
          filepath: string | null,
          extension: string | null,
          uri: string,
          height: number,
          width: number,
          fileSize: number | null,
          playableDuration: number,
          orientation: number | null,
        },
        timestamp: number,
        modificationTimestamp: number,
        location: {
          latitude?: number,
          longitude?: number,
          altitude?: number,
          heading?: number,
          speed?: number,
        } | null,
    }
}