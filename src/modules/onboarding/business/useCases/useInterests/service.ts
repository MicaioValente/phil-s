import { getUserId, graphQLClient, Storage } from '@infra/network';
import { createUser } from '@infra/network/graphql/mutations';
import {
  SaveInterestsParams,
  SaveInterestsRequest,
  SaveInterestsResponse,
} from '@modules/onboarding/business/useCases/useInterests/interfaces';
import { updateUser as updateUserMutation } from '@infra/network/graphql/mutations';

export async function saveInterestsService(
  params: SaveInterestsParams,
): SaveInterestsResponse {
  const userId = await getUserId();

  const input: SaveInterestsRequest = {
    id: userId!,
    interests: params.interests,
  };

  await graphQLClient({
    query: updateUserMutation,
    variables: { input },
  });
}
