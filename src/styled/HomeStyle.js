import styled from "styled-components";
const inner = {
    width:'1400px',
    position:'relative',
    boxSizing:'border-box',
    margin:'auto'
}
const colorOrange= '#EE7725'
const colorGreen= '#17633D'
export const HeaderWrap = styled.header`
    .inner{
        ${inner}
        height: 100px;

        h1{
            position: absolute;
            top: 50%; transform: translateY(-50%);
            left: 43px;
        }
        ul{
            position: absolute;
            top: 50%; transform: translateY(-50%);
            left: 400px;
            display: flex;
            li{
                margin-right: 95px;
                font-size: 22px;
                font-weight: 600;
                cursor: pointer;
            }
        }
        .allMenu{
            display: none;
        }
        span{
            display: block;
            background: ${colorOrange};
            width: 177px;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            border-radius: 25px;
            position: absolute;
            top: 50%; transform: translateY(-50%);
            right: -23px;
            cursor: pointer;
        }
    }
    @media screen and (max-width:1023px) {
        .inner{
            width: 100%;
            height: 10.2639vw;
            h1{
                left: 6.1584vw;
            }
            ul{
                left: 27.8592vw;
                li{
                    font-size: 1.7595vw;
                }
            }
            
            span{
                display: none;
            }
        }
        
    }
    @media screen and (max-width:767px) {
        .inner{
            height: 8.4746vw;
            h1{
                left: 9.6480vw;
                img{
                    width: 6.5189vw;
                }
            }
            ul{
                display: none;
            }
            .allMenu{
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 2.9326vw;
                font-size: 2.9326vw;
            }
        }
    }

`
export const FooterWrap = styled.footer`
    background: #D9D9D9;
    .inner{
        ${inner}
        height: 400px;

        .logo{
            position: absolute;
            left: 0px;
            top: 54px;
            
        }
        .info{
            position: absolute;
            left: 15px;
            top: 180px;
            ul{
                display: flex;
                margin-bottom:20px;
                li{
                    margin-right: 50px;
                    font-weight: 500;
                }
            }
            p.COPYRIGHT{
                margin-top: 47px;
            }
        }
        .cs{
            position: absolute;
            left: 693px;
            top: 187px;
            ul{
                display: flex;
                li{
                    line-height: 25px;
                    font-size: 20px;
                    margin-right: 30px;
                    font-weight: 500;
                    &.bord{
                        font-size: 25px;
                        font-weight: 700;
                    }
                }
            }
        }

        .top{
            cursor: pointer;
            width: 120px;
            position: absolute;
            top: 113px;
            right: 67px;
            span{
                text-align: center;
                font-weight: 700;
                display: block;
                margin-bottom: 15px;
                text-transform: uppercase;
            }
            img{
                width: 120px;
            }
        }
    }
    
    @media screen and (max-width:1023px) {
        .inner{
            width: 100%;
            height: 61.5836vw;
            .cs{
                top: 9.7752vw;
                left: 6.2561vw;
            }
            .logo{
            left: 6.2561vw;
            top: 23.4604vw;
            img{
                width: 12.1212vw;
            }
            }
            .info{
                left: 6.2561vw;
                top: 36.6569vw;

                ul{
                    display: flex;
                    margin-bottom:1.9550vw;
                    li{
                        margin-right: 4.8876vw;
                        font-weight: 500;
                    }
                }
                p.COPYRIGHT{
                    margin-top: 4.5943vw;
                }
            }
            .top{
                top: 29.3255vw;
                right: 7.3314vw;
                span{
                    text-align: center;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 1.4663vw;
                    text-transform: uppercase;
                }
                img{
                }
            }
        }
    }
    @media screen and (max-width:767px){
        .inner{
            height: 600px;
            .top{
                top: auto;
                bottom: 70px;
                left: 600px;
                span{
                    text-align: center;
                }
            }
            .info{
                ul{
                    margin-bottom: 40px;
                }
                p.COPYRIGHT{
                    margin-top: 65px;
                }

            }
        }
    }
`


export const Con2Wrap = styled.section`
    
    position: relative;
    height: 940px;
    overflow: hidden;
    width: 100%;
    .slick-prev{
        z-index: 10;
    }
    .slick-prev:before{
        content: url(./images/contents/PREV.png);
        background: #000;
        position: absolute;
        bottom: -460px;
        left: 827px;
        width: 150px;
        height: 80px;
        border-radius: 100% 0% 0% 0%;
        padding-top: 40px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .slick-next:before{
        content: url(./images/contents/NEXT.png);
        background: #000;
        position: absolute;
        bottom: -460px;
        right: auto;
        left: -956px;

        width: 150px;
        height: 80px;
        border-radius: 0% 100% 0% 0%;
        padding-top: 40px;
        padding-left: 0px;
        box-sizing: border-box;
    }

    .swiperList{
        width: 100%;
        
        .item{
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            .bg{
                width: 50%;
                /* overflow: hidden; */
                .bgbox{
                    background-repeat: no-repeat;
                    background-position: 70% 0%;
                    background-size:cover; 
                    width: 990px;
                    height: 940px;
                }
                img{
                    vertical-align: top;
                    z-index: 20;
                }
                .centerImg{
                       position: absolute;
                       top: 50%;
                       left: 50%;
                       transform: translate(-50%, -50%);
                }
            }
            .text{
                z-index: 10;
                background: ${colorGreen};
                width: 50%;
                padding: 280px 0px 0px 220px;
                color: white;
                em{
                    font-size: 22px;
                }
                strong{
                    margin-top: 20px;
                    display: block;
                    font-size: 100px;
                    line-height: 1;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                b{
                    font-size: 40px;
                }
                p{
                    margin-top: 30px;
                    margin-bottom: 30px;
                    font-size: 18px;
                }
                .morewrap{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    img{
                        height: 65px;
                    }
                    span{
                        display: inline-block;
                        padding-left: 15px;
                    }
                }
            }
        }
    }
    .cs{
        position: absolute;
        top: 310px;
        right: 75px;
        img{
            width: 60px;
            cursor: pointer;
        }
        span{
            cursor: pointer;
            display: block;
            text-align: center;
            color: white;
            margin-top: 13px;
            margin-bottom: 27px;
        }
    }
    .pageNum{
        position: absolute;
        bottom: 40px;
        /* left: 925px; */
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        span{
            text-align: center;
            line-height: 65px;
            display: block;
            width: 65px;
            height: 65px;
            font-size: 25px;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 50%;
        }
    }
    @media screen and (max-width:1023px){
        width: 100%;
        height: 785px;
        .cs{
            display: none;
        }
        .swiperList{
            .item{

                .bg{
                    .bgbox{
                        background-position: 140% 0;
    
                    }
                    .centerImg{
                        transform: scale(0.75) translate(-50%, -70%);
                        transform-origin: 0 0;
                    }
                }
                .text{
                    padding: 240px 0px 0px 110px;
                    em{
                        font-size: 16px;
                    }
                    strong{
                        margin-top: 10px;
                        font-size: 50px;
                        margin-bottom: 5px;
                    }
                    b{
                        font-size: 30px;
                    }
                    p{
                        font-size: 16px;
                        margin-top: 15px;
                        margin-bottom: 85px;
                    }
                }
            }
        }
        .slick-prev:before{
            bottom: -300px;
            left: 379px;
        }
        .slick-next:before{
            bottom: -300px;
            left: -507px;
        }
    }
    @media screen and (max-width:767px){
        .slick-prev:before, .slick-next:before{
            display: none;
        }
        .pageNum{
            display: none;
        }
        .swiperList{
            .item{
                .bg{
                    .bgbox{
                        background-position: 150% 0;
                    }
                    .centerImg{
                        display: none;
                    }
                }
                .text{
                    em, strong, b, p, .morewrap{
                        
                        display: none;
                    }
                }
            }
        }
    }
`

export const Con3Wrap = styled.section`
background: #F3F3F3;
position: relative;
    .inner{
        ${inner}
    }
    .slick-prev:before{
        content: url(./images/contents/icon-line.png);
        transform: scale(0.5) ;
        position: absolute;
        top: -50px;
        left: -100px;
    }
    .slick-next:before{
        content: url(./images/contents/icon-lineR.png);
        transform: scale(0.5) ;
        position: absolute;
        top: -50px;
        left: 0px;
    }
    h2{
        font-size: 40px;
        font-weight: 700;
        position: relative;
        text-align: center;
        padding-top: 80px;
        margin-bottom: 110px;
        &::after{
            content: "";
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 228px;
            height: 4px;
            background: ${colorOrange};
        }
    }
    .conbox{
        margin-bottom: 100px;
        position: relative;
        width: 332px;
        .bg{
            width: 332px;
            height: 322px;
            background: ${colorGreen};
            border-radius: 50% 50% 0% 0%;
            margin-bottom: 90px;
            img{
                        width: 100%;
                    }
        }
        .imgbox{
            position: absolute;
            top: 130px;
            left: 40px;
        }
        .text{
            text-align: center;
            h4{
                font-weight: 600;
                font-size: 25px;
                margin-bottom: 15px;
            }
            p{
                font-size: 15px;
            }
        }
    }
    @media screen and (max-width:1023px){
        .inner{
            width: 680px;
    }
    }
    @media screen and (max-width:767px){
        .inner{
            h2{
                font-size: 30px;
                &::after{
                    width: 170px;
                }
            }
            .conbox{
                width: 200px;
                .bg{
                    width: 200px;
                    height: 200px;
                    
                }
                .imgbox{
                    img{
                        transform: scale(0.5);
                        transform-origin: 0 0;
                    }
                }
                .text{
                    h4{
                        font-size: 16px;
                    }
                    p{
                        font-size: 14px;
                    }
                }
            }
        }

        .slick-prev:before, .slick-next:before{display:none;}
    }
`

export const Con4Wrap = styled.section`
    position: relative;
    .bg{
        position: absolute;
        top: 0;
        right: 0;
        background: ${colorOrange};
        width: 525px;
        height: 925px;
        border-radius: 25px 0px 0px 0px;
    }
    .inner{
        padding: 158px 316px;
        position: relative;
        h2{
            font-size: 40px;
            font-weight: 700;
            color: ${colorOrange};
            margin-bottom: 130px;
        }
        ul{
            position: absolute;
            top: 175px;
            left: 670px;
            display: flex;
            li{
                margin-right: 90px;
                font-weight: 500;
                font-size: 20px;
                position: relative;
                cursor: pointer;
                &:nth-child(4)::after{

                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 96%;
                    height: 4px;
                    background: ${colorGreen};
                }
            }
        }
        .content{
            position: relative;
            padding-left: 100px;
            .desc{
                h4{
                    font-size: 35px;
                    font-weight: 700;
                    margin-bottom: 75px;
                }
                p{
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 120px;
                }
                .morewrap{
                    display: flex;
                    align-items:center;
                    cursor: pointer;
                    img{
                        width: 120px;
                    }
                    span{
                        margin-left: 10px;
                    }
                }
            }
            .imgbox{
                position: absolute;
                top: -70px;
                right: 120px;
            }
        }
    }
    .btnWrap{
        .btn{
            width: 50px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
        .prevBtn{
            left: 200px;
        }
        .nextBtn{
            right: 200px;
            transform: rotate(180deg);
        }
    }

    @media screen and (max-width: 1023px){
        .bg{
            display: none;
        }
        .inner{
            padding: 90px 60px 150px;
            h2{
                margin-bottom: 90px;
            }
            ul{
                top: 105px;
                left: 422px;
                li{
                    margin-right: 84px;
                }
            }
            .content{
                padding-left: 80px;
                .desc{
                    p{
                        margin-bottom: 40px;
                    }
                }
                .imgbox{
                    top: -20px;
                    right: 20px;
                    img{
                        width: 435px;

                    }
                }
            }
        }
        .btnWrap{
            .btn{
                top: 65%;
                transform: translateY(0%);
            }
            .prevBtn{
                left: 30px;
            }
            .nextBtn{
                right: 30px;
                transform: rotate(180deg);
            }
        }
    }

    @media screen and (max-width: 767px){
        .inner{
            padding: 40px 50px 65px;
            h2{
                font-size: 30px;
            }
            ul{
                top: 110px;
                left: 50px;
                li{
                    margin-right: 38px;
                }
            }
            .content{
                padding-left: 0px;
                .desc{
                    h4{
                        margin-bottom: 25px;
                        font-size: 25px;
                    }
                    p{
                        margin-bottom: 30px;
                        font-size: 18px;
                        font-weight: 400;
                    }
                }
                .imgbox{
                    top: -10px;
                    right: 0px;
                    img{
                        width: 292px;
                    }
                }
            }
        }
        .btnWrap{display:none;}
    }
`

export const Con5Wrap = styled.section`
position: relative;
    .text{
        text-align: center;
        padding-top: 222px;
        padding-bottom: 180px;
        h2{
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 60px;
        }
        strong{
            display: block;
            font-weight: 500;
            font-size: 60px;
            line-height: 2.5;
            margin-bottom: 90px;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: 100px;
                right: 54%;
                background: ${colorOrange};
                width: 374px;
                height: 34px;
                z-index: -1;
            }
            &::after{
                content: "";
                position: absolute;
                bottom: 22px;
                left: 50%;
                background: ${colorGreen};
                width: 374px;
                height: 34px;
                z-index: -1;
            }
        }
        p{
            font-size: 20px;
            font-weight: 500;
            &.maxW1023{
                display: none;
            }
            .maxW767{
                    display: none;
            }
        }
        .more{
            margin-top: 100px;
            cursor: pointer;
            img{
                width: 110px;
            }
            span{
                display: inline-block;
                transform: translate(15px, -25px);
                font-weight: 500;
            }
        }
    }
    .food1{
        position: absolute;
        top: 50px;
        left: 0;
        img{
            position: absolute;
            left: 0px;
            &:nth-child(1){top:150px}
            &:nth-child(2){top:110px}
            &:nth-child(3){top:0px}
        }
    }
    .food2{
        position: absolute;
        top: 50px;
        right: 0;
    }
    .food3{
        position: absolute;
        top: 725px;
        right: 650px;
        
            img{
                position: absolute;
                top: 0;
                left: 0;
                &:nth-child(1){top:30px}
                &:nth-child(2){top:0px; left:-30px}
            }   
    }
    .banner{
        width: 100%;
        height: 240px;
    }
    .bannerTop, .bannerBottom{
        display: none;
    }
    @media screen and (max-width:1023px){
        width: 100%;
        .banner{display:none;}
        .bannerTop, .bannerBottom{
            display: block;
            width: 100%;
            height: 240px;
        }
        .text{
            
            padding-top: 330px;
            padding-bottom: 225px;
            strong{
                &::before{
                    height: 14px;
                    width: 326px;
                }
                
                &::after{
                    height: 17px;
                    width: 290px;
                    bottom: 38px;
                    left: auto;
                    right: 66px;
                }
            }
            p{
                line-height: 2;
                &.maxW1023{
                    display: block;
                }
            }
            .more{
            margin-top: 124px;
            }
        }
        .food1{
            z-index: -10;
            img{
                /* width: 412px; */
                transform: scale(0.8);
                transform-origin: 0 0 ;
            }
            .minW1024{
                display: none;
            }
            top: 300px;
        }
        .food2{
            top: 330px;
            img{
                transform: scale(0.75);
                transform-origin: 100% 0%;
            }
        }
        .food3{
            top: 1160px;
            right: auto;
            left: 600px;
        }
    }
    @media screen and (max-width:767px) {
        .bannerTop, .bannerBottom{
            height: 190px;
        }
        .text{
            padding-top: 240px;
            padding-bottom: 265px;
            h2{
                font-size: 30px;
            }
            strong{
                font-size: 50px;
                line-height: 2;
                margin-bottom: 75px;
                &::before{
                    width: 263px;
                    top: 65px;
                }
                &::after{
                    width: 225px;
                    bottom: 15px;
                    right:105px;
                }
            }
            p{
                line-height: 1.7;
                .maxW767{
                    display: block;
                }
            }
            .more{
            margin-top: 75px;
            }
        }
        .food1{
            top: 150px;
            img{
                transform: scale(0.5);
            }
        }
        .food2{
            top: 200px;
            img{
                transform: scale(0.65);
            }
        }
        .food3{
            top: 980px;
            left: 350px;
            img{
                transform: scale(0.75);

            }
        }
    }
`
export const Con6Wrap = styled.section`

    .inner{
        ${inner}
        width: 1160px;
    }
    .title{
        padding: 113px 0px;
        font-size: 50px;
        font-weight: 900;
        strong{
            color: ${colorGreen};
        }
        span.bar{
            position: relative;
            &::after{
                content: "";
                position: absolute;
                bottom: 5px;
                left: -150px;
                width: 334px;
                height: 16px;
                background: ${colorOrange};
                opacity: 0.6;
            }   
        }
    }
    .icon{
        position: absolute;
        top: 190px;
        right: 0px;
        display: flex;
        cursor: pointer;
        img{
            width: 94px;
        }
        span{
            display: block;
            height: 44px;
            line-height: 44px;
            margin-left: 15px;
            font-weight: 700;
            font-size: 18px;
            
        }
    }
    .mySwiper{
        padding-bottom: 160px;
        img{
            cursor: pointer;
        }
    }
    @media screen and (max-width:1023px){
        .inner{
            width: 100%;
            .title{
                padding-top:60px;
                padding-left: 87px;
            }
            .mySwiper{
                width: 95%;
                padding-bottom: 130px;
                img{
                    width: 235px;
                }
            }
            .icon{
                top: auto;
                bottom:40px;
                right: 46px;
            }
        }
    }
    @media screen and (max-width:767px){
        .inner{
            .title{
                padding-top:46px;
                padding-left: 35px;
                padding-bottom: 40px;
            }
            .mySwiper{
                width: 100%;
                padding-left: 30px;
            }
            .icon{
                right: auto;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
`