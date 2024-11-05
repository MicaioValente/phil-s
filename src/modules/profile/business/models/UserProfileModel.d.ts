declare interface UserProfileModel {
  id: string;
  avatarUrl: string;
  wallpaperUrl: string;
  phoneNumber: string;
  email: string;
  biography: string;
  links: string[] | [] | null;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: string;
  followerCount: number;
  followingCount: number;
  subscriptionCount: number;
}
