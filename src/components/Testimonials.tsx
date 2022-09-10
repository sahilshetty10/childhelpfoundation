import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div className="flex p-4 justify-center items-center space-x-2">
      <button className="text-xl font-bold" id="prev">
        {"<"}
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <p className="text-center px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis unde
            nostrum delectus deleniti error rerum?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis unde
            nostrum delectus deleniti error rerum?
          </p>
        </SwiperSlide>
      </Swiper>
      <button className="text-xl font-bold" id="next">
        {">"}
      </button>
    </div>
  );
};
export default Testimonials;
