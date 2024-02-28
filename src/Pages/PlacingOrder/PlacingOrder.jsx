import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonBlackArrow from "../../components/Button/ButtonBlackArrow/ButtonBlackArrow";
import "../PlacingOrder/PlacingOrder.scss"

function PlacingOrder() {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email address').required('This field is required'),
    phoneNumber: Yup.string().required('This field is required'),
    // Add other fields for validation as needed
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    region: '',
    city: '',
    street: '',
    index: '',
    houseNumber: '',
    apartment: '',
    email: '',
    phoneNumber: '',
  };

  const onSubmit = (values) => {
    // Your form submission logic here
    console.log(values);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper-placingOrder">

          <div className="PlacingOrder-formik">
            <h1>Placing an order</h1>
            <Formik 
            initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema} 
      >
        {() => (
          <Form >
            <label htmlFor="firstName"> FirstName *</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />

            <label htmlFor="lastName"> LastName *</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />

            <label htmlFor="companyName">CompanyName</label>
            <Field type="text" id="companyName" name="companyName" />
            <ErrorMessage name="companyName" component="div" />

            <label htmlFor="region">Область/Регіон:</label>
            <Field type="text" id="region" name="region" />
            <ErrorMessage name="region" component="div" />

            <label htmlFor="city">Місто:</label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" component="div" />

            <label htmlFor="street">Вулиця:</label>
            <Field type="text" id="street" name="street" />
            <ErrorMessage name="street" component="div" />

            <label htmlFor="postalCode">Індекс:</label>
            <Field type="text" id="postalCode" name="postalCode" />
            <ErrorMessage name="postalCode" component="div" />

            <label htmlFor="houseNumber">Номер будинку:</label>
            <Field type="text" id="houseNumber" name="houseNumber" />
            <ErrorMessage name="houseNumber" component="div" />

            <label htmlFor="apartment">Квартира:</label>
            <Field type="text" id="apartment" name="apartment" />
            <ErrorMessage name="apartment" component="div" />

            <label htmlFor="email">Електронна пошта:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="phoneNumber">Номер телефону:</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />

            <button type="submit">Відправити</button>
          
          
          </Form>
        )}

            </Formik>
          </div>
          <div>
            <ButtonBlackArrow text="MAKE AN ORDER" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PlacingOrder;