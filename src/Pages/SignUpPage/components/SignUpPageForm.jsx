import React, { useState } from "react";
import "../components/SignUpPageForm.scss";
import { Formik, Field, Form } from "formik";
import { PatternFormat } from "react-number-format";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { ReactComponent as BlackSvg } from "../../../components/LinkButton/icons/black_btn_svg.svg";
import { Link } from "react-router-dom";

const SignUpPageForm = () => {
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
                "user-name": "",
                "user-surname": "",
                phone: "",
                password: "",
                confirmPassword: "",
                agreeToPrivacyPolicy: false,
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="singup-page__form singup-form">
                    <label htmlFor="email" className="singup-form__label">
                        Email <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="email"
                        name="email"
                        className="singup-form__input"
                        placeholder="Введіть свій email"
                    />

                    <label htmlFor="user-name" className="singup-form__label">
                        Ім'я <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="user-name"
                        name="user-name"
                        className="singup-form__input"
                        placeholder="Введіть своє ім'я"
                    />

                    <label
                        htmlFor="user-surname"
                        className="singup-form__label"
                    >
                        Прізвище <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="user-surname"
                        name="user-surname"
                        className="singup-form__input"
                        placeholder="Введіть своє прізвище"
                    />

                    <label htmlFor="phone" className="singup-form__label">
                        Номер телефону <span>*</span>
                    </label>
                    <PatternFormat
                        className="singup-form__input phone-input"
                        format="+380 (##) ### - ## - ##"
                        allowEmptyFormatting
                        mask="_"
                        name="phone"
                        id="phone"
                    />

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
                            className="singup-form__input"
                            placeholder="Введіть пароль"
                        />

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
                            className="singup-form__input"
                            placeholder="Введіть пароль"
                        />

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
                            className="singup-form__checkbox"
                        />
                        <span className="singup-form__checkbox-text">
                            Я погоджуюсь на обробку персональних даних
                            відповідно до{" "}
                            <Link className="singup-form__checkbox-link">
                                політики конфіденційності
                            </Link>
                        </span>
                    </label>

                    <LinkButton
                        path="/"
                        text="Створити акаунт"
                        SvgIcon={BlackSvg}
                        className="black singup-form__button"
                        type="submit"
                        disabled={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default SignUpPageForm;
