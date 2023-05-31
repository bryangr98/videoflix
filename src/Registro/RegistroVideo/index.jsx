import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { useVideoContext } from '../../Context';
import { ThemeContext } from '../../ThemeContext';
import  styled from 'styled-components';


const NuevoVideo = () => {
  const { agregarVideo, videosData } = useVideoContext();
  const { theme, MyH2, MyDiv, StyledButton, MyStyledForm,MyField } = useContext(ThemeContext);

  const handleSubmit = (values, { resetForm }) => {
    const video = {
      title: values.title,
      url: values.url,
      imgVideo: values.imgVideo,
    };

    agregarVideo(values.category, video)
      .then((response) => {
        console.log('Video agregado:', response);
        resetForm();
      })
      .catch((error) => {
        console.error('Error al agregar el video:', error);
      });
  };

  return (
    <MyDiv theme={theme}>
      <MyH2 theme={theme}>Agregar Video</MyH2>

      <Formik
        initialValues={{
          title: '',
          url: '',
          imgVideo: '',
          category: '',
        }}
        validate={(values) => {
          const errors = {};
          // Additional validations if necessary
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <MyStyledForm theme={theme} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título del Video</label>
              <MyField theme={theme} type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="url">Link del Video</label>
              <MyField theme={theme} type="text" id="url" name="url" />
              <ErrorMessage name="url" component="div" />
            </div>

            <div>
              <label htmlFor="imgVideo">Imagen del Video</label>
              <MyField theme={theme} type="text" id="imgVideo" name="imgVideo" />
              <ErrorMessage name="imgVideo" component="div" />
            </div>

            <div>
              <label htmlFor="category">Categoría</label>
              <Field
  theme={theme}
  as="select"
  id="category"
  name="category"
  style={{
    backgroundColor: theme === "light" ? "#fff" : "#323030",
    color: theme === "light" ? "rgb(27,27,29)" : "#ffffff",
    border: theme === "light" ? "1px solid #323030" : "1px solid #fff",
    borderRadius: "5px",
    display: "block",
    margin: "auto",
    width: "80%",
    height: "1.5rem",
    cursor: "pointer",
  }}
>
  {Object.keys(videosData).map((categoryName) => (
    <option key={categoryName} value={categoryName}>
      {categoryName}
    </option>
  ))}
</Field>

              <ErrorMessage name="category" component="div" />
            </div>

            <StyledButton theme={theme} type="submit">
              Guardar
            </StyledButton>
          </MyStyledForm>
        )}
      </Formik>
    </MyDiv>
  );
};

export default NuevoVideo;
