import React, { useState } from 'react';
import Select from 'react-select';
// import { NavLink } from "react-router-dom";
import { FaSearch, FaTimes, FaRegUser } from "react-icons/fa";
import { BsHeart, BsBasket3 } from "react-icons/bs";
import Breadcrumbs from "../../Header/components/breadcrumbs/Breadcrumbs";
// import CustomSelect from "../CustomSelect";
//  import { CustomSelect } from "../../select/Select";
// import { Select } from "../../select/Select";

import "./ModalMenu.scss";


const ModalMenu = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
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
        <label className="modalNav-label" htmlFor="catalogue" onClick={() => setIsOpen(!isOpen)}>Каталог</label>
          {isOpen && (
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={[
              { value: "Runners", label: "Бігові" },
          { value: "Summer", label: "Літо" },
          { value: "Winter", label: "Зима" },
          { value: "Models", label: "Моделі" },
            ]}
          />
            // <CustomSelect
              // className="catalogue-select"
              // title="Демісезон"
              // options={[
                // 'Бігові',
                // 'Літо',
                // 'Зима',
                // 'Моделі',
            //     { value: "Demi-season", label: "Демісезон" },
            //     { value: "", label: "" },
            //     { value: 'Runners', label: 'Бігові' },
            //     { value: 'Summer', label: 'Літо' },
            //     { value: 'Winter', label: 'Зима' },
            //     { value: 'Models', label: 'Моделі' },
            //   ]}
            // />
          )}

        {/* < CustomSelect
        className=""
         title="Демісезон"
        options={[
          // { value: "Demi-season", label: "Демісезон" },
          { value: "Runners", label: "Бігові" },
          { value: "Summer", label: "Літо" },
          { value: "Winter", label: "Зима" },
          { value: "Models", label: "Моделі" },
        ]}
        /> */}
        {/* <CustomSelect
            className=""
            //  title="Демісезон"
            options={[
              // {  label: "Демісезон" },
              { value: "Demi-season", label: "Демісезон" },
               { value: "Runners", label: "Бігові" },
              { value: "Summer", label: "Літо" },
              { value: "Winter", label: "Зима" },
              { value: "Models", label: "Моделі" },
            ]}
          />
          <CustomSelect
            className=""
             title="Літо"
            options={[
              // {  label: "Демісезон" },
              // { value: "demi-season", label: "Демісезон" },
              // { value: "", label: "" },
              { value: "Summer", label: "Літо" },
              { value: "Winter", label: "Зима" },
              { value: "Models", label: "Моделі" },
            ]}
          />
          <CustomSelect
            className=""
             title="Зима"
            options={[ */}
              {/* // {  label: "Демісезон" },
              // { value: "demi-season", label: "Демісезон" },
              // { value: "", label: "" },
              { value: "Summer", label: "Літо" },
              { value: "Winter", label: "Зима" },
              { value: "Models", label: "Моделі" },
            ]}
          />
          <CustomSelect
            className=""
             title="Моделі"
            options={[
              // {  label: "Демісезон" },
              // { value: "demi-season", label: "Демісезон" },
              // { value: "", label: "" },
              { value: "Summer", label: "Літо" },
              { value: "Winter", label: "Зима" },
              { value: "Models", label: "Моделі" },
            ]}
          /> */}
          {/* <div className="modalNav-container"> */}
            {/* <CustomSelect
              options={[
                { value: "demi-season", label: "Демісезон" },
                { value: "Summer", label: "Літо" },
                { value: "Winter", label: "Зима" },
                { value: "Models", label: "Моделі" },
              ]}
            /> */}
          {/* </div> */}
          
          <label className="modalNav-label" htmlFor="men">Чоловічі</label>
          <label className="modalNav-label" htmlFor="Women">Жіночі</label>
          <label className="modalNav-label" htmlFor="children">Дитячі</label>
          <label className="modalNav-label" htmlFor="Sale">Розпродаж</label>
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
