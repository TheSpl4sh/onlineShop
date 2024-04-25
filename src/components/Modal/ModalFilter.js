import React from "react";
import { FaTimes } from "react-icons/fa";
import CustomizedSlider from "../../Pages/AllProductsPage/components/CustomizedSlider/CustomizedSlider";
import {
  SelectSize,
  SelectColor,
  SelectMaterial,
} from "../../components/Select";

import "./ModalFilter.scss";

const ModalFilter = ({ isOpen, handleClose, props }) => {
  const {
    handleSizeChange,
    handleColorChange,
    handleMaterialChange,
    clearFilters, 
  } = props;

  const handleOutside = (event) => {
    if (!event.target.closest(".modal-filter")) {
      handleClose();
    }
  };

  return (
	<>
      {isOpen && (
        <div
          className={`modal-wrapper ${isOpen ? "open" : ""}`}
          onClick={handleOutside}
        >
          <div className="modal-filter">
            <FaTimes className="modal-close-icon" onClick={handleClose} />
			<SelectSize onChange={handleSizeChange} />
			<CustomizedSlider />
			<SelectColor onChange={handleColorChange} />
			<SelectMaterial onChange={handleMaterialChange} />
			<button className="modal-filter__btn" onClick={clearFilters}>
			<FaTimes />
			Скинути Фільтр	
			</button>
            {/* <h3>ModalFilter</h3> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFilter;
