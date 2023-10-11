import React from 'react';
import { Con6Wrap } from '../../styled/HomeStyle';

const Con6 = () => {
    return (
        <Con6Wrap>
            <img src="./images/contents/con5-banner.png" alt="" className='banner'/>
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
                <ul>
                    <li><img src="./images/contents/con6-1.png" alt="" /></li>
                    <li><img src="./images/contents/con6-2.png" alt="" /></li>
                    <li><img src="./images/contents/con6-3.png" alt="" /></li>
                    <li><img src="./images/contents/con6-4.png" alt="" /></li>
                </ul>

            </div>
            
        </Con6Wrap>
    );
};

export default Con6;