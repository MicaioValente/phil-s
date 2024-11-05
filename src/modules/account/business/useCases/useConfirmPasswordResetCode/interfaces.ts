export interface ConfirmPasswordResetCodeParams {
  username: string;
  confirmationCode: string;
  newPassword: string;
}

export type ConfirmPasswordResetCodeResponse = void;
