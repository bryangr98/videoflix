import React  from "react";
import BotonNuevoVideo from "./BotonNuevoVideo";
import styled from 'styled-components'
import videoflix from "../images/videoflix.png"
import BotonTema from "./BotonTema";
import { Link } from "react-router-dom";


const NavBar = (ruta) => {

    const MyDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #565656;
    `
    const ImgHome = styled.img`
    width: 250px;
    height: 100px;`

    const Boton = styled.button`
    background-color: #056;
    `

   

    return(
        <MyDiv>

        <Link to="/">
        <ImgHome src={videoflix} alt="logo"/>
        </Link>        
        <BotonNuevoVideo ruta={ruta}/>
        <BotonTema/>
        </MyDiv>
    )

}

export default NavBar;