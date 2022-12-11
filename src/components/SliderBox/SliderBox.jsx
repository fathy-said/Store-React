import React from 'react';
import "./SliderBox.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import img1 from "../../assets/pexels-helena-lopes-933964.jpg"
import img2 from "../../assets/pexels-pixabay-50987.jpg"
import img3 from "../../assets/pexels-vlad-bagacian-1028441.jpg"
const SliderBox = () => {
  return (
    <>
      <Swiper className="mySwiper"
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}

      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default SliderBox;
