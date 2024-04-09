import React, { useState } from 'react';
import "./AccountComponent.scss";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { TfiViewListAlt } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import  NameForm  from "./NameEditForm/NameEditForm";


const AccountComponent = () => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div className='account-components__container'>
            <ul className='account-components__menu'>
                <li className={`account-components__list ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                    <MdOutlineAccountCircle className='account-components__icon' />
                    <span className='account-components__title'>Мій профіль</span>
                </li>
                <li className={`account-components__list ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>
                    <TbUserEdit className='account-components__icon'/>
                    <span className='account-components__title'>Редагувати Профіль</span>
                </li>
                <NavLink to="/favorites" className={`account-components__list ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')}>
                    <TfiViewListAlt className='account-components__icon'/>
                    <span className='account-components__title'>Обрані Товари</span>
                </NavLink>
                <li className={`account-components__list ${activeTab === 'exit' ? 'active' : ''}`} onClick={() => setActiveTab('exit')}>
                    <RxExit className='account-components__icon'/>
                    <span className='account-components__title'>Вийти з Аккаунту</span>
                </li>
            </ul>
            <div className='account-components__content'>
                {activeTab === 'orders' && (
                    <>
                    <p className='content-title'>Вітаю, Іван!</p>
                    <div className='account-components__orders'>
                        <table className='account-components__table'>
                            <thead className='account-components__head'>
                                <tr className='account-components__row'>
                                    <th className='account-components__row-list'>Номер</th>
                                    <th className='account-components__row-list'>Дата</th>
                                    <th className='account-components__row-list'>Статус</th>
                                    <th className='account-components__row-list'>Разом</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#23234-11</td>
                                    <td>31 Березня 2024</td>
                                    <td>Виконаний</td>
                                    <td>12 932</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </>
                )}
                {activeTab === 'edit' && (
                    <>
                        <p className='content-title'>Редагувати профіль</p>
                        <div className='account-components__edit'>
                            <div className='account-components__edit-container'>
                                <NameForm />
                            </div>
                        </div>
                    </>
                )}
                {/* {activeTab === 'favorites' && (
                    <h3>Обрані товари</h3>
                )}  */}
                {activeTab === 'exit' && (
                    <p>Тут має бути вихід</p>
                )}
            </div>
            {/* {activeTab === 'exit' && (
                <p>Hello4</p>
            )} */}
        </div>
    )
 };

 export default AccountComponent;