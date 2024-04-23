import React from "react";
import "./CartPage.scss";
import CartWithProducts from "../../components/CartWithProducts/CartWithProducts";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/cartSlice";

const CartPage = () => {
    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart());
      }, [dispatch])

    return (
        <div className="container">
            <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Кошик", url: "/cart" },
                ]}
            />
            <h1 className="cart-page-heading">Кошик</h1>
            <CartWithProducts 
                cart = {cart.products}
            />
            <EmptyCart />
        </div>
    );
};

export { CartPage };
