import React from "react";
import { useContext } from "react";
import { Form, useFormik } from "formik";
import { useVideoContext } from "../../Context";
import { ThemeContext } from "../../ThemeContext";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

const AddVideoForm = () => {
  const { videosData, agregarCategoria, eliminarCategoria } = useVideoContext();
  const {
    theme,
    MyTh,
    MyTd,
    MyStyledInput,
    MyStyledForm,
    StyledButton,
    MyDiv,
  } = useContext(ThemeContext);
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
    <MyDiv theme={theme}>
      <MyStyledForm theme={theme} onSubmit={formik.handleSubmit}>
        <label htmlFor="categoryName">Nueva Categoría:</label>
        <MyStyledInput
          id="categoryName"
          name="categoryName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.categoryName}
          theme={theme}
        />
        <StyledButton type="submit" theme={theme}>
          Agregar
        </StyledButton>
      </MyStyledForm>
      <StyledButton onClick={handleResetForm} theme={theme}>
        Limpiar
      </StyledButton>
      <table theme={theme}>
        <thead>
          <MyTd theme={theme}>Categoria</MyTd>
          <MyTd theme={theme}>Editar</MyTd>
          <MyTd theme={theme}>Borrar</MyTd>
        </thead>
        {cat.length > 0 &&
          cat.map(([categoryName, videos]) => {
            // console.log("Resultado del mapeo para:",categoryName);
            return (
              <tr key={categoryName}>
                <MyTd theme={theme}>{categoryName}</MyTd>
                <MyTd theme={theme}>
                  <DeleteIcon onClick={() => eliminarCategoria(categoryName)} />
                </MyTd>
                <MyTd theme={theme}>
                  <SettingsIcon />
                </MyTd>
              </tr>
            );
          })}
      </table>
    </MyDiv>
  );
};

export default AddVideoForm;
