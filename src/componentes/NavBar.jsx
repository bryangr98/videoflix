import React  from "react";
import { useState } from "react";
import BotonNuevoVideo from "./Boton";
import styled from 'styled-components'
import videoflix from "../images/videoflix.png"






const NavBar = () => {

    const MyDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #565656;
    padding: 10px;
    `

    return(
        <MyDiv>
        <img src={videoflix} alt="logo"/>
        <BotonNuevoVideo/>
        </MyDiv>
    )

}

export default NavBar;