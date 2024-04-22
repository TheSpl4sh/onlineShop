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

    // useEffect(() => {
    //     const authToken = localStorage.getItem("authToken");
    //     if (authToken) {
    //         const tokenParts = authToken.split(" ");
    //         if (tokenParts.length === 2) {
    //             const token = tokenParts[1];
    //             const res = dispatch(fetchCart(token))
    //             console.log(res)
    //         }
    //     }
    // }, [dispatch])

    useEffect(() => {
        dispatch(fetchCart());

      }, [dispatch])

    return (
        <div className="container">
            {console.log(cart)}
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
