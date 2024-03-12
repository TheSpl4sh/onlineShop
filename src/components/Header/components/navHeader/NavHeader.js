import { NavLink } from "react-router-dom";
import "./NavHeader.scss"

const NavHeader = ({className, navheader, navheaderList, navheaderListItem, onClick  }) => {

  return (
    <>
    <nav className={`navheader ${className || navheader}`} >
    <ul className={`navheader-list ${className || navheaderList}`}>
      {/* <div className="navheader-list"> */}
      <li className={`navheader-list__item line ${className || navheaderListItem}`} onClick={onClick}>
        {/* <li className="navheader-list__item"> */}
          <hr className="orang-line" ></hr>
          <hr className="black-line" ></hr>
        </li>
        <li className="navheader-list__item">
          {/* <Link to="AllProductPage" className="navheader-list__item"> */}
          <i>Меню</i>		     
          {/* </Link> */}
        </li>        
        <NavLink
        to="/catalog"
        // className="navheader-list__item"
        className={`navheader-list__item ${className || navheaderListItem}`}
        >
          Каталог
        </NavLink>

        <li className={`navheader-list__item ${className || navheaderListItem}`}>
        {/* <li className="navheader-list__item"> */}
          {/* <Link to="/Men" className="menu-list__item"> */}
		  Чоловічі 
          {/* </Link> */}
        </li>
        {/* <li className="navheader-list__item"> */}
        <li className={`navheader-list__item ${className || navheaderListItem}`}>
          {/* <Link to="/Women" className="menu-list__item"> */}
		  Жіночі 
          {/* </Link> */}
        </li>
        {/* <li className="navheader-list__item"> */}
        <li className={`navheader-list__item ${className || navheaderListItem}`}>
          {/* <Link to="/Children" className="menu-list__item"> */}
		  Дитячі
          {/* </Link> */}
        </li>
        {/* <li className="navheader-list__item"> */}
        <li className={`navheader-list__item ${className || navheaderListItem}`}>
          {/* <Link to="/Sale" className="menu-list__item">           */}
		  Розпродаж             
          {/* </Link> */}
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavHeader;


