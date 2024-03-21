import React, { useState } from 'react';

function CartCounter() {
    const [count, setCount] = useState(1); // Початкове значення лічильника

    // Функція для зменшення значення лічильника
    const decrementCount = () => {
        if (count > 1) { // Перевірка, щоб значення не стало менше 1
            setCount(count - 1); // Зменшення значення на 1
        }
    };

    // Функція для збільшення значення лічильника
    const incrementCount = () => {
        // Тут можна додати додаткову перевірку на максимальне значення, якщо потрібно
        setCount(count + 1); // Збільшення значення на 1
    };

    return (
        <div className="card-page__add-cart-count">
            <span onClick={decrementCount}>-</span> {/* Кнопка для зменшення значення */}
            <p>{count}</p> {/* Відображення поточного значення лічильника */}
            <span onClick={incrementCount}>+</span> {/* Кнопка для збільшення значення */}
        </div>
    );
}

export default CartCounter;
