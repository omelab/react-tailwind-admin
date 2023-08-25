import React, { Fragment } from 'react';
import {
  // Carousel,
  RecentRegister,
  SalesOverview,
  TopSection,
  AreaWisePatient,
} from '@/modules/dashboard/components';

export const DashboardPage: React.FC = () => {
  return (
    <Fragment>
      <TopSection />

      <div className='flex flex-wrap mt-6 -mx-3'>
        <SalesOverview />
        {/* <Carousel /> */}
      </div>

      <div className='flex flex-wrap mt-6 -mx-3'>
        <RecentRegister />
        <AreaWisePatient />
      </div>
    </Fragment>
  );
};

export default DashboardPage;
