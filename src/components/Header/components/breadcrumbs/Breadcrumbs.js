import { NavLink } from "react-router-dom";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({className, menu, menuList, menuItem}) => {
  return (
    <nav className={`menu ${className || menu}`}>       
      <ul className={`menu-list ${className || menuList}`}>
        <li className={`menu-list__item ${className || menuItem}`}>          
          <NavLink to="AboutTheStore">
          Про магазин
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Blog">
          Наш блог
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Delivery">
          Доставка
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Counting">
          Розрахунок
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Contacts">          
          Контакти
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Individual order">          
          Індивідуальне замовлення
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
