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
            }
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
            img{
                margin-bottom: 23px;
            }
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
`


export const Con2Wrap = styled.section`
    background: ${colorGreen};
    position: relative;
    .swiperList{
        display: flex;
        .bg{
            img{
                vertical-align: top;
            }
        }
        .centerImg{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
        }
        .text{
            padding-top: 270px;
            padding-left: 219px;
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
                img{
                    height: 65px;
                }
                span{
                    display: inline-block;
                    transform: translate(10px, -25px);
                }
            }
        }
        .cs{
            position: absolute;
            top: 310px;
            right: 75px;
            img{
                width: 60px;
            }
            span{
                display: block;
                text-align: center;
                color: white;
                margin-top: 13px;
                margin-bottom: 27px;
            }
        }
    }



    .mySwiper{
        .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
            content: url(./images/contents/NEXT.png);
            display: block;
            width: 200px;
            background: #000;
            color: #fff;
            transform: translate(-800px,400px);
            /* position: absolute;
            top:0;
            right: 100px; */
        }
        .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
            content: url(./images/contents/PREV.png);
            /* transform: scale(0.5) translateX(100px); */
            
        }
        /* .swiper-button-next {
            background: url(./images/contents/NEXT.png) no-repeat;
        }
        
        .swiper-button-prev {
            background: url(./images/contents/NEXT.png) no-repeat;
            content: "12345";
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
            display: none;
        } */
    }
`

export const Con3Wrap = styled.section`
background: #F3F3F3;
position: relative;
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
    .swiperBox{

        .conbox{
            margin-bottom: 100px;
            position: relative;
            &:nth-child(1) .bg{
                background-image: url(./images/contents/con3-bg1.png);
            }
            .bg{
                width: 332px;
                height: 322px;
                background: ${colorGreen};
                border-radius: 50% 50% 0% 0%;
                margin-bottom: 90px;
            }
            .imgbox{
                width: 250px;
                height: 250px;
                overflow: hidden;

                position: absolute;
                top: 100px;
                left: 0px;
                /* transform: translateX(-50%); */
                img{
                    /* transform: translate(-70px, -30px); */
                    
                }

            }
            .text{
                text-align: center;
                h4{
                    font-weight: 500;
                    font-size: 25px;
                    margin-bottom: 15px;
                }
                p{
                    font-size: 15px;
                }
            }
        }
        .mySwiper{
        padding-left: 270px;
        /* padding-right: 270px; */

            .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
                content:url(./images/contents/icon-line.png);
                transform: scale(0.5) rotate(180deg) translateX(100px);
            }
            .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
                content:url(./images/contents/icon-line.png);
                transform: scale(0.5) translateX(100px);
                
            }
        }
    }
    ul{
        display: flex;
        justify-content: center;
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
        }
        .prevBtn{
            left: 200px;
        }
        .nextBtn{
            right: 200px;
            transform: rotate(180deg);
        }
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
        }
        .more{
            margin-top: 100px;
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
        bottom: 430px;
        right: 650px;
            img{
                position: absolute;
                top: 0;
                left: 0;
                &:nth-child(1){top:30px}
                &:nth-child(2){top:0px; left:-30px}
            }   
    }
`
export const Con6Wrap = styled.section`
    .banner{
        width: 100%;
        height: 240px;
    }
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
        margin-bottom: 160px;
        li{
            margin-right: 40px;
        }
    }
`