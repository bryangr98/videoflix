import React from 'react';
import styled from 'styled-components';
import bannerbg from '../images/bannerBg.png'

const Banner = () => {

        const BannerStyle=styled.div` 
        cursor: pointer;
        background-image: url(${bannerbg});
        background-size: cover;
        background-position: center;
        height:500px;
        width:100vw;
        @media screen and (max-width:768px){
            background-image: none;
            height: 0px;
        }
        `

    return (
        <BannerStyle/>
    )
}

export default Banner;