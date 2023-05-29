import React from "react";
import { useContext } from "react";
import { Form, useFormik } from "formik";
import { useVideoContext } from "../../Context";
import { ThemeContext } from "../../ThemeContext";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';


const StyledForm = styled.form`
  background-color: "transparent";
  color: ${(props)=>(props.theme === "light" ? "#000000" : "#ffffff")};
  padding: 15px;
  margin: auto;
  border-radius: 5px;
`;
const MyDiv = styled.div`
  background-color: ${(props)=>(props.theme === "light" ? "#fff" : "#242323")};
  width: 100%;
`;
const StyledButton = styled.button`
   background-color: ${(props)=>(props.theme === 'light' ? '#3c9db1' : '#1b1b61')};
   color: ${(props)=>(props.theme === "light" ? "#040420" : "#83cddb")};
   border:${(props)=>(props.theme === "light" ? "1px solid #3c9db1" : "1px solid #1b1b61")};
  margin-left: 35%;
  width: 150px;
  height: 25px;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;
`;
const StyledInput = styled.input`
  background-color: ${(props)=>(props.theme === "light" ? "#fff" : "#323030")};
  color: ${(props)=>(props.theme === "light" ? "rgb(27,27,29)" : "#ffffff")};
  border: ${(props)=>(props.theme === "light" ? "1px solid #323030" : "1px solid #fff")};
  border-radius: 5px;
  display: block;
  margin: auto;
  width: 80%;
  height: 1.5rem;
  cursor: pointer;
`;
const MyTd = styled.td`
color:${(props)=>(props.theme === "light" ? '#323030' : '#fff')};
`
const MyTh = styled.th`
background-color: ${(props)=>(props.theme === "light" ? '"323030"' : '"fff"')};
color: ${(props)=>(props.theme === "light" ? '#3c9db1' : '#1b1b61')};
`

const AddVideoForm = () => {
  const { videosData, agregarCategoria ,eliminarCategoria} = useVideoContext();
  const { theme } = useContext(ThemeContext);
  //Formulario
  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    onSubmit: (values) => {
      const { categoryName } = values;

      if (categoryName.length <= 0) {
        alert("Debe escribir algo en el campo");
        return;
      }
      // Verificar si la categoría ya existe
      if (videosData.hasOwnProperty(categoryName)) {
        alert("La categoría ya existe");
        return;
      }
      // Agregar la nueva categoría
      agregarCategoria(categoryName);
      // Limpiar el campo del formulario
      formik.resetForm();
    },
  });
  const handleResetForm = () => {
    formik.resetForm();
  };

  //Tabla
  const videosByCategory = useVideoContext();
  const categories = Object.entries(videosByCategory);
  const valorIndex0 = categories[0][1];
  const cat = Object.entries(valorIndex0);
  return (
    console.log(cat),
    <MyDiv theme={theme}>
      <StyledForm theme={theme} onSubmit={formik.handleSubmit}>
        <label htmlFor="categoryName">Nueva Categoría:</label>
        <StyledInput
          id="categoryName"
          name="categoryName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.categoryName}
          theme={theme}
        />
        <StyledButton type="submit" theme={theme}>Agregar</StyledButton>
      </StyledForm>
      <StyledButton onClick={handleResetForm} theme={theme}>Limpiar</StyledButton>
      <table theme={theme}>
        <thead >
          <MyTd theme={theme}>Categoria</MyTd>
          <MyTd theme={theme}>Editar</MyTd>
          <MyTd theme={theme}>Borrar</MyTd>
        </thead>
        {cat.length > 0 && cat.map(([categoryName, videos]) => {
  // console.log("Resultado del mapeo para:",categoryName);
  return (
    <tr key={categoryName}>
      <MyTd theme={theme}>{categoryName}</MyTd>
      <MyTd theme={theme}><DeleteIcon onClick={()=>eliminarCategoria(categoryName)} /></MyTd>
      <MyTd theme={theme}><SettingsIcon /></MyTd>
    </tr>
  );
})}


      </table>
    </MyDiv>
  );
};

export default AddVideoForm;
