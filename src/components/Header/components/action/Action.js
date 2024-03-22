import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthenticationStatus } from "../../../../redux/auth/authSlice";
import { BsSearch, BsHeart, BsBasket3 } from "react-icons/bs";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Action.scss";

const Action = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.loginCustomer.isAuthenticated
    );

    useEffect(() => {
        dispatch(checkAuthenticationStatus());
    }, [dispatch]);

    return (
        <div className="header-icon">
            <div className="header-icon__item">
                {isAuthenticated ? (
                    <NavLink to="/cabinet">
                        <FaUserCheck
                            className="header-form__icon"
                            color="#FB5A00"
                        />
                    </NavLink>
                ) : (
                    <NavLink to="/auth">
                        <FaRegUser
                            className="header-form__icon"
                            color="curent-color"
                        />
                    </NavLink>
                )}
            </div>

            <div className="header-icon__item">
                <BsSearch />
            </div>

            <div className="header-icon__item">
                <NavLink to="/favorites">
                    <BsHeart />
                </NavLink>
            </div>
            <div className="header-icon__item">
                <NavLink to="/cart">
                    <BsBasket3 />
                </NavLink>
            </div>
        </div>
    );
};

export default Action;
