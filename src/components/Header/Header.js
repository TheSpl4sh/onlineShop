import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./components/icons/logo.svg";
import NavHeader from "./components/navHeader/NavHeader";
import TopHeader from "./components/topHeader/TopHeader";
import Action from "./components/action/Action";
import  ModalMenu  from "../Modal/ModalMenu";

import "./Header.scss";

// const bp = 768; 
// const lg = 1920; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelModal = () => setIsOpen(!isOpen);


  // const isMobile = window.matchMedia("(max-width: 768px)").matches;
  // const mediaOnClick = () => {
  //   if (window.matchMedia(`(min-width: ${lg}px)`).matches) {
  //     return;
  //   }
  //   handelModal();
  // };
  
  
  return (
    <header className="header container">
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
