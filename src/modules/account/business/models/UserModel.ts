declare interface UserModel {
  id: string;
  avatarUrl: string;
  wallpaperUrl: string;
  biography: string | null | undefined;
  email: string | null;
  phoneNumber: string | null;
  links: (string | null)[] | null | undefined
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  dateOfBirth: string;
  interests:  (string | null)[] | null | undefined;
}
