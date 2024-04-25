import React from "react";
import axios from "axios"; // Якщо ви користуєтеся Axios

const AddToCartButton = ({token }) => {
  const addToCart = async () => {
    try {
      const response = await axios.put(`api/cart/`, null, {
        headers: {
          customerId: "6616c2b477dc7e9ac47b72a4",
          Authorization: token,
        },
      });
      // Тут ви можете обробити відповідь, якщо потрібно
      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      // Тут ви можете обробити помилку, якщо потрібно
    }
  };

  return (
    <button onClick={addToCart}>Додати до кошика</button>
  );
};

export default AddToCartButton;
