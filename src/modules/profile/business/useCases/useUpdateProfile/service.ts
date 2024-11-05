import { getUserId, graphQLClient } from '@infra/network';
import { updateUser } from '@infra/network/graphql/mutations';
import {
  UpdateProfileParams,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@modules/profile/business/useCases/useUpdateProfile/interfaces';

export async function updateProfile(
  params: UpdateProfileParams,
): UpdateProfileResponse {
  const userId = await getUserId();

  const input: UpdateProfileRequest = {
    id: userId!,
    avatarUrl: params.avatarUrl,
    firstName: params.firstName,
    lastName: params.lastName,
    gender: params.gender,
    country: params.country,
    dateOfBirth: params.dateOfBirth?.toISOString().split('T')[0],
  };

  await graphQLClient({
    query: updateUser,
    variables: { input },
  });
}
