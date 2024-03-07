import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonBlackArrow from "../../components/Button/ButtonBlackArrow/ButtonBlackArrow";
import "../PlacingOrder/PlacingOrder.scss";

function PlacingOrder() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
    region: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    street: Yup.string().required("This field is required"),
    postalCode: Yup.string().required("This field is required"),
    houseNumber: Yup.string().required("This field is required"),
    apartment: Yup.string().required("This field is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    region: "",
    city: "",
    street: "",
    index: "",
    houseNumber: "",
    email: "",
    phoneNumber: "",
  };

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="container">
      <Header />
      <div className="container">
        <div className="wrapper-placingOrder">
          <div className="PlacingOrder-formik">
            <h1>Placing an order</h1>
            <div className="form-enter">
              <p>Already have an account?</p> <button>ENTER</button>
            </div>

            <Formik
              initialValues={initialValues}
              handleSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <ul className="form-element">
                    <li>
                      <label htmlFor="firstName">
                        FirstName <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="What is your name"
                      />
                      <ErrorMessage name="firstName" component="div" />
                    </li>
                    <li>
                      <label htmlFor="lastName">
                        LastName <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage name="lastName" component="div" />
                    </li>
                  </ul>

                  <label htmlFor="companyName">CompanyName</label>
                  <br />
                  <Field
                    className="placingOrder-field"
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter the name of your company"
                  />
                  <ErrorMessage name="companyName" component="div" />

                  <ul className="form-element">
                    <li>
                      <label htmlFor="region">
                        Area/Region
                        <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="region"
                        name="region"
                        placeholder="Region"
                      />
                      <ErrorMessage name="region" component="div" />
                    </li>

                    <li>
                      <label htmlFor="city">
                        Сity <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter the name of your city"
                      />
                      <ErrorMessage name="city" component="div" />
                    </li>
                  </ul>

                  <label htmlFor="street">
                    Street <span className="asterisk-required">*</span>
                  </label>
                  <br />
                  <Field
                    className="placingOrder-field"
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Enter the name of the street"
                  />
                  <ErrorMessage name="street" component="div" />

                  <ul className="form-element">
                    <li>
                      <label htmlFor="postalCode">
                        PostalCode <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Enter the index"
                      />
                      <ErrorMessage name="postalCode" component="div" />
                    </li>
                    <li>
                      <label htmlFor="houseNumber">HouseNumber</label>
                      <label htmlFor="apartment">
                        /Apartment
                        <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="houseNumber"
                        name="houseNumber"
                        placeholder="For example, 37/2"
                      />
                      <ErrorMessage name="houseNumber" component="div" />
                      <ErrorMessage name="apartment" component="div" />
                    </li>
                  </ul>

                  <ul className="form-element">
                    <li>
                      <label htmlFor="email">
                        Email <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                      <ErrorMessage name="email" component="div" />
                    </li>
                    <li>
                      <label htmlFor="phoneNumber">
                        PhoneNumber <span className="asterisk-required">*</span>
                      </label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+38(___)___-__-__"
                      />
                      <ErrorMessage name="phoneNumber" component="div" />
                    </li>
                  </ul>
                  <button type="button" onClick={() => console.log("Creating account...")}>
          Створити акаунт
        </button>

                  <label htmlFor="preorderСomment">
                  Preorder comment</label>
                      <br />
                      <Field
                        className="placingOrder-field"
                        type="text"
                        id="preorderComment"
                        name="preorderComment"
                        placeholder="comment text"
                      />

                </Form>
              )}
            </Formik>
          </div>
          <div className="wrapper-yourOrder">
            <div></div>
            <h1 companyName="yourOrder">Your order</h1>
            <div>
              <h2>Delivery:</h2>
              <ul>
                <li><button></button><p>Pickup from the store</p></li>
                <li><button></button><p>Kyiv</p></li>
                <li><button></button><p>Lviv</p></li>
              </ul>
            </div>
            <div>
            <h2>Payment:</h2>
              <ul>
                <li><button></button><p>online payment</p></li>
                <li><button></button><p>card upon receipt</p></li>
                <li><button></button><p>in cash</p></li>
              </ul>
            </div>
            <div>
              <button></button>
              <p>I agree to the processing of personal data in accordance with the privacy policy</p>
            </div>
            <ButtonBlackArrow text="MAKE AN ORDER" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { PlacingOrder };