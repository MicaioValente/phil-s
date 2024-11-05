/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateCause = /* GraphQL */ `subscription OnCreateCause($filter: ModelSubscriptionCauseFilterInput) {
  onCreateCause(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCauseSubscriptionVariables,
  APITypes.OnCreateCauseSubscription
>;
export const onUpdateCause = /* GraphQL */ `subscription OnUpdateCause($filter: ModelSubscriptionCauseFilterInput) {
  onUpdateCause(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCauseSubscriptionVariables,
  APITypes.OnUpdateCauseSubscription
>;
export const onDeleteCause = /* GraphQL */ `subscription OnDeleteCause($filter: ModelSubscriptionCauseFilterInput) {
  onDeleteCause(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCauseSubscriptionVariables,
  APITypes.OnDeleteCauseSubscription
>;
export const onCreateUserFollower = /* GraphQL */ `subscription OnCreateUserFollower(
  $filter: ModelSubscriptionUserFollowerFilterInput
) {
  onCreateUserFollower(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserFollowerSubscriptionVariables,
  APITypes.OnCreateUserFollowerSubscription
>;
export const onUpdateUserFollower = /* GraphQL */ `subscription OnUpdateUserFollower(
  $filter: ModelSubscriptionUserFollowerFilterInput
) {
  onUpdateUserFollower(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserFollowerSubscriptionVariables,
  APITypes.OnUpdateUserFollowerSubscription
>;
export const onDeleteUserFollower = /* GraphQL */ `subscription OnDeleteUserFollower(
  $filter: ModelSubscriptionUserFollowerFilterInput
) {
  onDeleteUserFollower(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserFollowerSubscriptionVariables,
  APITypes.OnDeleteUserFollowerSubscription
>;
export const onCreateUserSubscription = /* GraphQL */ `subscription OnCreateUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
) {
  onCreateUserSubscription(filter: $filter) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionSubscriptionVariables,
  APITypes.OnCreateUserSubscriptionSubscription
>;
export const onUpdateUserSubscription = /* GraphQL */ `subscription OnUpdateUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
) {
  onUpdateUserSubscription(filter: $filter) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionSubscriptionVariables,
  APITypes.OnUpdateUserSubscriptionSubscription
>;
export const onDeleteUserSubscription = /* GraphQL */ `subscription OnDeleteUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
) {
  onDeleteUserSubscription(filter: $filter) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionSubscriptionVariables,
  APITypes.OnDeleteUserSubscriptionSubscription
>;
export const onCreateStory = /* GraphQL */ `subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
  onCreateStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStorySubscriptionVariables,
  APITypes.OnCreateStorySubscription
>;
export const onUpdateStory = /* GraphQL */ `subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
  onUpdateStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStorySubscriptionVariables,
  APITypes.OnUpdateStorySubscription
>;
export const onDeleteStory = /* GraphQL */ `subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
  onDeleteStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStorySubscriptionVariables,
  APITypes.OnDeleteStorySubscription
>;
