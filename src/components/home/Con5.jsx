import React from 'react';
import { Con5Wrap } from '../../styled/HomeStyle';

const Con5 = () => {
    return (
        <Con5Wrap>
            <img src="./images/contents/con5-bannerTop.png" alt="" className='bannerTop'/>

            <div className="food1">
                <img src="./images/contents/con4-food1.png" alt="" />
                <img src="./images/contents/con4-food1-1.png" alt=""  className='minW1024'/>
                <img src="./images/contents/con4-food1-2.png" alt=""  className='minW1024'/>
            </div>
            <div className="food2">
                <img src="./images/contents/con4-food2.png" alt="" />
            </div>
            <div className="food3">
                <img src="./images/contents/con4-food3-1.png" alt=""/>
                <img src="./images/contents/con4-food3.png" alt="" />
            </div>
            <div className="text">
                <h2>BRAND STORY</h2>
                <strong>음식을 통해 사람들의 삶을<br/>즐겁고 건강하게 만든다</strong>
                <p>샐러디는 이제 웜볼, 랩, 샌드위치 등 더욱 다양한 메뉴군과 함께,<br/> 샐러드 전문점을 넘어 건강한 패스트푸드로 도약하고자 합니다.</p>
                <p className='maxW1023'>더 맛있고 건강한 메뉴들로 보다 많은 사람들에게<br className='maxW767'/> 즐거움과 건강함을 선사하는 브랜드가 되겠습니다.</p>
                <div className="more">
                    <img src="./images/contents/icon-more.png" alt="" />
                    <span>More</span>
                </div>
            </div>
            <img src="./images/contents/con5-banner.png" alt="" className='banner'/>
            <img src="./images/contents/con5-bannerBottom.png" alt="" className='bannerBottom'/>

        </Con5Wrap>
    );
};

export default Con5;