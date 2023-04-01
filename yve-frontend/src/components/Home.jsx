import { Swiper, SwiperSlide } from 'swiper/react';
import Video1 from '../assets/vid1.mp4'
import Video2 from '../assets/vid2.mp4'
// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <div className="container">
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><video
      src={Video2}
      autoPlay
      loop
      muted
      ></video></SwiperSlide>
            <SwiperSlide><video
      src={Video1}
      autoPlay
      loop
      muted
      ></video></SwiperSlide>
    </Swiper>
    
    </div>
  )
}
