import React from "react";
import "./LinkButton.scss";

const LinkButton = () => {
    return (
        <>
            <a href="/" className="link-button">
                <span className="link-text">Перейти до каталогу</span>
                <span className="link-icon">
                    <svg
                        className="icon-svg"
                        width="65"
                        height="65"
                        viewBox="0 0 65 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="65" height="65" fill="#FB5A00" />
                        <path
                            d="M40.0303 31.9697C40.3232 32.2626 40.3232 32.7374 40.0303 33.0303L35.2574 37.8033C34.9645 38.0962 34.4896 38.0962 34.1967 37.8033C33.9038 37.5104 33.9038 37.0355 34.1967 36.7426L38.4393 32.5L34.1967 28.2574C33.9038 27.9645 33.9038 27.4896 34.1967 27.1967C34.4896 26.9038 34.9645 26.9038 35.2574 27.1967L40.0303 31.9697ZM25.5 31.75H39.5V33.25H25.5V31.75Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </a>
        </>
    );
};

export default LinkButton;
