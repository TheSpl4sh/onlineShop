import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./components/icons/logo.svg";
import NavHeader from "./components/navHeader/NavHeader";
import TopHeader from "./components/topHeader/TopHeader";
import Action from "./components/action/Action";
import ModalMenu from "../Modal/ModalMenu";

// import { useMatchMedia } from "../useMatchMedia";

import "./Header.scss";

// const myMediaQueries = {
//   mobile: "(max-width: 480px)",
//   tablet: "(min-width: 481px) and (max-width: 767px)",
//   desktop: "(min-width: 768px) and (max-width: 1920px)"
// };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelModal = () => setIsOpen(!isOpen);

  // const { mobile, desktop, tablet } = useMatchMedia(myMediaQueries);

   

  return (
    <header className="header ">
      <TopHeader />
      <div className="header-wrapper">
        <div className="header-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <NavHeader onClick={handelModal}/>
        <Action />
      </div>
      {isOpen && <ModalMenu isOpen={isOpen} handleClose={handelModal} />}
    </header>
  );
};

export default Header;