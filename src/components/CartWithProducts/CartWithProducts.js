import React from "react";
import "./CartWithProducts.scss";
import CartTotalBox from "../CartTotalBox/CartTotalBox";

const CartWithProducts = () => {
    return (
        <div className="cart-products">
            <div className="cart-products__content">
                <table className="cart-products__table">
                    <thead className="cart-products__header">
                        <tr className="cart-products__row">
                            <th className="cart-products__item">Товар</th>
                            <th className="cart-products__item">Ціна</th>
                            <th className="cart-products__item">Кількість</th>
                            <th className="cart-products__item">Вартість</th>
                        </tr>
                    </thead>
                    <tbody className="cart-products__body">
                        <tr className="cart-products__card">
                            <td>ТУТ БУДЕ КАРТКА</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="cart-products__card">
                            <td>ТУТ БУДЕ КАРТКА</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <CartTotalBox />
        </div>
    );
};

export default CartWithProducts;
