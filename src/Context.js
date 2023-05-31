import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const VideoContext = createContext();

// Proveedor del contexto
export const VideoProvider = ({ children }) => {
  const [videosData, setVideosData] = useState(null);

  useEffect((key) => {
    fetch('http://localhost:5500/videosData')
      .then((response) => response.json())
      .then((data) => setVideosData(data));
  }, []);

  if (!videosData) {
    return <div>Loading...</div>;
  }

  const agregarCategoria = (key) => {
    // Verificar si la categoría ya existe
    if (videosData.hasOwnProperty(key)) {
      alert('La categoría ya existe');
      return;
    }

    // Crear una nueva categoría con un array vacío
    const newVideosData = {
      ...videosData,
      [key]: [],
    };

    // Actualizar los datos en el estado y en la API
    setVideosData(newVideosData);
    saveVideosDataToAPI(newVideosData);
  };

  const saveVideosDataToAPI = (data) => {
    fetch('http://localhost:5500/videosData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        alert('Datos guardados en la API:', responseData);
      })
      .catch((error) => {
        console.error('Error al guardar los datos en la API:', error);
      });
  };

  //Agregar video a categoria
  const agregarVideo = (categoria, video) => {
  
    // Verificar si la categoría existe en los datos
    if (!videosData.hasOwnProperty(categoria)) {
      alert('La categoría no existe');
      return;
    }
  
    // Obtener los datos de la categoría y el último ID
    const categoriaData = videosData[categoria];
    const lastId = categoriaData.length > 0 ? categoriaData[categoriaData.length - 1].id : 0;
  
    // Crear un nuevo video con un ID único
    const newVideo = {
      id: lastId + 1,
      ...video,
    };
  
    // Actualizar los datos en el estado y en la API
    const newVideosData = {
      ...videosData,
      [categoria]: [...categoriaData, newVideo],
    };
  
    setVideosData(newVideosData);
    saveVideosDataToAPI(newVideosData);
  };
  const eliminarCategoria = (categoria) => {
    // Verificar si la categoría existe en los datos
    if (!videosData.hasOwnProperty(categoria)) {
      alert('La categoría no existe');
      return;
    }
  
    // Copiar los datos actuales
    const newVideosData = { ...videosData };
  
    // Eliminar la categoría del objeto de datos
    delete newVideosData[categoria];
  
    // Actualizar los datos en el estado y en la API
    setVideosData(newVideosData);
    saveVideosDataToAPI(newVideosData);
  };
  


  return (
    <VideoContext.Provider value={{ videosData, agregarCategoria,agregarVideo,eliminarCategoria}}>
      {children}
    </VideoContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto
export const useVideoContext = () => React.useContext(VideoContext);

