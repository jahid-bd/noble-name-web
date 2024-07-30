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
  childAgeGroup?: any;
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

export interface ChangePassReq {
  current_password: string;
  new_password: string;
  confirm_password?: string;
}

export interface ContactParams {
  email: string;
  phone: string;
  subject: string;
  message: string;
  full_name: string;
  issue_type: string;
}
