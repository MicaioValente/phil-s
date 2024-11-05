import { graphQLClient } from '@infra/network';
import {
  createUserFollower,
  deleteUserFollower,
} from '@infra/network/graphql/mutations';
import { userFollowersByFollowerUserId } from '@infra/network/graphql/queries';
import { FollowRequest } from '@modules/profile/business/useCases/useFollow/interfaces';

export async function followService({
  followedUserId,
  followerUserId,
  typeRequest,
}: FollowRequest) {
  try {
    const isADD = typeRequest === 'FOLLOW';

    const exist = await graphQLClient({
      query: userFollowersByFollowerUserId,
      variables: {
        followerUserId,
        filter: {
          followedUserId: {
            eq: followedUserId,
          },
        },
      },
    });

    if (exist?.data?.userFollowersByFollowerUserId?.items.length > 0 && isADD) {
      return;
    }

    const input = {
      followedUserId,
      followerUserId,
    };

    let res: any;

    if (isADD) {
      res = await graphQLClient({
        query: createUserFollower,
        variables: {
          input,
        },
      });
    } else if (exist.data.userFollowersByFollowerUserId.items[0].id) {
      res = await graphQLClient({
        query: deleteUserFollower,
        variables: {
          input: { id: exist.data.userFollowersByFollowerUserId.items[0].id },
        },
      });
    }

    return {
      userFollower: isADD
        ? res?.data?.createUserFollower
        : res?.data?.deleteUserFollower,
      typeRequest,
    };
  } catch (e) {
    throw {
      userFollower: undefined,
      typeRequest,
    };
  }
}
