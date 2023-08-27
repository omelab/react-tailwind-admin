import React, { Fragment, useState } from 'react';
import NavCollaps from '@/components/admin/layout/sidebar/nav_collaps';
import navData from '@/routes/navs.json';

export const NavArea: React.FC = () => {
  const [parentHeight, setParentHeight] = useState<number>(0);

  const handleChildExpand = (childHeight: number) => {
    setParentHeight((prevParentHeight) => prevParentHeight + childHeight);
  };
  return (
    <Fragment>
      <div className='items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full'>
        <ul className='flex flex-col pl-0 mb-0 list-none'>
          {navData &&
            navData.map((data, index) => {
              return (
                <NavCollaps
                  key={index}
                  icon={data.icon}
                  label={data.label}
                  path={data.path}
                  step={1}
                  isSections={data.isSections}
                  childs={data.childs}
                  onChildExpand={handleChildExpand}
                ></NavCollaps>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
};
export default NavArea;
