import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="bgimg w-full aspect-[27/12]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bgimg2 w-full aspect-[27/12]"></div>
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroSlider;
