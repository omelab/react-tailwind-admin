import React, { Fragment } from 'react';
import { carousel_1, carousel_2, carousel_3 } from '@/assets/img';

export const Carousel: React.FC = () => {
  return (
    <Fragment>
      <div className='w-full max-w-full px-3 lg:w-5/12 lg:flex-none'>
        <div data-slider='true' className='relative w-full h-full overflow-hidden rounded-2xl'>
          <div data-slider='true' className='absolute w-full h-full transition-all duration-500'>
            <img className='object-cover h-full' src={carousel_1} alt='carousel image' />
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
            <img className='object-cover h-full' src={carousel_2} alt='carousel image' />
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
            <img className='object-cover h-full' src={carousel_3} alt='carousel image' />
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
    </Fragment>
  );
};

export default Carousel;
