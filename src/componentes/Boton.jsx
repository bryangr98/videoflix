import React from 'react';
import styled  from 'styled-components';

const BotonNuevoVideo = () => {

    const Mybutton = styled.div`
    width:181px;
    height:54px;
    border-radius:4px;
    color:#e0e0e0;
    background-color:#555;
    font-size:26px;
    text-align:center;
    border:2px solid #e0e0e0;
    

    @media screen and (max-width: 608px) {
        width:100%;
        position:absolute;
        bottom:5%;
        min-width:200px;
        
    }
    `

    return  (
        <>
        <Mybutton>
            Nuevo Video
        </Mybutton>
        
        
        </>
        )

}

export default BotonNuevoVideo;
