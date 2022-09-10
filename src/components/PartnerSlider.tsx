import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const partnerSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesPerGroup={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="h-[150px] text-center flex justify-center items-center">
          Partner 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 5
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 6
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 7
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 8
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[150px] te flex justify-center items-center">
          Partner 9
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default partnerSlider;
