import { Link } from "react-router-dom";

import "./Breadcrumbs.scss";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Breadcrumbs = () => {
  return (
    <nav className="menu">
      <ul className="menu-list" onClick={handleClick}>
        <li className="menu-list__item">
          {/* <Link to="AboutTheStore" className="menu-list__item"> */}
          Про магазин
          {/* </Link> */}
        </li>
        <li className="menu-list__item">
          {/* <Link to="Blog" className="menu-list__item"> */}
          Наш блог
          {/* </Link> */}
        </li>
        <li className="menu-list__item">
          {/* <Link to="Delivery" className="menu-list__item"> */}
          Доставка
          {/* </Link> */}
        </li>
        <li className="menu-list__item">
          {/* <Link to="Counting" className="menu-list__item"> */}
          Розрахунок
          {/* </Link> */}
        </li>
        <li className="menu-list__item">
          <Link to="/contacts" className="menu-list__item">          
          Контакти
          </Link>
        </li>
        <li className="menu-list__item">
          {/* <Link to="/Individual order" className="menu-list__item">           */}
          Індивідуальне замовлення
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
