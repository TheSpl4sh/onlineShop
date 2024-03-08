import React from "react";
import "./CartPage.scss";
import CartWithProducts from "../../components/CartWithProducts/CartWithProducts";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";

const CartPage = () => {
    return (
        <div className="container">
            <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Кошик", url: "/cart" },
                ]}
            />
            <h1 className="cart-page-heading">Кошик</h1>
            {/*В залежності від наявності товарів в кошику,буде відображатись відповідний компонент*/}
            <CartWithProducts />
            <EmptyCart />
        </div>
    );
};

export { CartPage };
