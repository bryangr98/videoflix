import React from "react";
import styled from "styled-components";
import aluraflix from '../images/aluraflix.svg'

    const FooterStyle = styled.div`
    display: flex;	
    height: 150px;
    width: 100%;
    background-color: #565656;
    justify-content:center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    `
    const ImgFooter = styled.img`
    margin-top: 20px;
    height: 100px;
    width: 35vw;
    `

const Footer = () => {


    return (
        <FooterStyle>
            <h3>From</h3>
            <ImgFooter src={aluraflix} alt="logo" />
        </FooterStyle>
    )
}

export default Footer;