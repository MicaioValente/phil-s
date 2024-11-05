import { getUserId, graphQLClient, Storage } from '@infra/network';
import { updateUser as updateUserMutation } from '@infra/network/graphql/mutations';
import {
  EditProfileParams,
  CreateProfileRequest,
  CreateProfileResponse,
} from '@modules/profile/business/useCases/useEditProfile/interfaces';

export async function createProfileService(
  params: EditProfileParams,
): CreateProfileResponse {
  const userId = await getUserId();

  const promises = [];

  if (typeof params.avatar !== 'string') {
    promises.push({
      data: params.avatar.path,
      path: 'user/avatar',
      type: params.avatar.type,
    });
  }

  if (typeof params.wallpaper !== 'string') {
    promises.push({
      data: params.wallpaper.path,
      path: 'user/wallpaper',
      type: params.wallpaper.type,
    });
  }

  const results = await Promise.all(
    promises.map(async promise => {
      const { data, path, type } = promise;
      const { path: uploadedPath } = await Storage.uploadImage({
        data,
        path,
        type,
      });

      return {
        path: uploadedPath,
        field: path,
      };
    }),
  );

  const avatarUrl = results.find(
    result => result.field === 'user/avatar',
  )?.path;
  const wallpaperUrl = results.find(
    result => result.field === 'user/wallpaper',
  )?.path;

  const input: CreateProfileRequest = {
    id: userId!,
    avatarUrl: typeof params.avatar === 'string' ? params.avatar : '',
    wallpaperUrl: typeof params.wallpaper === 'string' ? params.wallpaper : '',
    biography: params.bio,
    firstName: params.firstName,
    lastName: params.lastName,
    gender: params.gender,
    country: params.country,
    dateOfBirth: params.dateOfBirth.toISOString().split('T')[0],
    links: params.links ?? [''],
  };

  if (avatarUrl) input.avatarUrl = avatarUrl;
  if (wallpaperUrl) input.wallpaperUrl = wallpaperUrl;
  if (params.links) input.links = params.links;

  await graphQLClient({
    query: updateUserMutation,
    variables: { input },
  });
}
