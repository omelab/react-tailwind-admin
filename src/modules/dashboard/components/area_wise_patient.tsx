import React, { Fragment } from 'react';

export const AreaWisePatient: React.FC = () => {
  return (
    <Fragment>
      <div className='w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none'>
        <div className='border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
          <div className='p-4 pb-0 rounded-t-4'>
            <h6 className='mb-0 dark:text-white'>Categories</h6>
          </div>
          <div className='flex-auto p-4'>
            <ul className='flex flex-col pl-0 mb-0 rounded-lg'>
              <li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit'>
                <div className='flex items-center'>
                  <div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
                    <i className='text-white ni ni-mobile-button relative top-0.75 text-xxs'></i>
                  </div>
                  <div className='flex flex-col'>
                    <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                      Devices
                    </h6>
                    <span className='text-xs leading-tight dark:text-white/80'>
                      250 in stock, <span className='font-semibold'>346+ sold</span>
                    </span>
                  </div>
                </div>
                <div className='flex'>
                  <button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
                    <i
                      className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
                      aria-hidden='true'
                    ></i>
                  </button>
                </div>
              </li>
              <li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit'>
                <div className='flex items-center'>
                  <div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
                    <i className='text-white ni ni-tag relative top-0.75 text-xxs'></i>
                  </div>
                  <div className='flex flex-col'>
                    <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                      Tickets
                    </h6>
                    <span className='text-xs leading-tight dark:text-white/80'>
                      123 closed, <span className='font-semibold'>15 open</span>
                    </span>
                  </div>
                </div>
                <div className='flex'>
                  <button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
                    <i
                      className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
                      aria-hidden='true'
                    ></i>
                  </button>
                </div>
              </li>
              <li className='relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-b-lg rounded-xl text-inherit'>
                <div className='flex items-center'>
                  <div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
                    <i className='text-white ni ni-box-2 relative top-0.75 text-xxs'></i>
                  </div>
                  <div className='flex flex-col'>
                    <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                      Error logs
                    </h6>
                    <span className='text-xs leading-tight dark:text-white/80'>
                      1 is active, <span className='font-semibold'>40 closed</span>
                    </span>
                  </div>
                </div>
                <div className='flex'>
                  <button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
                    <i
                      className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
                      aria-hidden='true'
                    ></i>
                  </button>
                </div>
              </li>
              <li className='relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit'>
                <div className='flex items-center'>
                  <div className='inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl'>
                    <i className='text-white ni ni-satisfied relative top-0.75 text-xxs'></i>
                  </div>
                  <div className='flex flex-col'>
                    <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                      Happy users
                    </h6>
                    <span className='text-xs leading-tight dark:text-white/80'>
                      <span className='font-semibold'>+ 430 </span>
                    </span>
                  </div>
                </div>
                <div className='flex'>
                  <button className='group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white'>
                    <i
                      className='ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200'
                      aria-hidden='true'
                    ></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AreaWisePatient;
