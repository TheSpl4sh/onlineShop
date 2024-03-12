import React from "react";
// import { NavLink } from "react-router-dom";
import { FaSearch, FaTimes, FaRegUser } from "react-icons/fa";
import { BsHeart, BsBasket3 } from "react-icons/bs";
import Breadcrumbs from "../../Header/components/breadcrumbs/Breadcrumbs";
import CustomSelect from "../CustomSelect";

import "./ModalMenu.scss";
// import Action from "../../Header/components/action/Action";

const ModalMenu = ({ handleClose, isOpen }) => {
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
            <FaRegUser className="topheader-form__icon" color="curent-color" />
            <p className="topheader-form__text">Логін/Регістрація</p>
          </form>
          <div className="modalForm-icon__wrapper">
            {/* <Action /> */}
            <div className="modalForm-icon__item">
              {/* <NavLink to="/favorites">
                <BsHeart />
              </NavLink> */}
              <BsHeart />
            </div>
            <div className="modalForm-icon__item">
              {/* <NavLink to="/cart">
                <BsBasket3 />
              </NavLink> */}
              <BsBasket3 />
            </div>
          </div>
        </div>
        <div className="modalNav-container">
          <div className="modalNav-container">
            <CustomSelect
              options={[
                { value: "demi-season", label: "Демісезон" },
                { value: "Summer", label: "Літо" },
                { value: "Winter", label: "Зима" },
                { value: "Models", label: "Моделі" },
              ]}
            />
          </div>
          <label htmlFor="men">Чоловічі</label>
          <label htmlFor="Women">Жіночі</label>
          <label htmlFor="children">Дитячі</label>
          <label htmlFor="Sale">Розпродаж</label>
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
