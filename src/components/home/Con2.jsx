import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Con2Wrap } from "../../styled/HomeStyle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { visualArr } from "../../assets/api/visualList";
const Con2 = () => {
    const [list , setList] = useState(visualArr);
    const [num , setNum] = useState(1);
    // console.log(num)
    const settings = {
        slidesToShow: 1,
        infinite: false,
        beforeChange: (current, next) => setNum(next+1)
      };
    return (
        <Con2Wrap>

            <Slider {...settings}>
                {
                    list.map(item=>
                        <div className="swiperList" key={item.id}>
                            <div className='bg'>
                                <img src={item.bgimg} alt="" />
                            </div>
                            
                            <img src={item.centerimg} alt="" className='centerImg' />
                            <div className="text">
                                <em>New Menu</em>
                                <strong>SPRING</strong>
                                <b>HAPPY 2023</b>
                                <p>향긋한 바질과 부드러운 닭가슴살의 만남</p>
                                <div className='morewrap'>
                                    <img src="./images/contents/icon-moreW.png" alt="" />
                                    <span>More</span>
                                </div>
                            </div>

                        </div>
                        
                        )
                }
                
            </Slider>
            <div className="pageNum">
                <span>
                    {num}

                </span>
            </div>
            <div className="cs">
                <ul>
                    <li>
                        <img src="./images/contents/icon-cs.png" alt="" />
                        <span>문의하기</span>
                    </li>
                    <li>
                        <img src="./images/contents/icon-store.png" alt="" />
                        <span>매장찾기</span>
                    </li>
                    <li>
                        <img src="./images/contents/icon-delivery.png" alt="" />
                        <span>배달주문</span>
                    </li>
                </ul>
            </div>
        </Con2Wrap>
    );
};

export default Con2;


