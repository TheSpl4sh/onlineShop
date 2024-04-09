import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  currentName: Yup.string()
    .required('Поточне ім\'я обов\'язкове'),
  newName: Yup.string()
    .required('Нове ім\'я обов\'язкове'),
  confirmNewName: Yup.string()
    .oneOf([Yup.ref('newName'), null], 'Підтвердження імені повинно співпадати з новим іменем')
    .required('Підтвердження нового імені обов\'язкове'),
});

const initialValues = {
  currentName: '',
  newName: '',
  confirmNewName: '',
};

const NameForm = () => {
  const [registrationData, setRegistrationData] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setRegistrationData(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="currentName">Поточне ім'я</label>
              <Field 
                name="currentName" 
                type="text" 
                placeholder="Введіть поточне ім'я користувача"
              />
              {errors.currentName && touched.currentName ? (
                <div>{errors.currentName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="newName">Нове ім'я</label>
              <Field 
                name="newName" 
                type="text" 
                placeholder="Введіть нове ім'я користувача"
              />
              {errors.newName && touched.newName ? (
                <div>{errors.newName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="confirmNewName">Підтвердіть нове ім'я</label>
              <Field 
                name="confirmNewName" 
                type="text" 
                placeholder="Введіть нове ім'я ще раз"
              />
              {errors.confirmNewName && touched.confirmNewName ? (
                <div>{errors.confirmNewName}</div>
              ) : null}
            </div>
            <button type="submit">Змінити ім'я</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NameForm;