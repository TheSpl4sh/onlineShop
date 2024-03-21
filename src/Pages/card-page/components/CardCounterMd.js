import React, { useState } from 'react';

function CartCounter() {
    const [count, setCount] = useState(1); 

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="card-page__add-cart-count-md">
            <span onClick={decrementCount}>-</span> 
            <p>{count}</p> 
            <span onClick={incrementCount}>+</span>
        </div>
    );
}

export default CartCounter;
