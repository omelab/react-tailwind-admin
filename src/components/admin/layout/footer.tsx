import React from 'react';

export const Footer: React.FC = () => {
  // Auth layout logic here
  return (
    <footer className='pt-4'>
      <div className='w-full px-6 mx-auto'>
        <div className='flex flex-wrap items-center -mx-3 lg:justify-between'>
          <div className='w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none'>
            <div className='text-sm leading-normal text-center text-slate-500 lg:text-left'>
              ©<script>document.write(new Date().getFullYear() + ",");</script>
              made with <i className='fa fa-heart'></i> by
              <a href='#' className='font-semibold text-slate-700 dark:text-white' target='_blank'>
                Creative Tim
              </a>
              for a better web.
            </div>
          </div>
          <div className='w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none'>
            <ul className='flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end'>
              <li className='nav-item'>
                <a
                  href='#'
                  className='block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500'
                  target='_blank'
                >
                  Creative Tim
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500'
                  target='_blank'
                >
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500'
                  target='_blank'
                >
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  className='block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500'
                  target='_blank'
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
