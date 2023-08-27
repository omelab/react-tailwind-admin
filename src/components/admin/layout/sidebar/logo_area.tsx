import React, { Fragment } from 'react';
import { logo_ct_dark, logo_ct } from '@/assets/img';

export const LogoArea: React.FC = () => {
  return (
    <Fragment>
      <div className='h-19'>
        <i
          className='absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden'
          sidenav-close='true'
        ></i>
        <a
          className='block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700'
          href='#'
          target='_blank'
        >
          <img
            src={logo_ct_dark}
            className='inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8'
            alt='main_logo'
          />
          <img
            src={logo_ct}
            className='hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8'
            alt='main_logo'
          />
          <span className='ml-1 font-semibold transition-all duration-200 ease-nav-brand'>
            Argon Dashboard 2
          </span>
        </a>
      </div>
      <hr className='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent' />
    </Fragment>
  );
};
export default LogoArea;
