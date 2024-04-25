import { NavLink } from "react-router-dom";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({className, menu, menuList, menuItem, onClick}) => {
  return (
    <nav className={`menu ${className || menu}`}>       
      <ul className={`menu-list ${className || menuList}`}>
        <li className={`menu-list__item ${className || menuItem}`}>          
          <NavLink to="/about-us" onClick={onClick}>
          Про магазин
          </NavLink>
          {/* <Link to="/about-us">Про магазин</Link> */}
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Blog" onClick={onClick}>
          Наш блог
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Delivery" onClick={onClick}>
          Доставка
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Counting" onClick={onClick}>
          Розрахунок
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Contacts" onClick={onClick}>          
          Контакти
          </NavLink>
        </li>
        <li className={`menu-list__item ${className || menuItem}`}>
          <NavLink to="Individual order" onClick={onClick}>          
          Індивідуальне замовлення
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
