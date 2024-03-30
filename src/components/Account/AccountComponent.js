import React, { useState } from 'react';
import "./AccountComponent.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { TfiViewListAlt } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";

const AccountComponent = () => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div className='account-components__container'>
            <ul className='account-components__menu'>
                <li className={`account-components__list ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                    <MdOutlineAccountCircle className='account-components__icon' />
                    <span className='account-components__tittle'>Мій профіль</span>
                </li>
                <li className={`account-components__list ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>
                    <TbUserEdit className='account-components__icon'/>
                    <span className='account-components__tittle'>Редагувати Профіль</span>
                </li>
                <NavLink to="/favorites" className={`account-components__list ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')}>
                    <TfiViewListAlt className='account-components__icon'/>
                    <span className='account-components__tittle'>Обрані Товари</span>
                </NavLink>
                <li className={`account-components__list ${activeTab === 'exit' ? 'active' : ''}`} onClick={() => setActiveTab('exit')}>
                    <RxExit className='account-components__icon'/>
                    <span className='account-components__tittle'>Вийти з Аккаунту</span>
                </li>
            </ul>
            <div className='account-components__content'>
                {activeTab === 'orders' && (
                    <>
                    <h3>Вітаю, Іван!</h3>
                    <div className='account-components__address'>
                        <div className='account-components__address-head'>
                            <h3 style={{marginTop:'21px'}}>Іван Репецький</h3>
                            <div className='account-components__address-head-map'>
                                <FaPencil />    
                                <p>Редагувати</p>
                            </div>
                        </div>
                        <div className='account-components__address-main'>

                        </div>
                        <div className='account-components__address-edit'>

                        </div>
                    </div>
                    </>
                )}
                {activeTab === 'edit' && (
                    <h3>Зміна паролю</h3>
                )}
                {activeTab === 'favorites' && (
                    <h3>Обрані товари</h3>
                )} 
            </div>
            {/* {activeTab === 'exit' && (
                <p>Hello4</p>
            )} */}
        </div>
    )
 };

 export default AccountComponent;