 import { FaTimes } from "react-icons/fa";
 import CustomizedSlider from "../../Pages/AllProductsPage/components/CustomizedSlider/CustomizedSlider";
 import {
	SelectSize,
	SelectSort,
	SelectColor,
	SelectMaterial,
  } from "../../components/Select";

  import "./ModalFilter.scss";

const ModalFilter = ({props}) => {
	const { 
		handleClose, 
		isOpen, 
		handleSizeChange, 
		handleColorChange, 
		handleMaterialChange, 
		clearFilters, 
		handleSortChange } = props;
	return ( 
		<>
		<div className={`modal-wrapper ${isOpen ? "open" : ""}`}>
		<div className="modal-filter">
		<FaTimes className="modal-close-icon" onClick={handleClose} />
		<SelectSize onChange={handleSizeChange}/>
		<CustomizedSlider />
		<SelectColor onChange={handleColorChange} />
		<SelectMaterial onChange={handleMaterialChange} />
		  <SelectSort 
          onChange={handleSortChange}/>
		  <button onClick={clearFilters}>
            <FaTimes />
            Скинути Фільтр
          </button>
		<h3>ModalFilter</h3>
		</div>
		</div>
		</>
	 );
}
 
export default ModalFilter;
