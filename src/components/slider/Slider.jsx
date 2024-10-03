import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <div className='container'>
      <div className='flex flex-row justify-between h-80 mt-10 mb-8'> 

     
         <div className='flex flex-col justify-between w-full pl-3 font-bold'>
         <span className=''>
                Woman's fashion
            </span>
            <span className=''>
                Men's fashion
            </span>
            <span className=''>
              Electronics
            </span>
            <span className=''>
            Men's fashion
               
            </span>
            <span className=''>
            Men's fashion
              
            </span>
            <span className=''>
            Men's fashion
           
            </span>
         </div>
        
        <div className='flex-grow-1   w-3/4'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-3/4"
      >
        <SwiperSlide>
          <img className='w-full h-full ' src='https://imgsrv2.voi.id/DgHeClSUq57_mrw7LL_d0Lh_T43uLMFRTNIfbdi0agk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNTg2MTYvMjAyNDAyMjAyMjQxLW1haW4uY3JvcHBlZF8xNzA4NDQzNzEwLmpwZWc.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3av_GvbqWeYIstLV-3nNeqo2jU9bh9y3qZP8FnJU_1WVcnkIhSSg25dV3XtEE1Mo7Ey8&usqp=CAU'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZUouOk48cKeMMGO6axPhjB0xcXCc1d_kIfLffqwt7V5oIPTEA_mwzopWV1SvN_z2Hqs&usqp=CAU' />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        

        </div>
        </div>
        </div>
  )
}

export default Slider