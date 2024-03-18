import { NavLink } from "react-router-dom";
import "./NavHeader.scss";

const NavHeader = ({
  className,
  navheader,
  navheaderList,
  navheaderListItem,
  onClick,
}) => {
  return (
    <>
      <nav className={`navheader ${className || navheader}`}>
        <ul className={`navheader-list ${className || navheaderList}`}>
          {/* <div className="navheader-list"> */}
          <li
            className={`navheader-list__item line ${
              className || navheaderListItem
            }`}
            onClick={onClick}
          >
            {/* <li className="navheader-list__item"> */}
            <hr className="orang-line"></hr>
            <hr className="black-line"></hr>
          </li>
          <li className="navheader-list__item">
            {/* <Link to="AllProductPage" className="navheader-list__item"> */}
            <i>Меню</i>
            {/* </Link> */}
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={`navheader-list__item ${className || navheaderListItem}`}>
              Каталог
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/men"
              className={`navheader-list__item ${
                className || navheaderListItem
              }`}
            >
              Чоловічі
            </NavLink>
          </li>

          <li>
            <NavLink to="/woman" className={`navheader-list__item ${
                className || navheaderListItem
              }`}
            >
              Жіночі
            </NavLink>
          </li>

          <li>
            <NavLink to="/children" className={`navheader-list__item ${
                className || navheaderListItem
              }`}
            >
              Дитячі
            </NavLink>
          </li>

          <li>
            <NavLink to="/sale" className={`navheader-list__item ${
                className || navheaderListItem
              }`}
            >
              Розпродаж
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavHeader;
