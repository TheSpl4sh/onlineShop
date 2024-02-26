
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const MenuToggle = ({ toggle, open }) => (
  <button
    className={open ? "menu-toggle toggle-open" : "menu-toggle toggle-closed"}
    onClick={toggle}
  >
    <IconContext.Provider value={{ className: "menu-toggle-icon" }}>
      {open ? <FaTimes /> : <FaBars />}
    </IconContext.Provider>
  </button>
);

export default MenuToggle;
