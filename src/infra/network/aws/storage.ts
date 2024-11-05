import {
  uploadData,
  downloadData,
  getUrl,
  remove,
  list,
} from 'aws-amplify/storage';

import Environment from '@core/environment';
import { showToast } from '@dls/stores';
import type {
  DownloadImage,
  UploadedImage,
  UploadImage,
  StorageApi,
  UploadVideo,
  UploadedVideo,
} from '@infra/network/aws/interfaces';

const useAccelerateEndpoint = Environment.isProduction;

async function downloadImage({ path }: DownloadImage): Promise<string> {
  try {
    const image = await downloadData({
      path: ({ identityId }) => `protected/${identityId}/${path}`,
      options: {
        useAccelerateEndpoint,
      },
    }).result;

    const blob = await image.body.blob();

    return URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);

    throw error;
  }
}

async function getImageUrl({ path }: DownloadImage): Promise<string> {
  try {
    const { url } = await getUrl({
      path,
      options: {
        expiresIn: 60,
        validateObjectExistence: true,
        useAccelerateEndpoint,
      },
    });

    return String(url);
  } catch (error) {
    console.log({ error });

    throw error;
  }
}

async function uploadImage({
  data,
  path,
  type,
}: UploadImage): Promise<UploadedImage> {
  try {
    const response = await fetch(data);

    const blob = await response.blob();

    const result = await uploadData({
      path: ({ identityId }) => `protected/${identityId}/${path}.${type}`,
      data: blob,
      options: {
        contentType: `image/${type}`,
        useAccelerateEndpoint,
      },
    }).result;

    return {
      path: result.path,
      size: result.size!,
    };
  } catch (error) {
    showToast({
      title: 'Error',
      message: 'Error uploading image',
    });

    throw error;
  }
}

async function deleteResources(): Promise<void> {
  try {
    const listOfFiles = await list({
      path: ({ identityId }) => `protected/${identityId}`,
    });

    const promises = listOfFiles.items.map(async ({ path }) => {
      return await remove({
        path,
      });
    });

    await Promise.all(promises);
  } catch (error) {
    console.log(error);
    showToast({
      title: 'Error',
      message: 'Error deleting resources',
    });
  }
}
async function uploadVideo({
  data,
  path,
  type,
}: UploadVideo): Promise<UploadedVideo> {
  try {
    const result = await uploadData({
      path: ({ identityId }) => `protected/${identityId}/${path}.${type}`,
      data,
      options: {
        contentType: `video/${type}`,
      },
    }).result;

    return {
      path: result.path,
      size: result.size!,
    };
  } catch (error) {
    showToast({
      title: 'Error',
      message: 'Error uploading image',
    });

    throw error;
  }
}

export const Storage: StorageApi = {
  downloadImage,
  getImageUrl,
  uploadImage,
  deleteResources,
  uploadVideo,
};

export default Storage;
