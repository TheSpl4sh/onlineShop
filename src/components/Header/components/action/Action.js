
import { BsSearch, BsHeart, BsBasket3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Action.scss"

const Action = () => {
	return ( 
		<div className="header-icon">
			<div className="header-icon__item">
				<FaRegUser className="header-form__icon" color="curent-color" />
			</div>

            <div className="header-icon__item">				
				<BsSearch />								
			</div>

            <div className="header-icon__item">
				<NavLink
				to="/favorites">
					<BsHeart />
				</NavLink>
			</div>
            <div className="header-icon__item">
				<NavLink
				to="/cart">
					<BsBasket3 />
				</NavLink>
			</div>
			
          </div>
	 );
}
 
export default Action;