import styled from "styled-components";
const inner = {
    width:'1400px',
    position:'relative',
    boxSizing:'border-box',
    margin:'auto'
}
export const HeaderWrap = styled.header`
background: #ddd;
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
            background: #EE7725;
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

export const Con1Wrap = styled.section``

export const Con2Wrap = styled.section``

export const Con3Wrap = styled.section``

export const Con4Wrap = styled.section``

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
                background: #EE7725;
                width: 374px;
                height: 34px;
                z-index: -1;
            }
            &::after{
                content: "";
                position: absolute;
                bottom: 22px;
                left: 50%;
                background: #17633D;
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
        /* position: relative; */
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
    }
    .title{
        padding: 113px;
        font-size: 50px;
        font-weight: 900;
        strong{
            color: #17633D;
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
                background: #EE7725;
                opacity: 0.6;
            }   
        }
    }
    .icon{
        position: absolute;
        top: 190px;
        right: 141px;
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
    ul{
        margin-bottom: 160px;
        display: flex;
        justify-content: center;
        li{
            margin-right: 40px;
        }
    }
`