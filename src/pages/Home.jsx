import React from 'react';
import styled from 'styled-components';
import Banner from '../componentes/Banner';
import Carrusel from '../carrusel/carruselComponente';


const Home = ({videos}) => {


    return  (  
        <>
        <Banner/>
        <Carrusel videos={videos}/>
        </>
    )
}

export default Home;