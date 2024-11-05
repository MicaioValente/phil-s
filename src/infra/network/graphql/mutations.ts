/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createCause = /* GraphQL */ `mutation CreateCause(
  $input: CreateCauseInput!
  $condition: ModelCauseConditionInput
) {
  createCause(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCauseMutationVariables,
  APITypes.CreateCauseMutation
>;
export const updateCause = /* GraphQL */ `mutation UpdateCause(
  $input: UpdateCauseInput!
  $condition: ModelCauseConditionInput
) {
  updateCause(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCauseMutationVariables,
  APITypes.UpdateCauseMutation
>;
export const deleteCause = /* GraphQL */ `mutation DeleteCause(
  $input: DeleteCauseInput!
  $condition: ModelCauseConditionInput
) {
  deleteCause(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCauseMutationVariables,
  APITypes.DeleteCauseMutation
>;
export const createUserFollower = /* GraphQL */ `mutation CreateUserFollower(
  $input: CreateUserFollowerInput!
  $condition: ModelUserFollowerConditionInput
) {
  createUserFollower(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserFollowerMutationVariables,
  APITypes.CreateUserFollowerMutation
>;
export const updateUserFollower = /* GraphQL */ `mutation UpdateUserFollower(
  $input: UpdateUserFollowerInput!
  $condition: ModelUserFollowerConditionInput
) {
  updateUserFollower(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserFollowerMutationVariables,
  APITypes.UpdateUserFollowerMutation
>;
export const deleteUserFollower = /* GraphQL */ `mutation DeleteUserFollower(
  $input: DeleteUserFollowerInput!
  $condition: ModelUserFollowerConditionInput
) {
  deleteUserFollower(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserFollowerMutationVariables,
  APITypes.DeleteUserFollowerMutation
>;
export const createUserSubscription = /* GraphQL */ `mutation CreateUserSubscription(
  $input: CreateUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  createUserSubscription(input: $input, condition: $condition) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserSubscriptionMutationVariables,
  APITypes.CreateUserSubscriptionMutation
>;
export const updateUserSubscription = /* GraphQL */ `mutation UpdateUserSubscription(
  $input: UpdateUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  updateUserSubscription(input: $input, condition: $condition) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserSubscriptionMutationVariables,
  APITypes.UpdateUserSubscriptionMutation
>;
export const deleteUserSubscription = /* GraphQL */ `mutation DeleteUserSubscription(
  $input: DeleteUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  deleteUserSubscription(input: $input, condition: $condition) {
    id
    subscriberUserId
    subscribedToUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserSubscriptionMutationVariables,
  APITypes.DeleteUserSubscriptionMutation
>;
export const createStory = /* GraphQL */ `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoryMutationVariables,
  APITypes.CreateStoryMutation
>;
export const updateStory = /* GraphQL */ `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoryMutationVariables,
  APITypes.UpdateStoryMutation
>;
export const deleteStory = /* GraphQL */ `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoryMutationVariables,
  APITypes.DeleteStoryMutation
>;
