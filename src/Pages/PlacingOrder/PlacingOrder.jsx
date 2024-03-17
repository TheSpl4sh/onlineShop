import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonBlackArrow from "../../components/Button/ButtonBlackArrow/ButtonBlackArrow";
import UAH from "../../components/Banner/img/UAH.png";
import lineSum from "../PlacingOrder/img/Line-sum.png";
import "../PlacingOrder/PlacingOrder.scss";

function PlacingOrder() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number"
      ),
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
    company: "",
    region: "",
    city: "",
    street: "",
    index: "",
    houseNumber: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  };

  // useSelector з корзини редакс

  const [showPromoCoupon, setShowPromoCoupon] = useState(false);

  const togglePromoCoupon = () => {
    setShowPromoCoupon(!showPromoCoupon);
  };

  return (
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Swoosh Store</a>
          <svg
            className="breadcrumb-separator"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964465C12.9763 0.769203 12.6597 0.769203 12.4645 0.964465C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.23079 12.9763 8.23079 13.1716 8.03553L16.3536 4.85355ZM4.37114e-08 5L16 5L16 4L-4.37114e-08 4L4.37114e-08 5Z"
              fill="#DADADA"
            ></path>
          </svg>
        </li>
        <li className="breadcrumb-item">Placing an order</li>
      </ul>
      <div className="placingOrder-header">Placing an order</div>
      <div className="wrapper-placingOrder">
        <div className="PlacingOrder-formik">
          <Formik
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className="registration-form">
                <div className="form-enter_login-message">
                  <div className="form-enter">
                    <p className="form-enter__text">Already have an account?</p>
                    <a className="form-enter__button-a" href="/auth">
                      <button type="button" className="form-enter__button">
                        Enter
                      </button>
                    </a>
                  </div>
                </div>
                <div className="apply-promoCode">
                  <div className="promo-code">
                    Is there a promo code?
                    <button
                      type="button"
                      onClick={togglePromoCoupon}
                      className="click-active"
                    >
                      Click here to activate it
                    </button>
                  </div>
                  {showPromoCoupon && (
                    <div className="promo-coupon">
                      <label>
                        <span className="label-coupon">
                          Enter the promo code in the field:
                        </span>
                      </label>
                      <div className="form-item">
                        <Field
                          name="coupon_code"
                          id="coupon_code"
                          type="text"
                          placeholder="Promo code"
                        />

                        <button
                          id="cp_apply"
                          className="bt-outline apply-coup button"
                        >
                          Apply promo code
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <ul className="form-element">
                  <li className="form-element--li">
                    <label htmlFor="firstName">
                      <p className="form-element__text">
                        FirstName <span className="asterisk-required">*</span>
                      </p>
                    </label>

                    <Field
                      className="placingOrder-field"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="What is your name"
                    />
                    <ErrorMessage name="firstName" component="div" />
                  </li>
                  <li className="form-element--li">
                    <label htmlFor="lastName">
                      <p className="form-element__text">
                        LastName <span className="asterisk-required">*</span>
                      </p>
                    </label>

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
                <label htmlFor="company">
                  <p className="form-element__text">Company</p>
                </label>
                <Field
                  className="placingOrder-field"
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter the name of your company"
                />
                <ErrorMessage name="company" component="div" />
                <ul className="form-element">
                  <li className="form-element--li">
                    <label htmlFor="region">
                      <p className="form-element__text">
                        Area/Region
                        <span className="asterisk-required">*</span>
                      </p>
                    </label>

                    <Field
                      className="placingOrder-field"
                      type="text"
                      id="region"
                      name="region"
                      placeholder="Region"
                    />
                    <ErrorMessage name="region" component="div" />
                  </li>

                  <li className="form-element--li">
                    <label htmlFor="city">
                      <p className="form-element__text">
                        City <span className="asterisk-required">*</span>
                      </p>
                    </label>

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
                  <p className="form-element__text">
                    Street <span className="asterisk-required">*</span>
                  </p>
                </label>
                <Field
                  className="placingOrder-field"
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Enter the name of the street"
                />
                <ErrorMessage name="street" component="div" />
                <ul className="form-element">
                  <li className="form-element--li">
                    <label htmlFor="postalCode">
                      <p className="form-element__text">
                        PostalCode
                        <span className="asterisk-required">*</span>
                      </p>
                    </label>

                    <Field
                      className="placingOrder-field"
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Enter the index"
                    />
                    <ErrorMessage name="postalCode" component="div" />
                  </li>
                  <li className="form-element--li">
                    <label htmlFor="houseNumber apartment">
                      <p className="form-element__text">
                        House /Apartment
                        <span className="asterisk-required">*</span>
                      </p>
                    </label>
                    <Field
                      className="placingOrder-field"
                      type="text"
                      id="houseNumber"
                      name="houseNumber"
                      placeholder="example, 37/2"
                    />
                    <ErrorMessage name="houseNumber" component="div" />
                    <ErrorMessage name="apartment" component="div" />
                  </li>
                </ul>
                <ul className="form-element">
                  <li className="form-element--li">
                    <label htmlFor="email">
                      <p className="form-element__text">
                        Email <span className="asterisk-required">*</span>
                      </p>
                    </label>
                    <Field
                      className="placingOrder-field"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                    <ErrorMessage name="email" component="div" />
                  </li>
                  <li className="form-element--li">
                    <label htmlFor="phoneNumber">
                      <p className="form-element__text">
                        PhoneNumber <span className="asterisk-required">*</span>
                      </p>
                    </label>
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
                <div>
                  <input
                    className="checkbox-order"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="checkbox1"
                  />
                  <label htmlFor="checkbox1">Create an account</label>
                </div>
                <label htmlFor="preorderСomment">
                  <p className="form-element__text">Preorder comment</p>
                </label>
                <Field
                  className="placingOrder-fields"
                  type="text"
                  id="preorderComment"
                  name="preorderComment"
                  placeholder="comment text"
                />
              </Form>
            )}
          </Formik>
        </div>

        <Formik>
          <Form>
            <div className="wrapper-yourOrder">
              <div className="yourOrder">
                <h1>Your order</h1>
                <div className="yourOrder-basket"></div>
                <ul className="yourOrder-sum">
                  <li className="yourOrder-sum__sum">Sum</li>
                  <li>
                    <img className="line-sum" src={lineSum} alt="line-sum" />
                  </li>
                  <li className="yourOrder-sum__uah">
                    <img className="uah" src={UAH} alt="UAH" />
                  </li>
                </ul>
              </div>

              <div>
                <div className="delivery-header">
                  <label htmlFor="delivery">Delivery:</label>
                </div>

                <ul>
                  <li className="delivery-options">
                    <input
                      className="delivery-radio"
                      type="radio"
                      id="option1"
                      name="option"
                      value="option1"
                    />
                    <label htmlFor="option1">Pickup from the store</label>
                  </li>
                  <li className="delivery-options">
                    <input
                      className="delivery-radio"
                      type="radio"
                      id="option2"
                      name="option"
                      value="option2"
                    />
                    <label htmlFor="option2">Kyiv</label>
                  </li>
                  <li className="delivery-options">
                    <input
                      className="delivery-radio"
                      type="radio"
                      id="option3"
                      name="option"
                      value="option3"
                    />
                    <label htmlFor="option3">Lviv</label>
                  </li>
                </ul>
              </div>

              <div>
                <div className="payment-header">
                  <label htmlFor="payment">Payment:</label>
                </div>
                <ul>
                  <li className="payment-options">
                    <input
                      className="payment-radio"
                      type="radio"
                      id="online-payment"
                      name="options"
                      value="online-payment"
                    />
                    <label htmlFor="optionOnline-payment">Online payment</label>
                  </li>
                  <li className="payment-options">
                    <input
                      className="payment-radio"
                      type="radio"
                      id="optionCard upon receipt"
                      name="options"
                      value="optionCard upon receipt"
                    />
                    <label htmlFor="option">Card upon receipt</label>
                  </li>
                  <li className="payment-options">
                    <input
                      className="payment-radio"
                      type="radio"
                      id="optionIn cash"
                      name="options"
                      value="optionIn cash"
                    />
                    <label htmlFor="optionIn cash">In cash</label>
                  </li>
                </ul>
              </div>
              <div>
                <Field
                  className="checkbox-order"
                  type="checkbox"
                  id="checkbox-order"
                  name="checkbox-order"
                  value="checkbox-order"
                />
                <label htmlFor="checkbox-order">
                  <span>
                    I agree to the processing of personal data in accordance
                    with the privacy policy
                  </span>
                </label>
              </div>
              <div className="button-order">
                <ButtonBlackArrow text="MAKE AN ORDER" />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export { PlacingOrder };
