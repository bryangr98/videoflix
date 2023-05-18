import React from 'react';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image7 from './images/image7.png';




function App() {
  const videos = [
    { id: 1, title: 'Video 1', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 2, title: 'Video 2', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 3, title: 'Video 3', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 4, title: 'Video 4', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 5, title: 'Video 5', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 6, title: 'Video 6', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 },
    { id: 7, title: 'Video 7', url: 'https:www.youtube.com/watch?v=dQw4w9WgXcQ', imgVideo:image7 }
    // Agrega más videos según sea necesario
  ];
  
  
  return (
    <>
    <Router>
    <NavBar/>

    <Routes>
    <Route path='/' element={<Home videos={videos} />}/>
    <Route path='/nuevoVideo' element={<NuevoVideo/>}/>
    </Routes>

    </Router>
    <Footer/>
    </>
  );
}

export default App;
