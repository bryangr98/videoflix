import React  from "react";
import BotonNuevoVideo from "./BotonNuevoVideo";
import styled from 'styled-components'
import videoflix from "../images/videoflix.png"
import { useContext } from "react";
import BotonTema from "./BotonTema";


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

    const Boton = styled.button`
    background-color: #056;
    `

    const GoToHome = ()=>{
        window.location.href = "/"
    }

    return(
        <MyDiv>

        <ImgHome src={videoflix} alt="logo" onClick={GoToHome}/>
        
        <BotonNuevoVideo/>
        <BotonTema/>
        </MyDiv>
    )

}

export default NavBar;