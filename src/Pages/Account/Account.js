import React from "react";
import AccountComponent from "../../components/Account/AccountComponent";
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
            <h1 className="personal-account__title">Особистий Кабінет</h1>
            <AccountComponent />
        </div>
    )
}

export { Account }