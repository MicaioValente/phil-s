import { graphQLClient, Storage } from '@infra/network';
import { CreateStoryRequest, CreateStoryResponse } from '@modules/feed/business/useCases/useCreateStory/interfaces';
import { createStory } from '@infra/network/graphql/mutations';
import { UploadedVideo } from '@infra/network/aws/interfaces';
import RNFS from '@core/rnfs';
import { getPhotoThumbnail } from '@core/cameraRoll';
import DeviceInfo from '@core/deviceInfo';

export async function createStoryService(
  params: CreateStoryRequest,
): CreateStoryResponse {
  const pathSorage = `story/${Math.floor(Date.now() * Math.random()).toString(36)}`

  let resultStorage: UploadedVideo = { path: '', size: 0 };
  switch(params.type){
    case 'VIDEO':
        const blobVideo = await (await fetch(params.media.url)).blob()
        resultStorage = await Storage.uploadVideo({ 
          path: pathSorage,
          data: blobVideo,
          type: params.media.type
        })
    break;
    case 'IMAGE':
      let base64 = ''
      if(DeviceInfo.isAndroid) 
         base64 = await RNFS.convertFileToBase64(params.media.url) as string
      else {
        const { thumbnailBase64 } = await getPhotoThumbnail(params.media.url, {
          allowNetworkAccess: false,
          targetSize: {
            height: params.media.height as number,
            width: params.media.width as number
          },
          quality: 1
        })
        base64 = thumbnailBase64
      }
      
      resultStorage = await Storage.uploadImage({ 
        path: pathSorage,
        data: base64 as string,
        type: params.media.type
      })
    break;
  }

  let duration = 12000 //12 seconds default
  if(params.media.duration)
    duration = params.media.duration < 1000 ? params.media.duration * 1000 : params.media.duration // if duration returns in seconds and not in milliseconds

  const input: CreateStoryRequest = {
    userId: params.userId,
    media: {
      type: params.media.type.split('/')?.[0],
      url: resultStorage.path,
      imageUrl: params?.media?.imageUrl,
      duration,
      thumbnailUrl: params?.media?.thumbnailUrl,
    },
    location: '',
    highlight: params.highlight,
    isDeleted: false
  };

  const response = await graphQLClient({
    query: createStory,
    variables: { input: input as any },
  });
  
  return response
}

