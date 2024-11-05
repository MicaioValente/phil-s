import { getUserId, getUsername, graphQLClient, Storage } from '@infra/network';
import { CreateUserInput } from '@infra/network/graphql/API';
import { createUser } from '@infra/network/graphql/mutations';
import {
  CreateProfileParams,
  CreateProfileResponse,
} from '@modules/profile/business/useCases/useCreateProfile/interfaces';
import { isEmail } from '@shared/validations';

export async function createProfileService(
  params: CreateProfileParams,
): CreateProfileResponse {
  const [userId, username] = await Promise.all([getUserId(), getUsername()]);

  const isEmailUsername = isEmail(username!);

  const promises = [];

  if (params.avatar) {
    promises.push({
      data: params.avatar.path,
      path: 'user/avatar',
      type: params.avatar.type,
    });
  }

  if (params.wallpaper) {
    promises.push({
      data: params.wallpaper.path,
      path: 'user/wallpaper',
      type: params.wallpaper.type,
    });
  }

  const results = await Promise.all(promises.map(Storage.uploadImage));

  const avatarUrl = results.find(result =>
    result.path.includes('user/avatar'),
  )?.path;

  const wallpaperUrl = results.find(result =>
    result.path.includes('user/wallpaper'),
  )?.path;

  const input: CreateUserInput = {
    id: userId!,
    avatarUrl,
    wallpaperUrl,
    firstName: params.firstName,
    lastName: params.lastName,
    gender: params.gender,
    country: params.country,
    dateOfBirth: params.dateOfBirth.toISOString().split('T')[0],
    interests: params.interests,
  };

  isEmailUsername ? (input.email = username!) : (input.phoneNumber = username!);

  await graphQLClient({
    query: createUser,
    variables: { input },
  });
}
