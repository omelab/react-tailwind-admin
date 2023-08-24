import React from 'react';
import { Outlet } from 'react-router-dom';

export const Frontend: React.FC = () => {
  // Auth layout logic here
  return (
    <div className='auth-layout'>
      <Outlet />
    </div>
  );
};

export default Frontend;
