/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    avatarUrl
    wallpaperUrl
    firstName
    lastName
    biography
    email
    phoneNumber
    links
    interests
    gender
    country
    dateOfBirth
    followerCount
    followingCount
    subscriptionCount
    posts {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    causes {
      nextToken
      __typename
    }
    followers {
      nextToken
      __typename
    }
    following {
      nextToken
      __typename
    }
    userSubscriptions {
      nextToken
      __typename
    }
    stories {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    deletedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      avatarUrl
      wallpaperUrl
      firstName
      lastName
      biography
      email
      phoneNumber
      links
      interests
      gender
      country
      dateOfBirth
      followerCount
      followingCount
      subscriptionCount
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    description
    subscriberOnly
    location
    favorites
    likes
    media {
      type
      url
      title
      author
      imageUrl
      duration
      thumbnailUrl
      __typename
    }
    userId
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      subscriberOnly
      location
      favorites
      likes
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    parentCommentId
    likes
    isDeleted
    postId
    userId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      parentCommentId
      likes
      isDeleted
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getCause = /* GraphQL */ `query GetCause($id: ID!) {
  getCause(id: $id) {
    id
    title
    description
    goalAmount
    raisedAmount
    endDate
    cryptoWalletAddress
    media {
      type
      url
      title
      author
      imageUrl
      duration
      thumbnailUrl
      __typename
    }
    userId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCauseQueryVariables, APITypes.GetCauseQuery>;
export const listCauses = /* GraphQL */ `query ListCauses(
  $filter: ModelCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      goalAmount
      raisedAmount
      endDate
      cryptoWalletAddress
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCausesQueryVariables,
  APITypes.ListCausesQuery
>;
export const getUserFollower = /* GraphQL */ `query GetUserFollower($id: ID!) {
  getUserFollower(id: $id) {
    id
    followerUserId
    followedUserId
    userfollowed {
      id
      avatarUrl
      wallpaperUrl
      firstName
      lastName
      biography
      email
      phoneNumber
      links
      interests
      gender
      country
      dateOfBirth
      followerCount
      followingCount
      subscriptionCount
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserFollowerQueryVariables,
  APITypes.GetUserFollowerQuery
>;
export const listUserFollowers = /* GraphQL */ `query ListUserFollowers(
  $filter: ModelUserFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      followerUserId
      followedUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFollowersQueryVariables,
  APITypes.ListUserFollowersQuery
>;
export const getUserSubscription = /* GraphQL */ `query GetUserSubscription($id: ID!) {
  getUserSubscription(id: $id) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserSubscriptionQueryVariables,
  APITypes.GetUserSubscriptionQuery
>;
export const listUserSubscriptions = /* GraphQL */ `query ListUserSubscriptions(
  $filter: ModelUserSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      subscriberUserId
      subscribedToUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSubscriptionsQueryVariables,
  APITypes.ListUserSubscriptionsQuery
>;
export const getStory = /* GraphQL */ `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    userId
    media {
      type
      url
      title
      author
      imageUrl
      duration
      thumbnailUrl
      __typename
    }
    location
    highlight
    views
    isDeleted
    user {
      id
      avatarUrl
      wallpaperUrl
      firstName
      lastName
      biography
      email
      phoneNumber
      links
      interests
      gender
      country
      dateOfBirth
      followerCount
      followingCount
      subscriptionCount
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStoryQueryVariables, APITypes.GetStoryQuery>;
export const listStories = /* GraphQL */ `query ListStories(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      location
      highlight
      views
      isDeleted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoriesQueryVariables,
  APITypes.ListStoriesQuery
>;
export const postsByUserId = /* GraphQL */ `query PostsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      description
      subscriberOnly
      location
      favorites
      likes
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByUserIdQueryVariables,
  APITypes.PostsByUserIdQuery
>;
export const commentsByPostId = /* GraphQL */ `query CommentsByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      parentCommentId
      likes
      isDeleted
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIdQueryVariables,
  APITypes.CommentsByPostIdQuery
>;
export const commentsByUserId = /* GraphQL */ `query CommentsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      parentCommentId
      likes
      isDeleted
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIdQueryVariables,
  APITypes.CommentsByUserIdQuery
>;
export const causesByUserId = /* GraphQL */ `query CausesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  causesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      goalAmount
      raisedAmount
      endDate
      cryptoWalletAddress
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CausesByUserIdQueryVariables,
  APITypes.CausesByUserIdQuery
>;
export const userFollowersByFollowerUserId = /* GraphQL */ `query UserFollowersByFollowerUserId(
  $followerUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  userFollowersByFollowerUserId(
    followerUserId: $followerUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      followerUserId
      followedUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFollowersByFollowerUserIdQueryVariables,
  APITypes.UserFollowersByFollowerUserIdQuery
>;
export const userFollowersByFollowedUserId = /* GraphQL */ `query UserFollowersByFollowedUserId(
  $followedUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  userFollowersByFollowedUserId(
    followedUserId: $followedUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      followerUserId
      followedUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFollowersByFollowedUserIdQueryVariables,
  APITypes.UserFollowersByFollowedUserIdQuery
>;
export const userSubscriptionsBySubscriberUserId = /* GraphQL */ `query UserSubscriptionsBySubscriberUserId(
  $subscriberUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  userSubscriptionsBySubscriberUserId(
    subscriberUserId: $subscriberUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      subscriberUserId
      subscribedToUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSubscriptionsBySubscriberUserIdQueryVariables,
  APITypes.UserSubscriptionsBySubscriberUserIdQuery
>;
export const userSubscriptionsBySubscribedToUserId = /* GraphQL */ `query UserSubscriptionsBySubscribedToUserId(
  $subscribedToUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  userSubscriptionsBySubscribedToUserId(
    subscribedToUserId: $subscribedToUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      subscriberUserId
      subscribedToUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSubscriptionsBySubscribedToUserIdQueryVariables,
  APITypes.UserSubscriptionsBySubscribedToUserIdQuery
>;
export const storiesByUserId = /* GraphQL */ `query StoriesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  storiesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      location
      highlight
      views
      isDeleted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoriesByUserIdQueryVariables,
  APITypes.StoriesByUserIdQuery
>;
