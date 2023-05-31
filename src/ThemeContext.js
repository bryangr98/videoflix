import { Field } from "formik";
import React, { createContext, useState } from "react";
import styled from "styled-components";

// Crea el contexto del tema
export const ThemeContext = createContext();

// Crea un componente proveedor del tema
export const ThemeProvider = ({ children }) => {
  // Define el estado del tema actual
  const [theme, setTheme] = useState("light");

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const darkTheme = {
    color: "#fff",
    backgroundColor: "red",
  };
  const MyH3 = styled.h3`
    height: 100px;
    font-size: 1.8em;
    color: ${(props) => (props.theme === "light" ? "#022027" : "#ffffff")};
    width: 100%;
    text-align: center;
  `;
  const MyH2 = styled.h2`
    background-color: ${(props) =>
      props.theme === "light" ? '"323030"' : '"fff"'};
    color: ${(props) => (props.theme === "light" ? "#022027" : "#ffffff")};
  `;
  const MyStyledForm = styled.form`
    background-color: "transparent";
    color: ${(props) => (props.theme === "light" ? "#000000" : "#ffffff")};
    padding: 15px;
    margin: auto;
    border-radius: 5px;
  `;
  const MyDiv = styled.div`
    background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "#242323"};
    width: 100%;
    height: 100%;
  `;
  //Botones
  const MyStyledButton = styled.button`
  background-color: ${(props) =>
    props.theme === "light" ? "#3c9db1" : "#1b1b61"};
  color: ${(props) => (props.theme === "light" ? "#040420" : "#83cddb")};
  width: 150px;
  height: 25px;
  border-radius: 10px;
  margin-top: 0.2rem;
  cursor: pointer;
`;
  const StyledButton = styled.button`
    background-color: ${(props) =>
      props.theme === "light" ? "#3c9db1" : "#1b1b61"};
    color: ${(props) => (props.theme === "light" ? "#040420" : "#83cddb")};
    border: ${(props) =>
      props.theme === "light" ? "1px solid #3c9db1" : "1px solid #1b1b61"};
    margin-left: 35%;
    width: 150px;
    height: 25px;
    border-radius: 10px;
    margin-top: 1rem;
    cursor: pointer;
  `;
  const BotonCategoria = styled.button`
    background-color: ${(props) => props.theme === "light" ? "#3c9db1" : "#1b1b61"};
    color: ${(props) => props.theme === "light" ? "#040430" : "#ddd"};
      position: absolute;
      top:150px;
      right: 30px;
      border-radius: 10px;
      height: 30px;
      font-weight: bold;
      `
  const MyStyledInput = styled.input`
    background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "#323030"};
    color: ${(props) =>
      props.theme === "light" ? "rgb(27,27,29)" : "#ffffff"};
    border: ${(props) =>
      props.theme === "light" ? "1px solid #323030" : "1px solid #fff"};
    border-radius: 5px;
    display: block;
    margin: auto;
    width: 80%;
    height: 1.5rem;
    cursor: pointer;
  `;
  const MyTd = styled.td`
    color: ${(props) => (props.theme === "light" ? "#323030" : "#fff")};
  `;
  const MyTh = styled.th`
    background-color: ${(props) =>
      props.theme === "light" ? '"323030"' : '"fff"'};
    color: ${(props) => (props.theme === "light" ? "#3c9db1" : "#1b1b61")};
  `;
  const MyField = styled(Field)`
  background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "#323030"};
    color: ${(props) =>
      props.theme === "light" ? "rgb(27,27,29)" : "#ffffff"};
    border: ${(props) =>
      props.theme === "light" ? "1px solid #323030" : "1px solid #fff"};
    border-radius: 5px;
    display: block;
    margin: auto;
    width: 80%;
    height: 1.5rem;
    cursor: pointer;
  `
  // Define los valores del contexto
  const themeContextValues = {
    theme,
    toggleTheme,
    darkTheme,
    MyH2,
    MyH3,
    MyTh,
    MyTd,
    MyStyledInput,
    MyStyledForm,
    StyledButton,
    MyDiv,
    MyField,
    BotonCategoria,
    MyStyledButton
  };

  // Provee el contexto a los componentes hijos
  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
