import React from "react";
import styled from "styled-components";
import aluraflix from '../images/aluraflix.svg'


const Footer = () => {

    const Footer = styled.div`
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

    return (
        <Footer>
            <h3>From</h3>
            <ImgFooter src={aluraflix} alt="logo" />
        </Footer>
    )
}

export default Footer;