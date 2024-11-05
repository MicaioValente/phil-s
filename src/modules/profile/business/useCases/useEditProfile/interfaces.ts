export interface EditProfileParams {
  avatar: {
    path: string;
    type: string;
  } | string;
  wallpaper: {
    path: string;
    type: string;
  } | string;
  bio: string;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: Date;
  links: string[];
}

export interface CreateProfileRequest {
  id: string;
  avatarUrl: string;
  wallpaperUrl: string;
  firstName: string;
  biography: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: string;
  links: string[];
}

export type CreateProfileResponse = Promise<void>;
