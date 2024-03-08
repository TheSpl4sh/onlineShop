import React from "react";
import "./AuthPage.scss";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import LinkButton from "../../components/LinkButton/LinkButton";

const AuthPage = () => {
    return (
        <section className="container">
            <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Авторизація", url: "/auth" },
                ]}
            />
            <h1 className="auth-page-heading">Авторизація</h1>
            <div className="auth-page-wrap">
                <div></div>
                <div>
                    <svg
                        width="40"
                        height="47"
                        viewBox="0 0 40 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.75 39.3947H39M31.875 32.2895V46.5M1 44.1316V39.3947C1 36.8822 2.00089 34.4725 3.78249 32.6958C5.56408 30.9192 7.98044 29.9211 10.5 29.9211H20M5.75 10.9737C5.75 13.4863 6.75089 15.8959 8.53249 17.6726C10.3141 19.4493 12.7304 20.4474 15.25 20.4474C17.7696 20.4474 20.1859 19.4493 21.9675 17.6726C23.7491 15.8959 24.75 13.4863 24.75 10.9737C24.75 8.46111 23.7491 6.05144 21.9675 4.27478C20.1859 2.49812 17.7696 1.5 15.25 1.5C12.7304 1.5 10.3141 2.49812 8.53249 4.27478C6.75089 6.05144 5.75 8.46111 5.75 10.9737Z"
                            stroke="#FB5A00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Ще немає акаунту?</h2>
                    <p></p>
                    <p></p>
                    <LinkButton
                        label="Зареєструватись"
                        url="/"
                        color="orange"
                    />
                </div>
            </div>
        </section>
    );
};

export { AuthPage };
