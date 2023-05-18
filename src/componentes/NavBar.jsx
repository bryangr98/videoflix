import React  from "react";
import BotonNuevoVideo from "./Boton";
import styled from 'styled-components'
import videoflix from "../images/videoflix.png"
import { Link } from "react-router-dom";


const NavBar = () => {

    const MyDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #565656;
    padding: 10px;
    `
    const ImgHome = styled.img`
    width: 250px;
    height: 100px;`

    return(
        <MyDiv>

        <ImgHome src={videoflix} alt="logo" />
        
        <BotonNuevoVideo/>
        </MyDiv>
    )

}

export default NavBar;