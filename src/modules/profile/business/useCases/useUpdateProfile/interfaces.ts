export interface UpdateProfileParams {
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  country?: string;
  dateOfBirth?: Date;
}

export interface UpdateProfileRequest {
  id: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  country?: string;
  dateOfBirth?: string;
}

export type UpdateProfileResponse = Promise<void>;
