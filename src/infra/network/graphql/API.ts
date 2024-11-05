/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  avatarUrl?: string | null,
  wallpaperUrl?: string | null,
  firstName: string,
  lastName: string,
  biography?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  links?: Array< string | null > | null,
  interests?: Array< string | null > | null,
  gender: string,
  country: string,
  dateOfBirth: string,
  followerCount?: number | null,
  followingCount?: number | null,
  subscriptionCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelUserConditionInput = {
  avatarUrl?: ModelStringInput | null,
  wallpaperUrl?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  links?: ModelStringInput | null,
  interests?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  country?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  followerCount?: ModelIntInput | null,
  followingCount?: ModelIntInput | null,
  subscriptionCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  avatarUrl?: string | null,
  wallpaperUrl?: string | null,
  firstName: string,
  lastName: string,
  biography?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  links?: Array< string | null > | null,
  interests?: Array< string | null > | null,
  gender: string,
  country: string,
  dateOfBirth: string,
  followerCount?: number | null,
  followingCount?: number | null,
  subscriptionCount?: number | null,
  posts?: ModelPostConnection | null,
  comments?: ModelCommentConnection | null,
  causes?: ModelCauseConnection | null,
  followers?: ModelUserFollowerConnection | null,
  following?: ModelUserFollowerConnection | null,
  userSubscriptions?: ModelUserSubscriptionConnection | null,
  stories?: ModelStoryConnection | null,
  createdAt: string,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  description: string,
  subscriberOnly: boolean,
  location?: string | null,
  favorites?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  media?:  Array<Media | null > | null,
  userId: string,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type Media = {
  __typename: "Media",
  type: string,
  url: string,
  title?: string | null,
  author?: string | null,
  imageUrl?: string | null,
  duration?: number | null,
  thumbnailUrl?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  parentCommentId?: string | null,
  likes?: Array< string | null > | null,
  isDeleted: boolean,
  postId: string,
  userId: string,
  createdAt: string,
  updatedAt?: string | null,
};

export type ModelCauseConnection = {
  __typename: "ModelCauseConnection",
  items:  Array<Cause | null >,
  nextToken?: string | null,
};

export type Cause = {
  __typename: "Cause",
  id: string,
  title: string,
  description: string,
  goalAmount: number,
  raisedAmount: number,
  endDate: string,
  cryptoWalletAddress: string,
  media?:  Array<Media | null > | null,
  userId: string,
  createdAt: string,
  updatedAt?: string | null,
};

export type ModelUserFollowerConnection = {
  __typename: "ModelUserFollowerConnection",
  items:  Array<UserFollower | null >,
  nextToken?: string | null,
};

export type UserFollower = {
  __typename: "UserFollower",
  id: string,
  followerUserId: string,
  followedUserId: string,
  userfollowed?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserSubscriptionConnection = {
  __typename: "ModelUserSubscriptionConnection",
  items:  Array<UserSubscription | null >,
  nextToken?: string | null,
};

export type UserSubscription = {
  __typename: "UserSubscription",
  id: string,
  subscriberUserId: string,
  subscribedToUserId: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type Story = {
  __typename: "Story",
  id: string,
  userId: string,
  media?: Media | null,
  location?: string | null,
  highlight: boolean,
  views?: Array< string | null > | null,
  isDeleted: boolean,
  user?: User | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateUserInput = {
  id: string,
  avatarUrl?: string | null,
  wallpaperUrl?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  biography?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  links?: Array< string | null > | null,
  interests?: Array< string | null > | null,
  gender?: string | null,
  country?: string | null,
  dateOfBirth?: string | null,
  followerCount?: number | null,
  followingCount?: number | null,
  subscriptionCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  description: string,
  subscriberOnly: boolean,
  location?: string | null,
  favorites?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  media?: Array< MediaInput | null > | null,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type MediaInput = {
  type: string,
  url: string,
  title?: string | null,
  author?: string | null,
  imageUrl?: string | null,
  duration?: number | null,
  thumbnailUrl?: string | null,
};

export type ModelPostConditionInput = {
  description?: ModelStringInput | null,
  subscriberOnly?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  favorites?: ModelIDInput | null,
  likes?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  description?: string | null,
  subscriberOnly?: boolean | null,
  location?: string | null,
  favorites?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  media?: Array< MediaInput | null > | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  parentCommentId?: string | null,
  likes?: Array< string | null > | null,
  isDeleted: boolean,
  postId: string,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  likes?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  parentCommentId?: string | null,
  likes?: Array< string | null > | null,
  isDeleted?: boolean | null,
  postId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateCauseInput = {
  id?: string | null,
  title: string,
  description: string,
  goalAmount: number,
  raisedAmount: number,
  endDate: string,
  cryptoWalletAddress: string,
  media?: Array< MediaInput | null > | null,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCauseConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goalAmount?: ModelFloatInput | null,
  raisedAmount?: ModelFloatInput | null,
  endDate?: ModelStringInput | null,
  cryptoWalletAddress?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCauseConditionInput | null > | null,
  or?: Array< ModelCauseConditionInput | null > | null,
  not?: ModelCauseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCauseInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  goalAmount?: number | null,
  raisedAmount?: number | null,
  endDate?: string | null,
  cryptoWalletAddress?: string | null,
  media?: Array< MediaInput | null > | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCauseInput = {
  id: string,
};

export type CreateUserFollowerInput = {
  id?: string | null,
  followerUserId: string,
  followedUserId: string,
  createdAt?: string | null,
};

export type ModelUserFollowerConditionInput = {
  followerUserId?: ModelIDInput | null,
  followedUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFollowerConditionInput | null > | null,
  or?: Array< ModelUserFollowerConditionInput | null > | null,
  not?: ModelUserFollowerConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserFollowerInput = {
  id: string,
  followerUserId?: string | null,
  followedUserId?: string | null,
  createdAt?: string | null,
};

export type DeleteUserFollowerInput = {
  id: string,
};

export type CreateUserSubscriptionInput = {
  id?: string | null,
  subscriberUserId: string,
  subscribedToUserId: string,
  createdAt?: string | null,
};

export type ModelUserSubscriptionConditionInput = {
  subscriberUserId?: ModelIDInput | null,
  subscribedToUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserSubscriptionConditionInput | null > | null,
  or?: Array< ModelUserSubscriptionConditionInput | null > | null,
  not?: ModelUserSubscriptionConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserSubscriptionInput = {
  id: string,
  subscriberUserId?: string | null,
  subscribedToUserId?: string | null,
  createdAt?: string | null,
};

export type DeleteUserSubscriptionInput = {
  id: string,
};

export type CreateStoryInput = {
  id?: string | null,
  userId: string,
  media?: MediaInput | null,
  location?: string | null,
  highlight: boolean,
  views?: Array< string | null > | null,
  isDeleted: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelStoryConditionInput = {
  userId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  highlight?: ModelBooleanInput | null,
  views?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
};

export type UpdateStoryInput = {
  id: string,
  userId?: string | null,
  media?: MediaInput | null,
  location?: string | null,
  highlight?: boolean | null,
  views?: Array< string | null > | null,
  isDeleted?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  avatarUrl?: ModelStringInput | null,
  wallpaperUrl?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  links?: ModelStringInput | null,
  interests?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  country?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  followerCount?: ModelIntInput | null,
  followingCount?: ModelIntInput | null,
  subscriptionCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  subscriberOnly?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  favorites?: ModelIDInput | null,
  likes?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  likes?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCauseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goalAmount?: ModelFloatInput | null,
  raisedAmount?: ModelFloatInput | null,
  endDate?: ModelStringInput | null,
  cryptoWalletAddress?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCauseFilterInput | null > | null,
  or?: Array< ModelCauseFilterInput | null > | null,
  not?: ModelCauseFilterInput | null,
};

export type ModelUserFollowerFilterInput = {
  id?: ModelIDInput | null,
  followerUserId?: ModelIDInput | null,
  followedUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFollowerFilterInput | null > | null,
  or?: Array< ModelUserFollowerFilterInput | null > | null,
  not?: ModelUserFollowerFilterInput | null,
};

export type ModelUserSubscriptionFilterInput = {
  id?: ModelIDInput | null,
  subscriberUserId?: ModelIDInput | null,
  subscribedToUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserSubscriptionFilterInput | null > | null,
  or?: Array< ModelUserSubscriptionFilterInput | null > | null,
  not?: ModelUserSubscriptionFilterInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  highlight?: ModelBooleanInput | null,
  views?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  wallpaperUrl?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  biography?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  links?: ModelSubscriptionStringInput | null,
  interests?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  followerCount?: ModelSubscriptionIntInput | null,
  followingCount?: ModelSubscriptionIntInput | null,
  subscriptionCount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  subscriberOnly?: ModelSubscriptionBooleanInput | null,
  location?: ModelSubscriptionStringInput | null,
  favorites?: ModelSubscriptionIDInput | null,
  likes?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  parentCommentId?: ModelSubscriptionIDInput | null,
  likes?: ModelSubscriptionIDInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionCauseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  goalAmount?: ModelSubscriptionFloatInput | null,
  raisedAmount?: ModelSubscriptionFloatInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  cryptoWalletAddress?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCauseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCauseFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFollowerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  followerUserId?: ModelSubscriptionIDInput | null,
  followedUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFollowerFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFollowerFilterInput | null > | null,
};

export type ModelSubscriptionUserSubscriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subscriberUserId?: ModelSubscriptionIDInput | null,
  subscribedToUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserSubscriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSubscriptionFilterInput | null > | null,
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  highlight?: ModelSubscriptionBooleanInput | null,
  views?: ModelSubscriptionIDInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateCauseMutationVariables = {
  input: CreateCauseInput,
  condition?: ModelCauseConditionInput | null,
};

export type CreateCauseMutation = {
  createCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateCauseMutationVariables = {
  input: UpdateCauseInput,
  condition?: ModelCauseConditionInput | null,
};

export type UpdateCauseMutation = {
  updateCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteCauseMutationVariables = {
  input: DeleteCauseInput,
  condition?: ModelCauseConditionInput | null,
};

export type DeleteCauseMutation = {
  deleteCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateUserFollowerMutationVariables = {
  input: CreateUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type CreateUserFollowerMutation = {
  createUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserFollowerMutationVariables = {
  input: UpdateUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type UpdateUserFollowerMutation = {
  updateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserFollowerMutationVariables = {
  input: DeleteUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type DeleteUserFollowerMutation = {
  deleteUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserSubscriptionMutationVariables = {
  input: CreateUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type CreateUserSubscriptionMutation = {
  createUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserSubscriptionMutationVariables = {
  input: UpdateUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type UpdateUserSubscriptionMutation = {
  updateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserSubscriptionMutationVariables = {
  input: DeleteUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type DeleteUserSubscriptionMutation = {
  deleteUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description: string,
      subscriberOnly: boolean,
      location?: string | null,
      favorites?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      likes?: Array< string | null > | null,
      isDeleted: boolean,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCauseQueryVariables = {
  id: string,
};

export type GetCauseQuery = {
  getCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListCausesQueryVariables = {
  filter?: ModelCauseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCausesQuery = {
  listCauses?:  {
    __typename: "ModelCauseConnection",
    items:  Array< {
      __typename: "Cause",
      id: string,
      title: string,
      description: string,
      goalAmount: number,
      raisedAmount: number,
      endDate: string,
      cryptoWalletAddress: string,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserFollowerQueryVariables = {
  id: string,
};

export type GetUserFollowerQuery = {
  getUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserFollowersQueryVariables = {
  filter?: ModelUserFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFollowersQuery = {
  listUserFollowers?:  {
    __typename: "ModelUserFollowerConnection",
    items:  Array< {
      __typename: "UserFollower",
      id: string,
      followerUserId: string,
      followedUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSubscriptionQueryVariables = {
  id: string,
};

export type GetUserSubscriptionQuery = {
  getUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserSubscriptionsQueryVariables = {
  filter?: ModelUserSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSubscriptionsQuery = {
  listUserSubscriptions?:  {
    __typename: "ModelUserSubscriptionConnection",
    items:  Array< {
      __typename: "UserSubscription",
      id: string,
      subscriberUserId: string,
      subscribedToUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      userId: string,
      location?: string | null,
      highlight: boolean,
      views?: Array< string | null > | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIdQuery = {
  postsByUserId?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description: string,
      subscriberOnly: boolean,
      location?: string | null,
      favorites?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIdQuery = {
  commentsByPostId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      likes?: Array< string | null > | null,
      isDeleted: boolean,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIdQuery = {
  commentsByUserId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      likes?: Array< string | null > | null,
      isDeleted: boolean,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CausesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCauseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CausesByUserIdQuery = {
  causesByUserId?:  {
    __typename: "ModelCauseConnection",
    items:  Array< {
      __typename: "Cause",
      id: string,
      title: string,
      description: string,
      goalAmount: number,
      raisedAmount: number,
      endDate: string,
      cryptoWalletAddress: string,
      userId: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserFollowersByFollowerUserIdQueryVariables = {
  followerUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserFollowersByFollowerUserIdQuery = {
  userFollowersByFollowerUserId?:  {
    __typename: "ModelUserFollowerConnection",
    items:  Array< {
      __typename: "UserFollower",
      id: string,
      followerUserId: string,
      followedUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserFollowersByFollowedUserIdQueryVariables = {
  followedUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserFollowersByFollowedUserIdQuery = {
  userFollowersByFollowedUserId?:  {
    __typename: "ModelUserFollowerConnection",
    items:  Array< {
      __typename: "UserFollower",
      id: string,
      followerUserId: string,
      followedUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserSubscriptionsBySubscriberUserIdQueryVariables = {
  subscriberUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSubscriptionsBySubscriberUserIdQuery = {
  userSubscriptionsBySubscriberUserId?:  {
    __typename: "ModelUserSubscriptionConnection",
    items:  Array< {
      __typename: "UserSubscription",
      id: string,
      subscriberUserId: string,
      subscribedToUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserSubscriptionsBySubscribedToUserIdQueryVariables = {
  subscribedToUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSubscriptionsBySubscribedToUserIdQuery = {
  userSubscriptionsBySubscribedToUserId?:  {
    __typename: "ModelUserSubscriptionConnection",
    items:  Array< {
      __typename: "UserSubscription",
      id: string,
      subscriberUserId: string,
      subscribedToUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoriesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoriesByUserIdQuery = {
  storiesByUserId?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      userId: string,
      location?: string | null,
      highlight: boolean,
      views?: Array< string | null > | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    avatarUrl?: string | null,
    wallpaperUrl?: string | null,
    firstName: string,
    lastName: string,
    biography?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    links?: Array< string | null > | null,
    interests?: Array< string | null > | null,
    gender: string,
    country: string,
    dateOfBirth: string,
    followerCount?: number | null,
    followingCount?: number | null,
    subscriptionCount?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    causes?:  {
      __typename: "ModelCauseConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserFollowerConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    deletedAt?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    description: string,
    subscriberOnly: boolean,
    location?: string | null,
    favorites?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    likes?: Array< string | null > | null,
    isDeleted: boolean,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateCauseSubscriptionVariables = {
  filter?: ModelSubscriptionCauseFilterInput | null,
};

export type OnCreateCauseSubscription = {
  onCreateCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateCauseSubscriptionVariables = {
  filter?: ModelSubscriptionCauseFilterInput | null,
};

export type OnUpdateCauseSubscription = {
  onUpdateCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteCauseSubscriptionVariables = {
  filter?: ModelSubscriptionCauseFilterInput | null,
};

export type OnDeleteCauseSubscription = {
  onDeleteCause?:  {
    __typename: "Cause",
    id: string,
    title: string,
    description: string,
    goalAmount: number,
    raisedAmount: number,
    endDate: string,
    cryptoWalletAddress: string,
    media?:  Array< {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null > | null,
    userId: string,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateUserFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowerFilterInput | null,
};

export type OnCreateUserFollowerSubscription = {
  onCreateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowerFilterInput | null,
};

export type OnUpdateUserFollowerSubscription = {
  onUpdateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowerFilterInput | null,
};

export type OnDeleteUserFollowerSubscription = {
  onDeleteUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    followerUserId: string,
    followedUserId: string,
    userfollowed?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
};

export type OnCreateUserSubscriptionSubscription = {
  onCreateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
};

export type OnUpdateUserSubscriptionSubscription = {
  onUpdateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
};

export type OnDeleteUserSubscriptionSubscription = {
  onDeleteUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    subscriberUserId: string,
    subscribedToUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    media?:  {
      __typename: "Media",
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
    } | null,
    location?: string | null,
    highlight: boolean,
    views?: Array< string | null > | null,
    isDeleted: boolean,
    user?:  {
      __typename: "User",
      id: string,
      avatarUrl?: string | null,
      wallpaperUrl?: string | null,
      firstName: string,
      lastName: string,
      biography?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      links?: Array< string | null > | null,
      interests?: Array< string | null > | null,
      gender: string,
      country: string,
      dateOfBirth: string,
      followerCount?: number | null,
      followingCount?: number | null,
      subscriptionCount?: number | null,
      createdAt: string,
      updatedAt?: string | null,
      deletedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};
