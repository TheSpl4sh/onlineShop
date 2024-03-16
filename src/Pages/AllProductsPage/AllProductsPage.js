import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import data from "../../data.json";
import CustomSlider from "./components/customSlider/CustomSlider";
import DisplayParameter from "./components/displayParameter/DisplayParameter";
import MenuToggle from "./components/menuToggle/MenuToggle";
import Pagination from "./components/pagination/Pagination";
import {
  SelectSize,
  SelectSort,
  SelectColor,
  SelectMaterial,
} from "../../components/select/Select";
import Card from "../../components/Card/Card";

import "./AllProductsPage.scss";

const AllProductsPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [productSize, setProductSize] = useState(data.products);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };
 
  const handleSizeChange = (selectedOption) => {
    const selectedSize = selectedOption.label;
    const filteredProducts = data.products.filter(product => product.size.includes(selectedSize));
    setProductSize(filteredProducts);
  };
 
  return (
    <section className="catalog container">
      {/* <h1>{name}</h1> */}
      <h1>Коллекция Air Max</h1>
      <hr />
      <div className="select-mobile">
        <div className="select-mobile__button">
          <MenuToggle
            toggle={toggleFilters}
            open={isFiltersOpen}
            onClick={toggleFilters}
          />
          Показати фільтри
        </div>
      </div>
      <div className="select-wrapper">
        <div className="select-wrapper__item">
          <SelectSize onChange={handleSizeChange} />
        </div>
        <div className="select-wrapper__item">
          <CustomSlider
          //  title="Ціна:"
          // min={0}
          // max={1000}
          // onChange={({ min, max }) =>
          //   console.log(`min = ${min}, max = ${max}`)
          // }
          />
        </div>
        <div className="select-wrapper__item">
          <SelectColor />
        </div>
        <div className="select-wrapper__item">
          <SelectMaterial />
        </div>
        <div className="select-wrapper__item">
          <button>
            <FaTimes />
            Скинути Фільтр
          </button>
        </div>
      </div>
      <hr />
      <div className="sorting-wrapper">
        <div className="sorting-wrapper__show">
          <DisplayParameter onItemsPerPageChange={handleItemsPerPageChange} />
        </div>
        <div className="sorting-wrapper__price">
          <SelectSort />
        </div>
      </div>
      <div className="sort-out">
        <span></span>
      </div>
      <div className="all-products-card">
        {productSize.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} />
    </section>
  );
};

export { AllProductsPage };
