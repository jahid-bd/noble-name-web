export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
export interface SignInData {
  email: string;
  password: string;
}

export interface UserUpdateData {
  age: string;
  gender: string;
  country: string;
  sect: string;
  isExpectingBaby: boolean;
  expectedDate?: Date | null | string;
  isAlreadyParent: boolean;
  childrens?: string;
  childAgeGroup?: string;
  name?: string;
}

export interface OtpParams {
  otp_code: number | undefined;
  otp_id: string | null;
}

export interface ResetPassParams {
  otp_id: string | null;
  password: string;
}
