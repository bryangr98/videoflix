import React,{useState} from 'react';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import NuevoVideo from './Registro/RegistroVideo';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddVideoForm from './Registro/RegistroCategoria';
import { ThemeProvider } from './ThemeContext';
import { VideoProvider, useVideoContext } from './Context';





function App() {

  
  
  return (
    <ThemeProvider>
      <VideoProvider>

    <> 
    <Router>
    <NavBar/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/nuevoVideo' element={<NuevoVideo/>}/>
    <Route path='/nuevaCategoria' element={<AddVideoForm/>}/>
    </Routes>

    </Router>
    <Footer/>
    </>
      </VideoProvider>
    </ThemeProvider>
  );
}

export default App;
