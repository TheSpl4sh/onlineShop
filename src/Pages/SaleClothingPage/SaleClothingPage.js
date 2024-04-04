import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import CustomizedSlider from '../AllProductsPage/components/CustomizedSlider/CustomizedSlider';
import DisplayParameter from "../AllProductsPage/components/displayParameter/DisplayParameter";
import MenuToggle from "../AllProductsPage/components/menuToggle/MenuToggle";
import Pagination from "../AllProductsPage/components/pagination/Pagination";
import {
  SelectSize,
  SelectSort,
  SelectColor,
  SelectMaterial,
} from "../../components/Select";
import axios from "axios";
import ModalFilter from "../../components/Modal/ModalFilter";

import "../AllProductsPage/AllProductsPage.scss";

const SaleClothingPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filters, setFilters] = useState({
    size: null,
    color: null,
    material: null,
  });
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("ordinary");

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
      material: null,
    });
  };

  const applyFilters = async () => {
    try {
      const response = await axios.get("/api/catalog-filter", {
        params: filters,
      });
      const filteredProducts = response.data.filter(product => product.discount === true);
    setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching filtered catalog:", error);
    }
  };

  const handleSizeChange = (selectedOption) => {
    setFilters({ ...filters, size: selectedOption.label });
  };

  const handleColorChange = (selectedOption) => {
    setFilters({ ...filters, color: selectedOption.label });
  };

  const handleMaterialChange = (selectedOption) => {
    setFilters({ ...filters, material: selectedOption.label });
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    const sortedProducts = [...products];
  
    switch (sortOption) {
      case 'increase':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'decrease':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
        case 'ordinary':
    sortedProducts.sort((a, b) => a.id - b.id);
    break;
  default:
    break;
    }
  
    if (JSON.stringify(products) !== JSON.stringify(sortedProducts)) {
      setProducts(sortedProducts);
    }
  }, [sortOption, products]);

  console.log("AllProducts", products);

  return (
    <section className="catalog container">
      <h3>Sale Clothing Page</h3>
      <h1>Коллекция Air Max</h1>
      <hr />
      <div className="select-mobile">
      <div className="select-mobile__button">
          <MenuToggle
            toggle={toggleFilters}
            open={isFiltersOpen}
            onClick={toggleFilters}
          />
          {!isFiltersOpen ? (
            <button onClick={toggleFilters}>Показати фільтри</button>
          ) : (
            <button onClick={toggleFilters}>Сховати фільтри</button>
          )}
        </div>
      </div>
      {isFiltersOpen && (
        <ModalFilter
          isOpen={isFiltersOpen}
          handleClose={toggleFilters}
          props={{
            handleSizeChange,
            handleColorChange,
            handleMaterialChange,
            clearFilters,
            handleSortChange,
          }}
        />
      )}
      <div className="select-wrapper">
        <div className="select-wrapper__item">
          <SelectSize onChange={handleSizeChange}/>
        </div>
        <div className="select-wrapper__item">
          <CustomizedSlider />
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
          <DisplayParameter 
          onItemsPerPageChange={handleItemsPerPageChange} 
          />
        </div>
        <div className="sorting-wrapper__price">
          <SelectSort 
          onChange={handleSortChange}/>
        </div>
      </div>
      <div className="all-products-card">
        <Pagination data={products} itemsPerPage={itemsPerPage} />
      </div>
    </section>
  );
};

export { SaleClothingPage };
