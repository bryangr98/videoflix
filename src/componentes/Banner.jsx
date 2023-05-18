import React from 'react';
import styled from 'styled-components';
import bannerbg from '../images/bannerBg.png'

const Banner = () => {

        const BannerStyle=styled.div` 
        background-image: url(${bannerbg});
        background-size: cover;
        background-position: center;
        height:500px;
        width:100vw;
        `

    return (
        <BannerStyle/>
    )
}

export default Banner;