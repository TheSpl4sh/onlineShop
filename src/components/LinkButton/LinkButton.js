import React from "react";
import "./LinkButtonOrange.scss";
import  "./LinkButtonBlack.scss";

const LinkButton = ({ text, SvgIcon, className }) => {
    return (
        <a href="/" className={`link-button__${className}`}>
            <span className="link-text">{text}</span>
            <span className="link-icon">
                <SvgIcon className="icon-svg" />
            </span>
        </a>
    );
};

export default LinkButton;
