import React from "react";
import { Link } from "react-router-dom";
import "./BelowHeaderBreadcrumbs.scss";

function BelowHeaderBreadcrumbs({ paths }) {
    return (
        <ul className="breadcrumb">
            {paths.map((path, index) => (
                <li key={index} className="breadcrumb-item">
                    {index < paths.length - 1 ? (
                        <Link to={path.url}>{path.label}</Link>
                    ) : (
                        path.label
                    )}
                    {index < paths.length - 1 && (
                        <svg
                            key={`separator-${index}`}
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
                            />
                        </svg>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default BelowHeaderBreadcrumbs;
