import React from 'react';
import { Con6Wrap } from '../../styled/HomeStyle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
const Con6 = () => {
    return (
        <Con6Wrap>
            <div className="inner">
                <div className='title'>
                    <h2>SNS</h2>
                    <img src="./images/contents/text-follow.png" alt="" />
                    <strong>SALADY</strong>
                    <span className='bar'></span>
                </div>
                <div className="icon">
                    <img src="./images/contents/icon-follow.png" alt="" />
                    <span>FOLLOW</span>
                </div>
                <Swiper className="mySwiper"
                    slidesPerView={4}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={15}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.5, // 2.5개로 변경
                        },
                        768: {
                            slidesPerView: 4, // 4개로 변경
                        }
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide><img src="./images/contents/con6-1.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-2.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-4.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-1.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-2.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/contents/con6-4.png" alt="" /></SwiperSlide>

                </Swiper>
            </div>
            
        </Con6Wrap>
    );
};

export default Con6;