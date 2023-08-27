import React, { Fragment } from 'react';
import {
  SlideCarousel,
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
        <SlideCarousel />
      </div>

      <div className='flex flex-wrap mt-6 -mx-3'>
        <RecentRegister />
        <AreaWisePatient />
      </div>
    </Fragment>
  );
};

export default DashboardPage;
