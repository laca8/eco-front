import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const SliderCategory = () => {
  return (
   <div>
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
        <SwiperSlide className='h-36 border-2 hover:bg-red-800 hover:text-white transition duration-200 ease-in-out'>
          <div>
          <p>
          icons
          </p>
          </div>
        
       
         
        </SwiperSlide>
        <SwiperSlide className='h-36 border-2'>
          <p>
          icons
          </p>
       
         
        </SwiperSlide>
        <SwiperSlide className='h-36 border-2'>
          <p>
          icons
          </p>
       
         
        </SwiperSlide>
        <SwiperSlide className='h-36 border-2'>
          <p>
          icons
          </p>
       
         
        </SwiperSlide>
        <SwiperSlide className='h-36 border-2' >
          <p>
          icons
          </p>
       
         
        </SwiperSlide>
        <SwiperSlide className='h-36 border-2' >
          <p>
          icons
          </p>
       
         
        </SwiperSlide>
      </Swiper>
   </div>
  )
}

export default SliderCategory