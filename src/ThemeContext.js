import React, { createContext, useState } from 'react';

// Crea el contexto del tema
export const ThemeContext = createContext();

// Crea un componente proveedor del tema
export const ThemeProvider = ({ children }) => {
  // Define el estado del tema actual
  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const darkTheme = {
      color: '#fff',
      backgroundColor: 'red',
    }
  // Define los valores del contexto
  const themeContextValues = {
    theme,
    toggleTheme,
    darkTheme,
  };


  // Provee el contexto a los componentes hijos
  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
