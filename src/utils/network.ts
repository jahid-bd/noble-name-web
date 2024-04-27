import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from '@/constants';

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  let token: string | undefined;
  const accessToken = document.cookie;

  if (accessToken) {
    token = accessToken;
  } else {
    token = undefined;
  }

  // Set the authorization header
  token && (client.defaults.headers.common.Authorization = `Bearer ${token}`);

  const onSuccess = (response: AxiosResponse<T>) => {
    return response?.data;
  };

  const onError = (error: any) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
