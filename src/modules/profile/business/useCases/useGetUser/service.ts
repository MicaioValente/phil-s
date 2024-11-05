import { graphQLClient } from '@infra/network';
import { getUser } from '@infra/network/graphql/queries';
import { useAuth } from '@modules/account/business/stores';

import { QueryKey } from '@tanstack/react-query';

export async function getUserService(queryKey: QueryKey): Promise<UserProfileModel> {

  const {user} = useAuth()

  const response = await graphQLClient({
    query: getUser,
    variables: { id: user.id as string },
  });


  return response.data.getUser;
}
