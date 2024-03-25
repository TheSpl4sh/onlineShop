import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../PlacingOrder/PlacingOrder.scss";
import "../../../PlacingOrder/components/Forma/Forma.scss";
import CustomCheckbox from "../CustomCheckbox/CustomCheckebox";

function Forma() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Поле і'мя є обов'язковим"),
    lastName: Yup.string().required("Поле прізвища є обов'язковим"),
    email: Yup.string()
      .email("Невірна адреса електронної пошти")
      .required("Поле адреси електронної пошти є обов'язковим"),
    phoneNumber: Yup.string().required("Поле номер телефону є обов'язковим"),
    region: Yup.string().required("Поле область є обов'язковим"),
    city: Yup.string().required("Поле місто є обов'язковим"),
    street: Yup.string().required("Поле вулиця є обов'язковим"),
    postalCode: Yup.string().required("Поле поштовий індекс є обов'язковим"),
    houseNumber: Yup.string().required("Поле номер будинку є обов'язковим"),
    apartment: Yup.string().required("Поле номер квартири є обов'язковим"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    region: "",
    city: "",
    street: "",
    postalCode: "",
    houseNumber: "",
    email: "",
    phoneNumber: "",
  };

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  };

  const togglePromoCoupon = () => {
    setShowPromoCoupon(!showPromoCoupon);
  };

  const toggleLastName = () => {
    setShowLastName(true);
  };

  const toggleEmail = () => {
    setShowEmail(true);
  };

  const togglePhoneNumber = () => {
    setShowPhoneNumber(true);
  };

  const toggleRegion = () => {
    setShowRegion(true);
  };

  const toggleHouseNumber = () => {
    setShowHouseNumber(true);
  };

  const toggleFirstName = () => {
    setShowFirstName(true);
  };

  const toggleCity = () => {
    setShowCity(true);
  };

  const togglePostalCode = () => {
    setShowPostalCode(true);
  };

  const toggleStreet = () => {
    setShowStreet(true);
  };

  const [showPromoCoupon, setShowPromoCoupon] = useState(false);

  const [showLastName, setShowLastName] = useState(false);

  const [showFirstName, setShowFirstName] = useState(false);

  const [showStreet, setShowStreet] = useState(false);

  const [showPostalCode, setShowPostalCode] = useState(false);

  const [showHouseNumber, setShowHouseNumber] = useState(false);

  const [showEmail, setShowEmail] = useState(false);

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const [showRegion, setShowRegion] = useState(false);

  const [showCity, setShowCity] = useState(false);

  return (
    <div className="PlacingOrder-formik">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(values) => (
          <Form className="registration-form">
            <div className="form-enter_login-message">
              <div className="form-enter">
                <p className="form-enter__text">Вже є аккаунт?</p>
                <a className="form-enter__button-a" href="/auth">
                  <button type="button" className="form-enter__button">
                    Введите
                  </button>
                </a>
              </div>
            </div>
            <div className="apply-promoCode">
              <div className="promo-code">
                Чи є у Вас промокод?
                <button
                  type="button"
                  onClick={togglePromoCoupon}
                  className="click-active"
                >
                  Натисніть тут, щоб активувати його
                </button>
              </div>
              {showPromoCoupon && (
                <div className="promo-coupon">
                  <label className="label-coupon">
                    <span>
                      Введіть промокод в поле:
                    </span>
                  </label>
                  <div className="form-item">
                    <Field
                      name="coupon_code"
                      id="coupon_code"
                      type="text"
                      placeholder="Промокод"
                      value={values.coupon_code}
                    />

                    <button
                      id="cp_apply"
                      className="bt-outline apply-coup button"
                    >
                      Застосувати промокод
                    </button>
                  </div>
                </div>
              )}
            </div>

            <ul className="form-element">
              <li className="form-element--li">
                <label htmlFor="firstName">
                  <p className="form-element__text">
                    Ім'я <span className="asterisk-required">*</span>
                  </p>
                </label>

                <Field
                  className="placingOrder-field"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Введить ваше ім'я"
                  value={values.firstName}
                  onClick={toggleFirstName}
                />
                {showFirstName && !values.firstName && (
                  <ErrorMessage name="firstName" component="div" />
                )}
              </li>
              <li className="form-element--li">
                <label htmlFor="lastName">
                  <p className="form-element__text">
                    Прізвище <span className="asterisk-required">*</span>
                  </p>
                </label>

                <Field
                  className="placingOrder-field"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Введить ваше прізвище"
                  value={values.lastName}
                  onClick={toggleLastName}
                />
                {showLastName && !values.lastName && (
                  <ErrorMessage name="lastName" component="div" />
                )}
              </li>
            </ul>

            <label htmlFor="company">
              <p className="form-element__text">Компанія</p>
            </label>
            <Field
              className="placingOrder-field"
              type="text"
              id="company"
              name="company"
              placeholder="Введить назву вашоє компаніі"
              value={values.company}
            />
            <ErrorMessage name="company" component="div" />

            <ul className="form-element">
              <li className="form-element--li">
                <label htmlFor="region">
                  <p className="form-element__text">
                    Область
                    <span className="asterisk-required">*</span>
                  </p>
                </label>

                <Field
                  className="placingOrder-field"
                  type="text"
                  id="region"
                  name="region"
                  placeholder="Область"
                  value={values.region}
                  onClick={toggleRegion}
                />
                {showRegion && !values.region && (
                  <ErrorMessage name="region" component="div" />
                )}
              </li>

              <li className="form-element--li">
                <label htmlFor="city">
                  <p className="form-element__text">
                    Mісто <span className="asterisk-required">*</span>
                  </p>
                </label>

                <Field
                  className="placingOrder-field"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Введить назву вашого міста"
                  value={values.city}
                  onClick={toggleCity}
                />
                {showCity && !values.city && (
                  <ErrorMessage name="city" component="div" />
                )}
              </li>
            </ul>

            <label htmlFor="street">
              <p className="form-element__text">
                Вулиця <span className="asterisk-required">*</span>
              </p>
            </label>
            <Field
              className="placingOrder-field"
              type="text"
              id="street"
              name="street"
              placeholder="Введить назву вашой вулици"
              value={values.street}
              onClick={toggleStreet}
            />
            {showStreet && !values.street && (
              <ErrorMessage name="street" component="div" />
            )}

            <ul className="form-element">
              <li className="form-element--li">
                <label htmlFor="postalCode">
                  <p className="form-element__text">
                    Поштовий індекс
                    <span className="asterisk-required">*</span>
                  </p>
                </label>

                <Field
                  className="placingOrder-field"
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Введить поштовий індекс"
                  value={values.postalCode}
                  onClick={togglePostalCode}
                />
                {showPostalCode && !values.postalCode && (
                  <ErrorMessage name="postalCode" component="div" />
                )}
              </li>
              <li className="form-element--li">
                <label htmlFor="houseNumber apartment">
                  <p className="form-element__text">
                    Будинок/Квартира
                    <span className="asterisk-required">*</span>
                  </p>
                </label>
                <Field
                  className="placingOrder-field"
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  placeholder="наприклад, 37/2"
                  value={values.houseNumber}
                  onClick={toggleHouseNumber}
                />
                {showHouseNumber &&
                  !values.houseNumber &&
                  ((<ErrorMessage name="houseNumber" component="div" />),
                  (<ErrorMessage name="apartment" component="div" />))}
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
                  placeholder="Введить адресу вашоє електронної пошти"
                  value={values.email}
                  onClick={toggleEmail}
                />
                {showEmail && !values.email && (
                  <ErrorMessage name="email" component="div" />
                )}
              </li>
              <li className="form-element--li">
                <label htmlFor="phoneNumber">
                  <p className="form-element__text">
                    Номер телефону
                    <span className="asterisk-required">*</span>
                  </p>
                </label>
                <Field
                  className="placingOrder-field"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+38(___)___-__-__"
                  value={values.phoneNumber}
                  onClick={togglePhoneNumber}
                />
                {showPhoneNumber && !values.phoneNumber && (
                  <ErrorMessage name="phoneNumber" component="div" />
                )}
              </li>
            </ul>

            <CustomCheckbox
              className="customCheckbox-form"
              text="Створити аккаунт"
            />

            <label htmlFor="preorderСomment">
              <p className="form-element__text">Коментар до замовлення</p>
            </label>
            <Field
              className="placingOrder-fields"
              type="text"
              id="preorderComment"
              name="preorderComment"
              placeholder="Текст коментаря"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forma;
