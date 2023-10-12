import React from 'react';
import { FooterWrap } from '../styled/HomeStyle';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <div className='logo'>

                    <img src="./images/main/logo.png" alt="" />
                </div>
                <div className="info">
                    <ul>
                        <li>제휴/제안 문의</li>
                        <li>가맹문의</li>
                        <li>서비스이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                    <p>회사명 : ㈜샐러디</p>
                    <p>사업자등록번호 : 681-86-00031</p>
                    <p className='COPYRIGHT'>COPYRIGHT(C) 2022 ㈜샐러디. CO.LTD ALL RIGHT RESERVED.</p>
                </div>
                <div className='cs'>
                    <ul>
                        <li>고객문의</li>
                        <li className='bord'>채널톡</li>
                        <li className='bord'>FAQ</li>
                    </ul>
                </div>
                <div className='top' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>
                    <span>top</span>
                    <img src="./images/main/icon-top.png" alt="" />
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;