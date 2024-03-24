import React, { useState } from "react";
import "../components/SignUpPageForm.scss";
import { Formik, Field, Form } from "formik";
import { PatternFormat } from "react-number-format";
import SubmitButton from "../../../components/LinkButton/SubmitButton";
import { ReactComponent as BlackSvg } from "../../../components/LinkButton/icons/black_btn_svg.svg";
import { useSelector, useDispatch } from "react-redux";
import { registerCustomer } from "../../../redux/registerCustomer/customersSlice";
import { Link, useNavigate } from "react-router-dom";
import { validationSchema } from "./validationSchema";
import { setAuthenticated } from "../../../redux/auth/authSlice";

const SignUpPageForm = () => {
    const serverErrors = useSelector((state) => state.customers.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility({
            ...passwordVisibility,
            [field]: !passwordVisibility[field],
        });
    };

    return (
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                telephone: "",
                password: "",
                confirmPassword: "",
                agreeToPrivacyPolicy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                const { confirmPassword, ...dataToSend } = values;
                console.log(dataToSend);
                dispatch(registerCustomer(dataToSend)).then((unwrapResult) => {
                    if (unwrapResult.meta.requestStatus === "fulfilled") {
                        dispatch(setAuthenticated(true));
                        resetForm();
                        navigate("/cabinet");
                    }
                });
            }}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form className="singup-page__form singup-form">
                    <label htmlFor="email" className="singup-form__label">
                        Email <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="email"
                        name="email"
                        className={`singup-form__input ${
                            errors.email && touched.email ? "input-error" : ""
                        }`}
                        placeholder="Введіть свій email"
                    />
                    {serverErrors.message && (
                        <div className="error-message">
                            {serverErrors.message}
                        </div>
                    )}
                    {errors.email && touched.email && (
                        <div className="error-message">{errors.email}</div>
                    )}

                    <label htmlFor="firstName" className="singup-form__label">
                        Ім'я <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`singup-form__input ${
                            errors.firstName && touched.firstName
                                ? "input-error"
                                : ""
                        }`}
                        placeholder="Введіть своє ім'я"
                    />
                    {errors.firstName && touched.firstName && (
                        <div className="error-message">{errors.firstName}</div>
                    )}

                    <label htmlFor="lastName" className="singup-form__label">
                        Прізвище <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`singup-form__input ${
                            errors.lastName && touched.lastName
                                ? "input-error"
                                : ""
                        }`}
                        placeholder="Введіть своє прізвище"
                    />
                    {errors.lastName && touched.lastName && (
                        <div className="error-message">{errors.lastName}</div>
                    )}

                    <label htmlFor="telephone" className="singup-form__label">
                        Номер телефону <span>*</span>
                    </label>
                    <Field
                        as={PatternFormat}
                        className={`singup-form__input phone-input ${
                            errors.telephone && touched.telephone
                                ? "input-error"
                                : ""
                        }`}
                        format="+380 (##) ###-##-##"
                        allowEmptyFormatting
                        mask="_"
                        name="telephone"
                        id="telephone"
                    />
                    {errors.telephone && touched.telephone && (
                        <div className="error-message">{errors.telephone}</div>
                    )}

                    <label htmlFor="password" className="singup-form__label">
                        Пароль <span>*</span>
                    </label>
                    <div className="singup-form__input-wrapper">
                        <Field
                            type={
                                passwordVisibility.password
                                    ? "text"
                                    : "password"
                            }
                            id="password"
                            name="password"
                            className={`singup-form__input ${
                                errors.password && touched.password
                                    ? "input-error"
                                    : ""
                            }`}
                            placeholder="Введіть пароль"
                        />
                        {errors.password && touched.password && (
                            <div className="error-message">
                                {errors.password}
                            </div>
                        )}

                        <button
                            type="button"
                            className={`singup-form__password-toggle ${
                                passwordVisibility.password ? "pressed" : ""
                            }`}
                            onClick={() => togglePasswordVisibility("password")}
                        >
                            <svg
                                width="20"
                                height="14"
                                viewBox="0 0 20 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.3">
                                    <path
                                        d="M8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7Z"
                                        stroke="black"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19 7C16.6 11 13.6 13 10 13C6.4 13 3.4 11 1 7C3.4 3 6.4 1 10 1C13.6 1 16.6 3 19 7Z"
                                        stroke="black"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <label
                        htmlFor="confirmPassword"
                        className="singup-form__label"
                    >
                        Повторіть пароль <span>*</span>
                    </label>
                    <div className="singup-form__input-wrapper">
                        <Field
                            type={
                                passwordVisibility.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`singup-form__input ${
                                errors.confirmPassword &&
                                touched.confirmPassword
                                    ? "input-error"
                                    : ""
                            }`}
                            placeholder="Введіть пароль"
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <div className="error-message">
                                {errors.confirmPassword}
                            </div>
                        )}

                        <button
                            type="button"
                            className={`singup-form__confirmPassword-toggle ${
                                passwordVisibility.confirmPassword
                                    ? "pressed"
                                    : ""
                            }`}
                            onClick={() =>
                                togglePasswordVisibility("confirmPassword")
                            }
                        >
                            <svg
                                width="20"
                                height="14"
                                viewBox="0 0 20 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.3">
                                    <path
                                        d="M8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7Z"
                                        stroke="black"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19 7C16.6 11 13.6 13 10 13C6.4 13 3.4 11 1 7C3.4 3 6.4 1 10 1C13.6 1 16.6 3 19 7Z"
                                        stroke="black"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <label
                        htmlFor="agreeToPrivacyPolicy"
                        className="singup-form__label-checkbox"
                    >
                        <Field
                            type="checkbox"
                            id="agreeToPrivacyPolicy"
                            name="agreeToPrivacyPolicy"
                            className={`singup-form__checkbox ${
                                errors.agreeToPrivacyPolicy &&
                                touched.agreeToPrivacyPolicy
                                    ? "input-error"
                                    : ""
                            }`}
                        />
                        <span className="singup-form__checkbox-text">
                            Я погоджуюсь на обробку персональних даних
                            відповідно до{" "}
                            <Link className="singup-form__checkbox-link">
                                політики конфіденційності
                            </Link>
                        </span>
                    </label>
                    {errors.agreeToPrivacyPolicy &&
                        touched.agreeToPrivacyPolicy && (
                            <div className="error-message">
                                {errors.agreeToPrivacyPolicy}
                            </div>
                        )}

                    <SubmitButton
                        text="Увійти в кабінет"
                        SvgIcon={BlackSvg}
                        className="black auth-form__button"
                        type="submit"
                        disabled={!isValid || !dirty}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default SignUpPageForm;
