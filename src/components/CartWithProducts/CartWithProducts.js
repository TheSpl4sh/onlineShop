import React from "react";
import "./CartWithProducts.scss";
import CartTotalBox from "../CartTotalBox/CartTotalBox";

const calculateTotal = (cart) => {
  if (cart.length === 0) {
    return 0;
  }

  return cart.reduce((total, product) => {
    if (product.product && product.cartQuantity) {
      return total + product.product.price * product.cartQuantity;
    } else {
      return total;
    }
  }, 0);
};

const CartWithProducts = ({ cart }) => {
  const totalSum = calculateTotal(cart);
  return (
    <>
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
              {cart.map((product) => (
                <tr className="cart-products__card" key={product.product.id}>
                  <td>
                    <img
                      src={product.product.logo_img}
                      alt="sneaker"
                      draggable="false"
                      className="vertical-card__logo"
                    />
                  </td>
                  <td className="cart-products__card-cell cart-products__card-cell--verticalAlign">
                    {product.product.price + " ₴"}
                  </td>
                  <td className="cart-products__card-cell cart-products__card-cell--verticalAlign">
                    {product.cartQuantity}
                  </td>
                  <td className="cart-products__card-cell cart-products__card-cell--verticalSum">
                    {product.product.price * product.cartQuantity + " ₴"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CartTotalBox totalSum={totalSum} />
      </div>
      {/* <CardCarousel heading={<>Можливо вас<br/>зацікавить</>} /> */}
    </>
  );
};

export default CartWithProducts;
