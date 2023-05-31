import React, { useContext } from 'react';
import Banner from '../componentes/Banner';
import Carrusel from '../carrusel/carruselComponente';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';


    const MyDiv = styled.div`
    background-color: ${(props)=>(props.theme === "light" ? "#fff" : "#242323")};
    width: 100%;
  `;
  

const Home = ({videos}) => {
    const {theme} = useContext(ThemeContext);


    return  (  <>
        <Banner/>
        <MyDiv theme={theme}>
        <Carrusel videos={videos}/>
        </MyDiv>
    </>
    )
}

export default Home;