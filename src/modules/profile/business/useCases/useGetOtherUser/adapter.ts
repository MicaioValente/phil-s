import { UserFollower, UserSubscription } from "@infra/network/graphql/API";

export const useGetOtherUserAdapter = (user: UserProfileModel, isFollowing: UserFollower[], isSubscribe: UserSubscription[]) => {
    return {
        ...user,
        isFollowing: isFollowing.length > 0,
        isSubscribe: isSubscribe.length > 0
    }
}