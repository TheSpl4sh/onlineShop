// import { Link } from "react-router-dom";

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

// =========================================

// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// export default function NavHeader() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       <Typography
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup="true"
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         Каталог
//       </Typography>
//       <Popover
//         id="mouse-over-popover"
//         sx={{
//           pointerEvents: 'none',
//         }}
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <Typography sx={{ p: 1 }}>
//           {"Літо"}
//           {"Літо"}
//           {"Літо"}
//           {"Літо"}
//           {"Літо"}
//         </Typography>
//       </Popover>
//     </div>
//   );
// }


// =================================================

