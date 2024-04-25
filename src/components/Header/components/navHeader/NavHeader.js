import { NavLink } from "react-router-dom";
import "./NavHeader.scss";

const NavHeader = ({
  className,
  navheader,
  navheaderList,
  navheaderListItem,
  onClick,
  hideFirstTwoItems
}) => {
  return (
    <>
      <nav className={`navheader ${className || navheader}`}>
  <ul className={`navheader-list ${className || navheaderList}`}>
    {!hideFirstTwoItems && (
      <>
        <li
          className={`navheader-list__item line ${className || navheaderListItem}`}
          onClick={onClick}
        >
          <hr className="orang-line"></hr>
          <hr className="black-line"></hr>
        </li>
        <li className={`navheader-list__item ${className || navheaderListItem}`} onClick={onClick}>
          <i>Меню</i>
        </li>
      </>
    )}
    <li className={`navheader-list__item ${className || navheaderListItem}`}>
      <NavLink to="/catalog" onClick={onClick}>Каталог</NavLink>
    </li>
    <li className={`navheader-list__item ${className || navheaderListItem}`}>
      <NavLink to="/men" onClick={onClick}>Чоловічі</NavLink>
    </li>
    <li className={`navheader-list__item ${className || navheaderListItem}`}>
      <NavLink to="/woman" onClick={onClick}>Жіночі</NavLink>
    </li>
    <li className={`navheader-list__item ${className || navheaderListItem}`}>
      <NavLink to="/children" onClick={onClick}>Дитячі</NavLink>
    </li>
    <li className={`navheader-list__item ${className || navheaderListItem}`}>
      <NavLink to="/sale" onClick={onClick}>Розпродаж</NavLink>
    </li>
  </ul>
</nav>
    </>
  );
};

export default NavHeader;
