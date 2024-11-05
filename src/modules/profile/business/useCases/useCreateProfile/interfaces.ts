interface Image {
  path: string;
  type: string;
}

export interface CreateProfileParams {
  avatar: Image | null;
  wallpaper: Image | null;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: Date;
  interests: string[];
}

export type CreateProfileResponse = Promise<void>;
