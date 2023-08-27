import React, { Fragment, useState } from 'react';
import { carousel_1, carousel_2, carousel_3 } from '@/assets/img';

interface SliderItem {
  title: string;
  subtitle: string;
  image: string;
}

export const SlideCarousel: React.FC = () => {
  const [curSlide, setCurSlide] = useState(0);

  const sliderData: SliderItem[] = [
    {
      title: 'Get started with Argon',
      subtitle: 'There’s nothing I really wanted to do in life that I wasn’t able to get good at.',
      image: carousel_1,
    },
    {
      title: 'Get started with Argon',
      subtitle: 'There’s nothing I really wanted to do in life that I wasn’t able to get good at.',
      image: carousel_2,
    },
    {
      title: 'Get started with Argon',
      subtitle: 'There’s nothing I really wanted to do in life that I wasn’t able to get good at.',
      image: carousel_3,
    },
  ];

  const maxSlide = sliderData.length - 1;

  const handleNextSlide = () => {
    if (curSlide === maxSlide) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(maxSlide);
    } else {
      setCurSlide(curSlide - 1);
    }
  };

  return (
    <Fragment>
      <div className='w-full max-w-full px-3 lg:w-5/12 lg:flex-none'>
        <div className='relative w-full h-full overflow-hidden rounded-2xl'>
          {/* Render your slides here */}
          {Array.from(sliderData).map((slide, indx) => (
            <div
              key={indx}
              data-slide={indx}
              style={{ transform: `translateX(${100 * (indx - curSlide)}%)` }}
              className='absolute w-full h-full transition-all duration-500'
            >
              <img className='object-cover h-full' src={slide.image} alt='carousel image' />
              <div className='block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none'>
                  <i className='top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact'></i>
                </div>
                <h5 className='mb-1 text-white'>{slide.title}</h5>
                <p className='dark:opacity-80'>
                  There’s nothing I really wanted to do in life that I wasn’t able to get good at.
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={handlePrevSlide}
            className='absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 fa fa-chevron-right active:scale-110 top-6 right-4'
          ></button>
          <button
            onClick={handleNextSlide}
            className='absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 fa fa-chevron-left active:scale-110 top-6 right-16'
          ></button>
        </div>
      </div>
    </Fragment>
  );
};

export default SlideCarousel;
