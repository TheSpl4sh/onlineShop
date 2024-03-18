import React from "react";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import "./Account.scss";
const Account = () => {
    return (
        <div className="container personal-account">
            <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Особистий Кабінет", url: "account" },
                ]}
            />
            <h1 className="pesonal-account__title">Особистий Кабінет</h1>
        </div>
    )
}

export { Account }