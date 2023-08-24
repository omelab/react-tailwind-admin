import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideBar } from '@/components/admin/layout';

export const Admin: React.FC = () => {
  // Auth layout logic here
  return (
    <Fragment>
      <div className='absolute w-full bg-blue-500 dark:hidden min-h-75'></div>
      <SideBar />
      <main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl'>
        <Header />
        <div className='w-full px-6 py-6 mx-auto'>
          <Outlet />
          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default Admin;
