import React, { useState } from "react";
// import Select from 'react-select';
import { NavLink } from "react-router-dom";
import { FaSearch, FaTimes, FaRegUser } from "react-icons/fa";
import { BsHeart, BsBasket3 } from "react-icons/bs";
import Breadcrumbs from "../Header/components/breadcrumbs/Breadcrumbs";
// import { SelectDemiseason } from "../../select/Select";

import "./ModalMenu.scss";

const ModalMenu = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className={`modal-wrapper ${isOpen ? "open" : ""}`}>
      <div className="modal">
        <FaTimes className="modal-close-icon" onClick={handleClose} />
        <div className="search-container">
          <input
            className="search-container__input"
            type="text"
            placeholder="Пошук..."
          />
          <FaSearch />
        </div>
        <div className="modalForm-container">
          <form className="modalForm-form">
            <NavLink to="/auth" className="topheader-form__item">
              <FaRegUser
                className="topheader-form__icon"
                color="curent-color"
              />
              <p className="topheader-form__text">Логін/Регістрація</p>
            </NavLink>
            {/* <FaRegUser className="topheader-form__icon" color="curent-color" />
            <p className="topheader-form__text">Логін/Регістрація</p> */}
          </form>
          <div className="modalForm-icon__wrapper">
            {/* <div className="modalForm-icon__item"> */}
              <NavLink to="/favorites" className="modalForm-icon__item">
                <BsHeart />
              </NavLink>
            {/* </div> */}
            {/* <div className="modalForm-icon__item"> */}
              <NavLink to="/cart" className="modalForm-icon__item">
                <BsBasket3 />
              </NavLink>
            {/* </div> */}
          </div>
        </div>
        <div className="modalNav-container">
          <NavLink to="/catalog" className="modalNav-label">
            Каталог
          </NavLink>

          <NavLink to="/men" className="modalNav-label">
            Чоловічі
          </NavLink>

          <NavLink to="/woman" className="modalNav-label">
            Жіночі
          </NavLink>

          <NavLink to="/children" className="modalNav-label">
            Дитячі
          </NavLink>

          <NavLink to="/sale" className="modalNav-label">
            Розпродаж
          </NavLink>

          {/* <label className="modalNav-label" htmlFor="Sale">
            Розпродаж
          </label> */}
        </div>
        <Breadcrumbs
          menu="modalNavMenu"
          menuList="modalNavMenu-list"
          menuItem="modalNavMenu-list__item"
        />
        <h3>modal</h3>
      </div>
    </div>
  );
};

export default ModalMenu;
