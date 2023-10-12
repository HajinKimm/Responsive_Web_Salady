import React, { Component } from "react";
import Slider from "react-slick";
import { Con3Wrap } from "../../styled/HomeStyle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Con3 = () => {
    const settings = {
        slidesToShow: 4,
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1023,
                settings: {
                    slidesToShow:2 
                } 
            },
            { 
                breakpoint: 767,
                settings: {	
                    slidesToShow:3
                } 
            }
        ]
      };
    return (
        <Con3Wrap>
            <div className="inner">

            <h2>BEST MENU</h2>
            <Slider {...settings}>
                <div className="conbox">
                    <div className='bg'><img src="./images/contents/con3-bg1.png" alt="" /></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food1.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>칠리베이컨 웜볼</h4>
                        <p>매콤달콤한 감칠맛이 매력적인<br />샐러디 NO.1 베스트 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food2.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>멕시칸 랩</h4>
                        <p>또띠아 속 바삭한 나쵸와 고소한 비프가<br/>어우러진 샐러디 스테디 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food3.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>탄단지 샐러디</h4>
                        <p>탄수화물, 단백질, 지방을 골고루 채운<br/>샐러디 스테디 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food4.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>우삼겹메밀면 샐러디</h4>
                        <p>육즙가득 우삼겹과 탱글한 메밀면의 완벽 밸런스</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food1.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>칠리베이컨 웜볼</h4>
                        <p>매콤달콤한 감칠맛이 매력적인<br />샐러디 NO.1 베스트 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food2.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>멕시칸 랩</h4>
                        <p>또띠아 속 바삭한 나쵸와 고소한 비프가<br/>어우러진 샐러디 스테디 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food3.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>탄단지 샐러디</h4>
                        <p>탄수화물, 단백질, 지방을 골고루 채운<br/>샐러디 스테디 메뉴</p>
                    </div>
                </div>
                <div className="conbox">
                    <div className='bg'></div>
                    <div className='imgbox'>
                        <img src="./images/contents/con3-food4.png" alt="" />
                    </div>
                    <div className='text'>
                        <h4>우삼겹메밀면 샐러디</h4>
                        <p>육즙가득 우삼겹과 탱글한 메밀면의 완벽 밸런스</p>
                    </div>
                </div>


            </Slider>
            </div>
        </Con3Wrap>
    );
};

export default Con3;


