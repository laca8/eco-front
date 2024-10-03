import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const SliderToday = () => {
  return (
    <div className='slider-today'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='group'>
            <img className='h-3/4 relative hover:block' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full'>
                &
            </p>
            <p className='bg-white p-1 rounded-md'>
                $
            </p>
            </div>
          

          </div>
          <div className='invisible transition-all group-2'>
            <button className='bg-black transition-all text-white p-1 w-full' >Add To Cart</button>
          </div>
            <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>
         
        </SwiperSlide>
        <SwiperSlide>
        <div className='group'>
            <img className='h-3/4 relative hover:block' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full'>
                &
            </p>
            <p className='bg-white p-1 rounded-md'>
                $
            </p>
            </div>
          

          </div>
          <div className='invisible transition-all group-2'>
            <button className='bg-black transition-all  text-white p-1 w-full' >Add To Cart</button>
          </div>
          <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
      slide3
        </SwiperSlide>
        <SwiperSlide>
        slide4
        </SwiperSlide>
        <SwiperSlide>
        slide5
        </SwiperSlide>
        <SwiperSlide>
     
        </SwiperSlide>
        <SwiperSlide>
       
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderToday