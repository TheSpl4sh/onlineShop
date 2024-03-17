import React, { useState, useEffect } from "react";
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
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filters, setFilters] = useState({
    size: null,
    color: null,
    compound: null,
  });
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  
  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  const clearFilters = () => {
    setFilters({
      size: null,
      color: null,
      compound: null,
    });
    setFilteredProducts(data.products);
  };

  const applyFilters = () => {
    let filtered = data.products;
    if (filters.size) {
      filtered = filtered.filter(product => product.size.includes(filters.size));
    }
    if (filters.color) {
      filtered = filtered.filter(product => product.color.includes(filters.color));
    }
    if (filters.compound) {
      filtered = filtered.filter(product => product.compound.includes(filters.compound));
    }
    setFilteredProducts(filtered);
  };

  const handleSizeChange = (selectedOption) => {
    setFilters({ ...filters, size: selectedOption.label });
  };

  const handleColorChange = (selectedOption) => {
    setFilters({ ...filters, color: selectedOption.label });
  };

  const handleMaterialChange = (selectedOption) => {
    setFilters({ ...filters, compound: selectedOption.label });
  };

  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <section className="catalog container">
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
          <SelectSize onChange={handleSizeChange}/>
        </div>
        <div className="select-wrapper__item">
          <CustomSlider />
        </div>
        <div className="select-wrapper__item">
          <SelectColor onChange={handleColorChange} />
        </div>
        <div className="select-wrapper__item">
          <SelectMaterial onChange={handleMaterialChange} />
        </div>
        <div className="select-wrapper__item">
          <button onClick={clearFilters}>
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
          <SelectSort  />
        </div>
      </div>
      <div className="sort-out">
        <span></span>
      </div>
      <div className="all-products-card">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} />
    </section>
  );
};

export { AllProductsPage };
