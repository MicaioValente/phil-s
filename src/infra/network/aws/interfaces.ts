export interface DownloadImage {
  path: string;
}

export interface UploadImage {
  data: string;
  path: string;
  type: string;
}

export interface UploadedImage {
  path: string;
  size: number;
}

export interface UploadVideo {
  data: Blob;
  path: string;
  type: string;
}

export interface UploadedVideo {
  path: string;
  size: number;
}

export interface StorageApi {
  downloadImage: (image: DownloadImage) => Promise<string>;
  getImageUrl: (image: DownloadImage) => Promise<string>;
  uploadImage: (image: UploadImage) => Promise<UploadedImage>;
  deleteResources: () => Promise<void>;
  uploadVideo: (video: UploadVideo) => Promise<UploadedVideo>;
}
