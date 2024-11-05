export interface SaveInterestsParams {
  interests: string[]
}

export interface SaveInterestsRequest {
  id: string;
  // avatarUrl: string;
  // wallpaperUrl: string;
  // firstName: string;
  // lastName: string;
  // gender: string;
  // country: string;
  // dateOfBirth: string;
  interests: string[]
}

export type SaveInterestsResponse = Promise<void>;
