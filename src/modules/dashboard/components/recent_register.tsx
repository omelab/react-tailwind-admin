import React, { Fragment } from 'react';
import { flags_US, flags_DE, flags_GB, flags_BR } from '@/assets/img';
export const RecentRegister: React.FC = () => {
  return (
    <Fragment>
      <div className='w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none'>
        <div className='relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border'>
          <div className='p-4 pb-0 mb-0 rounded-t-4'>
            <div className='flex justify-between'>
              <h6 className='mb-2 dark:text-white'>Sales by Country</h6>
            </div>
          </div>
          <div className='overflow-x-auto'>
            <table className='items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40'>
              <tbody>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40'>
                    <div className='flex items-center px-2 py-1'>
                      <div>
                        <img src={flags_US} alt='Country flag' />
                      </div>
                      <div className='ml-6'>
                        <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                          Country:
                        </p>
                        <h6 className='mb-0 text-sm leading-normal dark:text-white'>
                          United States
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Sales:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>2500</h6>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Value:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>$230,900</h6>
                    </div>
                  </td>
                  <td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='flex-1 text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Bounce:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>29.9%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40'>
                    <div className='flex items-center px-2 py-1'>
                      <div>
                        <img src={flags_DE} alt='Country flag' />
                      </div>
                      <div className='ml-6'>
                        <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                          Country:
                        </p>
                        <h6 className='mb-0 text-sm leading-normal dark:text-white'>Germany</h6>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Sales:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>3.900</h6>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Value:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>$440,000</h6>
                    </div>
                  </td>
                  <td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='flex-1 text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Bounce:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>40.22%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40'>
                    <div className='flex items-center px-2 py-1'>
                      <div>
                        <img src={flags_GB} alt='Country flag' />
                      </div>
                      <div className='ml-6'>
                        <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                          Country:
                        </p>
                        <h6 className='mb-0 text-sm leading-normal dark:text-white'>
                          Great Britain
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Sales:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>1.400</h6>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Value:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>$190,700</h6>
                    </div>
                  </td>
                  <td className='p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40'>
                    <div className='flex-1 text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Bounce:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>23.44%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap'>
                    <div className='flex items-center px-2 py-1'>
                      <div>
                        <img src={flags_BR} alt='Country flag' />
                      </div>
                      <div className='ml-6'>
                        <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                          Country:
                        </p>
                        <h6 className='mb-0 text-sm leading-normal dark:text-white'>Brasil</h6>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Sales:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>562</h6>
                    </div>
                  </td>
                  <td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
                    <div className='text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Value:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>$143,960</h6>
                    </div>
                  </td>
                  <td className='p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap'>
                    <div className='flex-1 text-center'>
                      <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                        Bounce:
                      </p>
                      <h6 className='mb-0 text-sm leading-normal dark:text-white'>32.14%</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecentRegister;
