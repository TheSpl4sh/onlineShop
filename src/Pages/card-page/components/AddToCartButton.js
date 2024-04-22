import React from 'react';
import data from './data.json'; // Шлях до вашого файлу даних

function AddToCartButton() {
    const sendDataToServer = (item) => {
        fetch('/api/cart/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
            console.log('Item added to cart successfully');
        })
        .catch(error => {
            console.error('Error adding item to cart:', error);
        });
    };

    const handleAddToCart = () => {
        const itemWithIdOne = data.find(item => item.id === 1);
        sendDataToServer(itemWithIdOne);
    };

    return (
        <button onClick={handleAddToCart}>Додати в кошик</button>
    );
}

export default AddToCartButton;
