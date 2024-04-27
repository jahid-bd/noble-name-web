import { BASE_URL } from '@/constants';
import { RegisterData, SignInData, UserUpdateData } from '@/types';
import axios from 'axios';
import Cookies from 'js-cookie';

export const userRegister = (data: RegisterData) =>
  axios.post(`${BASE_URL}/auth/signup`, data);

const authToken = Cookies.get('auth_token');

export const userProfileUpdate = (data: UserUpdateData) =>
  axios.put(`${BASE_URL}/users/profile`, data, { withCredentials: true });

export const userLogin = (data: SignInData) =>
  axios.post(`${BASE_URL}/auth/signin`, data);
