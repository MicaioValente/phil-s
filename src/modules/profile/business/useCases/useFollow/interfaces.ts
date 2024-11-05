import { UserFollower } from "@infra/network/graphql/API"

type Type_Request = 'FOLLOW' | 'UNFOLLOW'
export interface FollowRequestParams {
  followedUserId: string,
  typeRequest: Type_Request
}

export interface FollowRequest extends FollowRequestParams {
  followerUserId: string,
}

export interface FollowResponse {
  userFollower?: UserFollower,
  typeRequest: Type_Request
}
