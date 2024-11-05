import { graphQLClient } from '@infra/network';
import { getUser, userFollowersByFollowerUserId, userSubscriptionsBySubscriberUserId } from '@infra/network/graphql/queries';

import { QueryKey } from '@tanstack/react-query';
import { useGetOtherUserAdapter } from './adapter';

export async function getOtherUserService(queryKey: QueryKey): Promise<UserOtherProfileModel> {
  const [_, id, authId ] = queryKey;

  const response = await graphQLClient({
    query: getUser,
    variables: { id: id as string },
  });

  const isFollowing = await graphQLClient({
    query: userFollowersByFollowerUserId,
    variables: {
      followerUserId: authId as string,
      filter: {
        followedUserId: { eq: id as string }
      }
    }
  })

  const isSubscribe = await graphQLClient({
    query: userSubscriptionsBySubscriberUserId,
    variables: {
      subscriberUserId: authId as string,
      filter: {
        subscribedToUserId: { eq: id as string }
      }
    }
  })


  return useGetOtherUserAdapter(response.data.getUser as UserProfileModel, isFollowing.data.userFollowersByFollowerUserId.items, isSubscribe.data.userSubscriptionsBySubscriberUserId.items);
}
