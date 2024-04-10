import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./NameEditForm.scss";
import { ReactComponent as BlackSvg } from "../../LinkButton/icons/black_btn_svg.svg";
import SubmitButton from '../../LinkButton/SubmitButton';

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
          <Form className='editname-form'>
            <div className=''>
              <label htmlFor="currentName" className="editname-form__label">
                Поточне ім'я <span className="orange-star">*</span>
              </label>
              <Field
                name="currentName"
                type="text"
                placeholder="Введіть поточне ім'я користувача"
                className="editname-form__input"
              />
              {errors.currentName && touched.currentName ? (
                <div>{errors.currentName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="newName" className="editname-form__label">
                Нове ім'я <span className="orange-star">*</span>
              </label>
              <Field
                name="newName"
                type="text"
                placeholder="Введіть нове ім'я користувача"
                className="editname-form__input"
              />
              {errors.newName && touched.newName ? (
                <div>{errors.newName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="confirmNewName" className="editname-form__label">
                Підтвердіть нове ім'я <span className="orange-star">*</span>
              </label>
              <Field
                name="confirmNewName"
                type="text"
                placeholder="Введіть нове ім'я ще раз"
                className="editname-form__input"
              />
              {errors.confirmNewName && touched.confirmNewName ? (
                <div>{errors.confirmNewName}</div>
              ) : null}
            </div>
            {/* <button
                type="submit"
                className='edit-button'
              >
                Змінити ім'я
              </button> */}
            <SubmitButton 
              path="/account"
              text="Змінити ім'я"
              SvgIcon={BlackSvg}
              className="black"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NameForm;