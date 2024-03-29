import React from 'react';
import { useCookies } from 'react-cookie';
import FullScreenLoader from '../../components/common/FullScreenLoader';
import { userApi } from '../../modules/auth/services/userApi';

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(['access_token']);

  const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.access_token,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
