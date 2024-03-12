import React, { useState } from "react";
import "../components/AuthPageForm.scss";
import { Formik, Field, Form } from "formik";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { ReactComponent as BlackSvg } from "../../../components/LinkButton/icons/black_btn_svg.svg";
import { Link } from "react-router-dom";

const AuthPageForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Formik
            initialValues={{
                emailOrLogin: "",
                password: "",
                rememberMe: false,
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="auth-page__form auth-form">
                    <label htmlFor="emailOrLogin" className="auth-form__label">
                        Email або логін <span>*</span>
                    </label>
                    <Field
                        type="text"
                        id="emailOrLogin"
                        name="emailOrLogin"
                        className="auth-form__input"
                        placeholder="Введіть данні для входу"
                    />

                    <label htmlFor="password" className="auth-form__label">
                        Пароль <span>*</span>
                    </label>
                    <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="auth-form__input"
                        placeholder="Введіть пароль"
                    />
                    <button
                        type="button"
                        className={`auth-form__password-toggle ${
                            showPassword ? "pressed" : ""
                        }`}
                        onClick={togglePasswordVisibility}
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

                    <div className="auth-form__link">
                        <Link
                            to="/"
                            className="auth-form__link-text"
                        >
                            Відновити пароль
                        </Link>
                    </div>

                    <LinkButton
                        path="/"
                        text="Увійти в кабінет"
                        SvgIcon={BlackSvg}
                        className="black auth-form__button"
                        type="submit"
                        disabled={isSubmitting}
                    />

                    <label className="auth-form__label-checkbox">
                        <Field
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="auth-form__checkbox"
                        />
                        <span>Запам'ятати мене</span>
                    </label>
                </Form>
            )}
        </Formik>
    );
};

export default AuthPageForm;
