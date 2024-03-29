import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
import { SerializedError } from '../interface/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const cookies = new Cookies();

const refreshAccessToken = async () => {
  const refresh_token = cookies.get('refresh_token'); // Assuming you have a refresh token stored

  if (refresh_token) {
    try {
      const refreshResponse = await fetch(`${BASE_URL}/api/auth/refresh`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + refresh_token,
        },
        // body: JSON.stringify({ refresh_token }),
      });

      const refreshData = await refreshResponse.json();

      if (refreshResponse.ok) {
        const { accessToken, refreshToken } = refreshData;
        cookies.set('access_token', accessToken, { path: '/' }); // Update the access token
        cookies.set('refresh_token', refreshToken, { path: '/' }); // Update the access token
        return accessToken;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      // Handle token refresh error if needed
      throw error;
    }
  }
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  prepareHeaders: (headers) => {
    //get header form cookies
    const token = cookies.get('access_token');
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const simpleBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | SerializedError
> = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions);

  if (response.error && response.error.status === 'PARSING_ERROR') {
    window.location.href = `/404`;
  }

  if (response.error && response.error.status === 401) {
    try {
      // Attempt to refresh the access token
      const newAccessToken = await refreshAccessToken();
      console.log(newAccessToken);

      if (newAccessToken) {
        // Retry the original request with the new access token
        response = await baseQuery(args, api, extraOptions);
      } else {
        // cookies.remove('access_token');
        // cookies.remove('refresh_token');
        // window.location.href = `/login`;
      }
    } catch (error) {
      // cookies.remove('access_token');
      // cookies.remove('refresh_token');
      // window.location.href = `/login`;
    }
  }

  return response;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: simpleBaseQuery,
  keepUnusedDataFor: 0,
  tagTypes: [],
  endpoints: () => ({}),
});

export default baseApi;
