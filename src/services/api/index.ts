import { BASE_URL } from '@/constants';
import { RegisterData, SignInData, UserUpdateData } from '@/types';
import axios from 'axios';

export const userRegister = (data: RegisterData) =>
  axios.post(`${BASE_URL}/auth/signup`, data);

export const userProfileUpdate = (data: UserUpdateData) =>
  axios.put(`${BASE_URL}/users/profile`, data);

export const userLogin = (data: SignInData) =>
  axios.post(`${BASE_URL}/auth/signin`, data);

export const getUserProfile = () => axios.get(`${BASE_URL}/users/profile`);
