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
  const eliminarCategoria = (key) => {
    fetch(`http://localhost:5500/videosData/${key}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((responseData) => {
        alert('Categoría eliminada de la API:', responseData);
      })
      .catch((error) => {
        console.error('Error al eliminar la categoría de la API:', error);
      });
  };
  
  
  return (
    <VideoContext.Provider value={{ videosData, agregarCategoria,eliminarCategoria }}>
      {children}
    </VideoContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto
export const useVideoContext = () => React.useContext(VideoContext);

//Temas,colores
