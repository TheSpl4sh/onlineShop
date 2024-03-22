import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthenticationStatus } from "../../../../redux/auth/authSlice";
import { Link } from "react-router-dom";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import "./topHeader.scss";

const TopHeader = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.loginCustomer.isAuthenticated
    );

    useEffect(() => {
        dispatch(checkAuthenticationStatus());
    }, [dispatch]);

    return (
        <>
            <div className="topheader">
                <Breadcrumbs />
                <form className="topheader-form">
                    {isAuthenticated ? (
                        <Link to="/cabinet" className="topheader-form__item">
                            <FaUserCheck
                                className="topheader-form__icon"
                                color="#FB5A00"
                            />
                            <p className="topheader-form__text">
                                Особистий кабінет
                            </p>
                        </Link>
                    ) : (
                        <Link to="/auth" className="topheader-form__item">
                            <FaRegUser
                                className="topheader-form__icon"
                                color="curent-color"
                            />
                            <p className="topheader-form__text">
                                Логін/Реєстрація
                            </p>
                        </Link>
                    )}
                </form>

                {/* <div> */}
                {/* <FaRegUser /> */}

                {/* <Link to="/LoginPage чи SignInPage" className="menu-form__item"> */}
                {/* <p>Вхід /</p> */}
                {/* </Link> */}

                {/* <LinkLink to="/RegistrationFormPage чи SignUpFormPage" className="menu-list__item"> */}
                {/* <p>Регістрація</p> */}
                {/* </Link> */}
                {/* </div> */}
            </div>
        </>
    );
};

export default TopHeader;
