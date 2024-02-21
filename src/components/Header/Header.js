
import { ReactComponent as Logo } from "./components/icons/logo.svg";

import NavHeader from "./components/navHeader/NavHeader";
import TopHeader from "./components/topHeader/TopHeader";
import Action from "./components/action/Action";

import "./Header.scss";




const Header = () => {
  return (
    <header className="header container">              
      {/* <div className="container"> */}
            <TopHeader />      
        <div className="header-wrapper">
            <div className="header-logo">
              <Logo /> 
            </div>                             
              <NavHeader />         
              <Action />
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
