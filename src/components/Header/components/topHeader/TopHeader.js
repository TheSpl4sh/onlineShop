import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import "./topHeader.scss";

const TopHeader = () => {
  return (
    <>
      <div className="topheader">
        <Breadcrumbs/>
        <form className="topheader-form" >
        <Link to="/auth" className="topheader-form__item"> 
        <FaRegUser className="topheader-form__icon" color="curent-color" />        
        <p className="topheader-form__text" >Логін/Регістрація</p>       
        </Link>
        </form>
      </div>
    </>
  );
};

export default TopHeader;
