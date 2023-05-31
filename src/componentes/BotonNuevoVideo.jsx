import React, { useContext } from 'react';
import styled  from 'styled-components';
import {BrowserRouter,Link} from 'react-router-dom';
import { ThemeContext } from '../../src/ThemeContext';
import { Button } from '@mui/material';

    const MyDiv = styled.div`
    cursor: pointer;
    width:181px;
    height:54px;
    border-radius:4px;
    color:#e0e0e0;
    background-color:#555;
    font-size:26px;
    text-align:center;
    border:none;
    @media screen and (max-width: 608px) {
        width:100%;
        position:absolute;
        top:40px;
        left: 30%;
        min-width:200px;
        display:flex;
        flex-direction: column;
        background-color: transparent;
        border:none;
        color:white;
    }
    `
   
  
const BotonNuevoVideo = () => {
    const {theme,MyStyledButton}=useContext(ThemeContext);


    return (
        
        <MyDiv theme={theme} >

          <Link to={'/nuevoVideo'}>
            <MyStyledButton theme={theme} type="button" >Nuevo Video</MyStyledButton>
          </Link>

          <Link to={'/nuevaCategoria'}>
            <MyStyledButton  theme={theme} type="button">Agregar Categoría</MyStyledButton>
          </Link>
          
        </MyDiv>
        
      );
    };

export default BotonNuevoVideo;
