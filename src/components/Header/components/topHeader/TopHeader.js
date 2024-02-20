// import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import "./topHeader.scss";




const TopHeader = () => {
  return (
    <>
      <div className="topheader container">
        <Breadcrumbs/>
        <form className="topheader-form" >
         {/* <Link to="/AuthorizationFormPage" className="topheader-form__item"> */} 
        <FaRegUser className="topheader-form__icon" color="curent-color" />        
        <p className="topheader-form__text" >Логін/Регістрація</p>       
        {/* </Link> */}
        </form>

        {/* <div> */}
        {/* <FaRegUser /> */}
              
         {/* <Link to="/LoginPage чи SignInPage" className="menu-form__item"> */}
        {/* <p>Вхід /</p> */}
        {/* </Link> */}

        {/* <LinkLink to="/RegistrationFormPage чи SignUpFormPage" className="menu-list__item"> */}
        {/* <p>Регістрація</p> */}
        {/* </Link> */}
        {/* </div> */}

      </div>
    </>
  );
};

export default TopHeader;
