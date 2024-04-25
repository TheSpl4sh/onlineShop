import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaTimes, FaRegUser } from "react-icons/fa";
import { BsHeart, BsBasket3 } from "react-icons/bs";
import Breadcrumbs from "../Header/components/breadcrumbs/Breadcrumbs";
import NavHeader from "../Header/components/navHeader/NavHeader";
import Search from "../Search/Search";
import MouseLeaveContext from '../MouseLeaveContext';


import "./ModalMenu.scss";

const ModalMenu = ({ handleClose }) => {
  const [isOpen] = useState(false);

  
  return (
    <div className={`modal-wrapper ${isOpen ? "open" : ""}`} >
      <div className="modal-menu" >
        <FaTimes className="modal-close-icon" onClick={handleClose} />
        <div className="search-container">
        <MouseLeaveContext.Provider value={handleClose}>
            <Search
              inputClassName="search-input__modal"
              resultsClassName="search-results__modal"
              resultsItemClassName="search-results__modal-item"
            />
          </MouseLeaveContext.Provider>
          <div className="search-icon__modal">
          <FaSearch/>
          </div>
          
        </div>
        <div className="modalForm-container">
          <form className="modalForm-form">
            <NavLink to="/auth" className="topheader-form__item"  onClick={handleClose} >
              <FaRegUser
                className="topheader-form__icon"
                color="curent-color"
              />
              <p className="topheader-form__text">Логін/Регістрація</p>
            </NavLink>
          </form>
          <div className="modalForm-icon__wrapper">
              <NavLink to="/favorites" className="modalForm-icon__item">
                <BsHeart  onClick={handleClose} />
              </NavLink>
              <NavLink to="/cart" className="modalForm-icon__item">
                <BsBasket3  onClick={handleClose} />
              </NavLink>
          </div>
        </div>
        <div className="modalNav-container">
        <NavHeader
        navheader="navModal"
        navheaderList="navModal-List"
        navheaderListItem="navModal-List__Item"
        onClick={handleClose}
        hideFirstTwoItems={true}
        />  
        </div>
        <Breadcrumbs
          menu="modalNavMenu"
          menuList="modalNavMenu-list"
          menuItem="modalNavMenu-list__item"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default ModalMenu;
