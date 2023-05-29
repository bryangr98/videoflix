import React, { useContext } from "react";
import { useVideoContext, VideoProvider } from "../../Context";
import { Formik, Form, Field, ErrorMessage } from "formik";

const NuevoVideo = () => {
  const { addVideoToCategory, getCategory, getVideosByCategory } = useContext(useVideoContext);

  // Obtener los valores de "category"
  const categories = Object.keys(getCategory);

  //Eliminar duplicados y obtener valores únicos
  const uniqueCategories = [...new Set(categories)];

  const selectOptions = uniqueCategories.map((category,value) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleSubmit = (values, { resetForm }) => {
    const { title, url, imgVideo, category } = values;
    const newVideo = {
      id: Math.floor(Math.random() * 1000),
      title,
      url,
      imgVideo,
    };

    addVideoToCategory(category, newVideo); // Pasar solo el nombre de la categoría

    resetForm();
  };

  return (
    console.log('categorias', categories),
    (
      <div>
        <h2>Agregar Video</h2>
        <Formik
          initialValues={{
            title: "",
            url: "",
            imgVideo: "",
            category: "",
          }}
          validate={(values) => {
            const errors = {};
            // Validaciones adicionales si es necesario
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="title">Título del Video</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="url">Link del Video</label>
              <Field type="text" id="url" name="url" />
              <ErrorMessage name="url" component="div" />
            </div>

            <div>
              <label htmlFor="imgVideo">Imagen del Video</label>
              <Field type="text" id="imgVideo" name="imgVideo" />
              <ErrorMessage name="imgVideo" component="div" />
            </div>

            <div>
              <label htmlFor="category">Categoría</label>
              <Field as="select" id="category" name="category">
                <option value="">Seleccionar categoría</option>
                {selectOptions}
              </Field>
              <ErrorMessage name="category" component="div" />
            </div>

            <button type="submit">Guardar</button>
          </Form>
        </Formik>
      </div>
    )
  );
};

export default NuevoVideo;
