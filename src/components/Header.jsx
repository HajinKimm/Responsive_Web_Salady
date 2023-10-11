import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from '../styled/HomeStyle';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to='/'><img src="./images/main/logo.png" alt="" /></Link></h1>
                <nav>
                    <ul>
                        <li>브랜드</li>
                        <li>메뉴</li>
                        <li>영양정보</li>
                        <li>매장</li>
                        <li>새소식</li>
                    </ul>
                </nav>
                <span>프랜차이즈</span>
            </div>

        </HeaderWrap>
    );
};

export default Header;