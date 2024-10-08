import { BASE_URL } from '@/constants';
import {
  ChangePassReq,
  ContactParams,
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

export const userLogout = () =>
  axios.post(`${BASE_URL}/auth/logout`, {}, { withCredentials: true });

export const forgotPassword = (data: { email: string }) =>
  axios.post(`${BASE_URL}/auth/forget-password`, data);

export const verifyOtp = (data: OtpParams) =>
  axios.post(`${BASE_URL}/auth/verify-otp`, data);

export const verifyOtp2fa = (data: OtpParams) =>
  axios.post(`${BASE_URL}/auth/verify-otp-2fa`, data, {
    withCredentials: true,
  });

export const resetPassword = (data: ResetPassParams) =>
  axios.post(`${BASE_URL}/auth/reset-password`, data);

export const changePassword = (data: ChangePassReq) =>
  axios.put(`${BASE_URL}/auth/change-password`, data, {
    withCredentials: true,
  });

export const getUserProfile = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users/profile`, {
      withCredentials: true,
    });
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserFavorites = (page: number, gender: string | null) =>
  axios.get(`${BASE_URL}/user/favorites`, {
    params: { gender, limit: 9, page },
    withCredentials: true,
  });

export const addUserFavorite = (name: string) =>
  axios.post(
    `${BASE_URL}/user/favorites`,
    { name },
    {
      withCredentials: true,
    }
  );

export const removeUserFavorite = (id: string) =>
  axios.delete(`${BASE_URL}/user/favorites/${id}`, {
    withCredentials: true,
  });

export const addUserBookmark = (name: string) =>
  axios.post(
    `${BASE_URL}/user/bookmarks`,
    { name },
    {
      withCredentials: true,
    }
  );

export const shareNameApi = (name: string) =>
  axios.post(
    `${BASE_URL}/user/shares`,
    { name },
    {
      withCredentials: true,
    }
  );

export const removeUserBookmark = (id: string) =>
  axios.delete(`${BASE_URL}/user/bookmarks/${id}`, {
    withCredentials: true,
  });

export const getUserBookmarks = (page: number, gender: string | null) =>
  axios.get(`${BASE_URL}/user/bookmarks`, {
    params: { gender, limit: 9, page },
    withCredentials: true,
  });

export const getUserSuggestedName = (page: number, gender: string | null) =>
  axios.get(`${BASE_URL}/user/suggestion-names`, {
    params: { gender, limit: 9, page },
    withCredentials: true,
  });

export const createSuggestedName = (data: object) =>
  axios.post(`${BASE_URL}/suggestion-names`, data, {
    withCredentials: true,
  });

export const getAllBlog = (page?: number, limit?: number) =>
  axios.get(`${BASE_URL}/blogs`, {
    params: { limit: limit ? limit : 9, page },
    withCredentials: true,
  });

export const getBlogByID = (id?: string) =>
  axios.get(`${BASE_URL}/blogs/${id}`, {
    withCredentials: true,
  });

export const getBlogBySlug = (slug?: string) =>
  axios.get(`${BASE_URL}/blogs/slug/${slug}`, {
    withCredentials: true,
  });

export const createBlogApi = (data: object) =>
  axios.post(`${BASE_URL}/blogs`, data, {
    withCredentials: true,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const updateBlogApi = (data: object, id: string) =>
  axios.put(`${BASE_URL}/blogs/${id}`, data, {
    withCredentials: true,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteBlogApi = (id: string) =>
  axios.delete(`${BASE_URL}/blogs/${id}`, {
    withCredentials: true,
  });

export const getAllNameForAdmin = (params: string) =>
  axios.get(`${BASE_URL}/names/for-admin?${params}`, {
    params: { limit: 18 },
    withCredentials: true,
  });

export const deleteNameForAdminApi = (id: string) =>
  axios.delete(`${BASE_URL}/names/${id}`, {
    withCredentials: true,
  });

export const editNameForAdminApi = (id: string, data: any) =>
  axios.post(`${BASE_URL}/names/${id}`, data, {
    withCredentials: true,
  });

export const createNameUsingCSV = (data: any) =>
  axios.post(`${BASE_URL}/names/csv/file`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });

export const createNameUsingForm = (data: object) =>
  axios.post(`${BASE_URL}/names`, data, {
    withCredentials: true,
  });

export const getAllRequestedName = (page: number) =>
  axios.get(`${BASE_URL}/suggestion-names`, {
    params: { limit: 9, page },
    withCredentials: true,
  });
export const approveRequestedName = (id: string) =>
  axios.put(
    `${BASE_URL}/suggestion-names/${id}/approve`,
    {},
    {
      withCredentials: true,
    }
  );

export const rejectRequestedName = (id: string) =>
  axios.put(
    `${BASE_URL}/suggestion-names/${id}/reject`,
    {},
    {
      withCredentials: true,
    }
  );

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

export const freeSubscription = async (id: string) =>
  axios.post(
    `${BASE_URL}/subscribe-free-plan`,
    {},
    {
      withCredentials: true,
    }
  );

export const subscribePlan = async (data: {
  plan_id: string;
  user_id: string;
}) =>
  axios.post(`${BASE_URL}/checkout-session`, data, { withCredentials: true });

export const cancelSubscription = async (id: string) =>
  axios.put(
    `${BASE_URL}/cancel-subscription/${id}`,
    {},
    {
      withCredentials: true,
    }
  );

export const sendMessage = (data: ContactParams) =>
  axios.post(`${BASE_URL}/contact-us`, data);

export const newsLetterApi = (data: ContactParams) =>
  axios.post(`${BASE_URL}/subscribe-newsletters`, data);

export const userSearchCount = () =>
  axios.post(
    `${BASE_URL}/search-name-count`,
    {},
    {
      withCredentials: true,
    }
  );

export const getNames = async (params: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/names?${params}&limit=18`, {
      params: {},
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error('Error fetching active plan:', error);
    throw error;
  }
};

export const getAnalytics = (params: string) =>
  axios.get(`${BASE_URL}/analytics?${params}`, {
    params: {},
    withCredentials: true,
  });
