import { BASE_URL } from '@/constants';
import {
  OtpParams,
  RegisterData,
  ResetPassParams,
  SignInData,
  UserUpdateData,
} from '@/types';
import axios from 'axios';

export const userRegister = (data: RegisterData) =>
  axios.post(`${BASE_URL}/auth/signup`, data);

export const userProfileUpdate = (data: UserUpdateData) =>
  axios.put(`${BASE_URL}/users/profile`, data, { withCredentials: true });

export const userLogin = (data: SignInData) =>
  axios.post(`${BASE_URL}/auth/signin`, data, { withCredentials: true });

export const forgotPassword = (data: { email: string }) =>
  axios.post(`${BASE_URL}/auth/forget-password`, data);

export const verifyOtp = (data: OtpParams) =>
  axios.post(`${BASE_URL}/auth/verify-otp`, data);

export const resetPassword = (data: ResetPassParams) =>
  axios.post(`${BASE_URL}/auth/reset-password`, data);

export const getUserProfile = () =>
  axios.get(`${BASE_URL}/users/profile`, { withCredentials: true });

export const getUserFavorites = () =>
  axios.get(`${BASE_URL}/user/favorites`, {
    params: { limit: 9 },
    withCredentials: true,
  });

export const getUserBookmarks = () =>
  axios.get(`${BASE_URL}/user/bookmarks`, { withCredentials: true });

export const getUserSuggestedName = () =>
  axios.get(`${BASE_URL}/user/suggestion-names`, { withCredentials: true });

export const getAllPlans = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/plans`, { withCredentials: true });
    return res.data.data;
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};

export const getActivePlan = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/active-plan`, {
      withCredentials: true,
    });
    return res.data.data;
  } catch (error) {
    console.error('Error fetching active plan:', error);
    throw error;
  }
};

export const subscribePlan = async (data: {
  plan_id: string;
  user_id: string;
}) =>
  axios.post(`${BASE_URL}/checkout-session`, data, { withCredentials: true });
