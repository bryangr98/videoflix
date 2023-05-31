import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Button } from '@mui/material';
import styled from 'styled-components';

const BotonTema = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const MyButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: ${theme === 'light' ? '#3c9db1' : '#1b1b61'};
  color: ${theme === 'light' ? 'black' : 'white'};
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  `

  return (
    <MyButton variant='contained' onClick={toggleTheme}>
      {theme === 'light' ? 'Cambiar a Oscuro' : 'Cambiar a Claro'}
    </MyButton>
  );
};

export default BotonTema;

