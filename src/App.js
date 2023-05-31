import React,{useContext, useState} from 'react';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import NuevoVideo from './Registro/RegistroVideo';
import styled from 'styled-components';
import {BrowserRouter,Routes,Route,createBrowserRouter,Link,Switch} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddVideoForm from './Registro/RegistroCategoria';
import { ThemeProvider,ThemeContext } from './ThemeContext';
import { VideoProvider, useVideoContext } from './Context';





function App() {
 const {theme,MyDiv}=useContext(ThemeContext);

 const ruta = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },{
    path:'/nuevoVideo',
    element:<NuevoVideo/>,
    
  },{
    path:'/nuevaCategoria',
    element:<AddVideoForm/>,
  },
 ])

  
  
  return (
    <ThemeProvider>
      <VideoProvider>

    <MyDiv theme={theme}> 
    <BrowserRouter>
    <NavBar ruta={ruta} />

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/nuevoVideo' element={<NuevoVideo/>}/>
    <Route path='/nuevaCategoria' element={<AddVideoForm/>}/>
    </Routes>

    </BrowserRouter>
    <Footer/>
    </MyDiv>
      </VideoProvider>
    </ThemeProvider>
  );
}

export default App;
