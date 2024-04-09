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










// import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";
// import { ReactComponent as Logo } from "./components/icons/logo.svg";
// import NavHeader from "./components/navHeader/NavHeader";
// import TopHeader from "./components/topHeader/TopHeader";
// import Action from "./components/action/Action";
// import  ModalMenu  from "../Modal/ModalMenu";

// import "./Header.scss";

// import { useMatchMedia } from "../useMatchMedia";
// // import { useMatchMedia } from './useMatchMedia.js';


// const myMediaQueries = {
//   mobile: "(max-width: 480px)",
//   tablet: "(min-width: 481px) and (max-width: 767px)",
//   desktop: "(min-width: 768px)"
// };

// // const bp = 768; 
// // const lg = 1920; 

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handelModal = () => setIsOpen(!isOpen);

//   const { mobile, desktop, tablet } = useMatchMedia(myMediaQueries);
//   console.log(mobile);

//   // const { mobile, desktop, tablet } = reactMatchMedia(myMediaQueries);
//   // console.log(mobile);


//   // const isMobile = window.matchMedia("(max-width: 768px)").matches;
//   // const mediaOnClick = () => {
//   //   if (window.matchMedia(`(min-width: ${lg}px)`).matches) {
//   //     return;
//   //   }
//   //   handelModal();
//   // };
  
  
//   return (
//     <header className="header container">
//       <TopHeader />
//       <div className="header-wrapper">
//         <div className="header-logo">
//           <NavLink to="/">
//             <Logo />
//           </NavLink>
//         </div>
//         <NavHeader onClick={handelModal}/>
//         <Action />
//       </div>
//       {isOpen && <ModalMenu isOpen={isOpen} handleClose={handelModal} />}
//       <h1>My Website Header</h1>
//       <p>Mobile: {mobile.toString()}</p>
//       <p>Desktop: {desktop.toString()}</p>
//       <p>Tablet: {tablet.toString()}</p>
//     </header>
//   );
// };

// export default Header;
