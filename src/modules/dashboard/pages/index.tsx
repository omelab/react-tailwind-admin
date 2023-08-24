import React, { Fragment } from 'react';

export const DashboardPage: React.FC = () => {
  return (
    <Fragment>
      <div className='flex flex-wrap -mx-3'>
        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
                      Today's Money
                    </p>
                    <h5 className='mb-2 font-bold dark:text-white'>$53,000</h5>
                    <p className='mb-0 dark:text-white dark:opacity-60'>
                      <span className='text-sm font-bold leading-normal text-emerald-500'>
                        +55%
                      </span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500'>
                    <i className='ni leading-none ni-money-coins text-lg relative top-3.5 text-white'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
                      Today's Users
                    </p>
                    <h5 className='mb-2 font-bold dark:text-white'>2,300</h5>
                    <p className='mb-0 dark:text-white dark:opacity-60'>
                      <span className='text-sm font-bold leading-normal text-emerald-500'>+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600'>
                    <i className='ni leading-none ni-world text-lg relative top-3.5 text-white'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
                      New Clients
                    </p>
                    <h5 className='mb-2 font-bold dark:text-white'>+3,462</h5>
                    <p className='mb-0 dark:text-white dark:opacity-60'>
                      <span className='text-sm font-bold leading-normal text-red-600'>-2%</span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400'>
                    <i className='ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60'>
                      Sales
                    </p>
                    <h5 className='mb-2 font-bold dark:text-white'>$103,430</h5>
                    <p className='mb-0 dark:text-white dark:opacity-60'>
                      <span className='text-sm font-bold leading-normal text-emerald-500'>+5%</span>
                      than last month
                    </p>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500'>
                    <i className='ni leading-none ni-cart text-lg relative top-3.5 text-white'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-6 -mx-3'>
        <div className='w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none'>
          <div className='border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
            <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0'>
              <h6 className='capitalize dark:text-white'>Sales overview</h6>
              <p className='mb-0 text-sm leading-normal dark:text-white dark:opacity-60'>
                <i className='fa fa-arrow-up text-emerald-500'></i>
                <span className='font-semibold'>4% more</span> in 2021
              </p>
            </div>
            <div className='flex-auto p-4'>
              <div>
                <canvas id='chart-line' height='300'></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 lg:w-5/12 lg:flex-none'>
          <div data-slider='true' className='relative w-full h-full overflow-hidden rounded-2xl'>
            <div data-slider='true' className='absolute w-full h-full transition-all duration-500'>
              <img
                className='object-cover h-full'
                src='./assets/img/carousel-1.jpg'
                alt='carousel image'
              />
              <div className='block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none'>
                  <i className='top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact'></i>
                </div>
                <h5 className='mb-1 text-white'>Get started with Argon</h5>
                <p className='dark:opacity-80'>
                  There’s nothing I really wanted to do in life that I wasn’t able to get good at.
                </p>
              </div>
            </div>

            <div data-slider='true' className='absolute w-full h-full transition-all duration-500'>
              <img
                className='object-cover h-full'
                src='./assets/img/carousel-2.jpg'
                alt='carousel image'
              />
              <div className='block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none'>
                  <i className='top-0.75 text-xxs relative text-slate-700 ni ni-bulb-61'></i>
                </div>
                <h5 className='mb-1 text-white'>Faster way to create web pages</h5>
                <p className='dark:opacity-80'>
                  That’s my skill. I’m not really specifically talented at anything except for the
                  ability to learn.
                </p>
              </div>
            </div>

            <div data-slider='true' className='absolute w-full h-full transition-all duration-500'>
              <img
                className='object-cover h-full'
                src='./assets/img/carousel-3.jpg'
                alt='carousel image'
              />
              <div className='block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none'>
                  <i className='top-0.75 text-xxs relative text-slate-700 ni ni-trophy'></i>
                </div>
                <h5 className='mb-1 text-white'>Share with us your design tips!</h5>
                <p className='dark:opacity-80'>
                  Don’t be afraid to be wrong because you can’t learn anything from a compliment.
                </p>
              </div>
            </div>

            <button
              btn-next
              className='absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 fa fa-chevron-right active:scale-110 top-6 right-4'
            ></button>
            <button
              btn-prev
              className='absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 fa fa-chevron-left active:scale-110 top-6 right-16'
            ></button>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-6 -mx-3'>
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
                          <img src='./assets/img/icons/flags/US.png' alt='Country flag' />
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
                          <img src='./assets/img/icons/flags/DE.png' alt='Country flag' />
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
                          <img src='./assets/img/icons/flags/GB.png' alt='Country flag' />
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
                          <img src='./assets/img/icons/flags/BR.png' alt='Country flag' />
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
      </div>
    </Fragment>
  );
};

export default DashboardPage;
