import React, { useState } from 'react';
import "./AccountComponent.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { TfiViewListAlt } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";

const AccountComponent = () => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div>
            <ul className='account-components__container'>
                <li className={`account-components__list ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                    <MdOutlineAccountCircle className='account-components__icon' />
                    <span className='account-components__tittle'>Мій Аккаунт</span>
                </li>
                <li className={`account-components__list ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>
                    <TbUserEdit className='account-components__icon'/>
                    <span className='account-components__tittle'>Редагувати Профіль</span>
                </li>
                <li className={`account-components__list ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')}>
                    <TfiViewListAlt className='account-components__icon'/>
                    <span className='account-components__tittle'>Обрані Товари</span>
                </li>
                <li className={`account-components__list ${activeTab === 'exit' ? 'active' : ''}`} onClick={() => setActiveTab('exit')}>
                    <RxExit className='account-components__icon'/>
                    <span className='account-components__tittle'>Вийти з Аккаунту</span>
                </li>
            </ul>
            {activeTab === 'orders' && (
                <p>Вітаю!</p>
            )}
            {activeTab === 'edit' && (
                <p>Зміна паролю</p>
            )}
            {activeTab === 'favorites' && (
                <p>Обрані товари</p>
            )}
            {/* {activeTab === 'exit' && (
                <p>Hello4</p>
            )} */}
        </div>
    )
 };

 export default AccountComponent;