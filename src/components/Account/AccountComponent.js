import React, { useState } from 'react';
import "./AccountComponent.scss";

const AccountComponent = () => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div>
            <ul className='account-components__container'>
                <li className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>Мій Аккаунт</li>
                <li className={activeTab === 'edit' ? 'active' : ''} onClick={() => setActiveTab('edit')}>Редагувати Профіль</li>
                <li className={activeTab === 'favorites' ? 'active' : ''} onClick={() => setActiveTab('favorites')}>Обрані Товари</li>
                <li className={activeTab === 'exit' ? 'active' : ''} onClick={() => setActiveTab('exit')}>Вийти з Аккаунту</li>
            </ul>
            {activeTab === 'orders' && (
                <p>Hello1</p>
            )}
            {activeTab === 'edit' && (
                <p>Hello2</p>
            )}
            {activeTab === 'favorites' && (
                <p>Hello3</p>
            )}
            {activeTab === 'exit' && (
                <p>Hello4</p>
            )}
        </div>
    )
 };

 export default AccountComponent;