// // import { Link } from "react-router-dom";
// import {Link} from "react-router-dom"
// import { ReactComponent as Logo } from "./components/logo/logo.svg";
// // import Logo from"./components/Logo/Logo.svg";
// import TopHeader from "./components/topHeader/TopHeader";

// import "./Header.scss";

// const Header = () => {
// 	return (
// 		<header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__logo">
//             <Link to="/" >
//               <Logo />
//             </Link>
//           </div>
// 		  <TopHeader />
//           {/* <NavHeader /> */}
//           {/* <SearchHeader /> */}
//           <div className="header__actions">
//             <div className="header__icon-list">
//               <div className="icon-favorite">
//               {/* <Link to="favorite" className="favorite">
//               <Favorite />
//               {favorites.length}
//             </Link> */}
//                 {/* <span className="count">
//                      <Favorite />
//                       {favorites.length}
//                 </span> */}
//               </div>
//               <div className="icon-basket">
//               {/* <Link to="basket" className="basket">
//               <ShoppingBasket />
//                      {basket.length}

//             </Link> */}

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
// 	 );
// }

// export default Header;

import { ReactComponent as Logo } from "./components/icons/logo.svg";
import NavHeader from "./components/navHeader/NavHeader";
import TopHeader from "./components/topHeader/TopHeader";
import Action from "./components/action/Action";

import "./Header.scss";


const Header = () => {
  return (
    <header className="header">              
        <div className="container">
        <TopHeader />      
        <div className="header-wrapper">
          <div className="header-logo">
             <Logo /> 
          </div>          
          <NavHeader />
          <Action />
        </div>
      </div>
    </header>
  );
};

export default Header;
