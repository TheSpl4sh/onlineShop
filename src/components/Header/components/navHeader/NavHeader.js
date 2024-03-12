import { NavLink } from "react-router-dom";
import "./NavHeader.scss"



const NavHeader = () => {

  return (
    <>
    <nav className="navheader">
      <div className="navheader-list">
        <li className="navheader-list__item">
          <hr className="gray-line1 "></hr>
          <hr className="gray-line2"></hr>
        </li>

        <li className="navheader-list__item">
          {/* <Link to="AllProductPage" className="navheader-list__item"> */}
          <i>Меню</i>		     
          {/* </Link> */}
        </li>
        
        <NavLink
        to="/catalog"
        className="navheader-list__item"
        >
          Каталог
        </NavLink>


        <li className="navheader-list__item">
          {/* <Link to="/Men" className="menu-list__item"> */}
		  Чоловічі 
          {/* </Link> */}
        </li>
        <li className="navheader-list__item">
          {/* <Link to="/Women" className="menu-list__item"> */}
		  Жіночі 
          {/* </Link> */}
        </li>
        <li className="navheader-list__item">
          {/* <Link to="/Children" className="menu-list__item"> */}
		  Дитячі
          {/* </Link> */}
        </li>
        <li className="navheader-list__item">
          {/* <Link to="/Sale" className="menu-list__item">           */}
		  Розпродаж             
          {/* </Link> */}
        </li>
      </div>
    </nav>
    </>
  );
};

export default NavHeader;


