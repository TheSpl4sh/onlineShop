import React from "react";
import { Link } from "react-router-dom";
import "./LinkButtonOrange.scss";
import "./LinkButtonBlack.scss";

const LinkButton = ({ path, text, SvgIcon, className }) => {
    return (
        <Link to={path} className={`link-button__${className}`}>
            <span className="link-text">{text}</span>
            <span className="link-icon">
                <SvgIcon className="icon-svg" />
            </span>
        </Link>
    );
};

export default LinkButton;
