import React from 'react';
import { Con4Wrap } from '../../styled/HomeStyle';

const Con4 = () => {
    return (
        <Con4Wrap>
            <div className='bg'></div>
            <div className="inner">
                <h2>ALL MENU</h2>
                <ul>
                    <li>웜볼</li>
                    <li>샐러디</li>
                    <li>샌드</li>
                    <li>랩/웜랩</li>
                </ul>
                <div className='content'>
                    <div className='desc'>
                        <h4>바질치킨 랩</h4>
                        <p>또띠아 안에 향긋한 바질페스토와<br/>담백한 닭가슴살을 넣어 만든 산뜻한 맛</p>
                        <div className='morewrap'>
                            <img src="./images/contents/icon-more.png" alt="" />
                            <span>More</span>
                        </div>
                    </div>
                    <div className='imgbox'>
                        <img src="./images/contents/chichenRap.png" alt="" />
                    </div>
                </div>
                <div className="btnWrap">
                    <img src="./images/contents/icon-line.png" alt="" className='prevBtn btn'/>
                    <img src="./images/contents/icon-line.png" alt="" className='nextBtn btn'/>
                </div>
            </div>
        </Con4Wrap>
    );
};

export default Con4;