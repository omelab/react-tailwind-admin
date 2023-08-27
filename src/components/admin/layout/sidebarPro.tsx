import React from 'react';
import { LogoArea, NavArea } from './sidebar';

export const SideBarPro: React.FC = () => {
  // Auth layout logic here
  return (
    <aside
      className='fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0'
      aria-expanded='false'
    >
      <LogoArea />
      <NavArea />
    </aside>
  );
};

export default SideBarPro;
