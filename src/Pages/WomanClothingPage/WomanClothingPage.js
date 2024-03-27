import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
import CustomizedSlider from '../AllProductsPage/components/CustomizedSlider/CustomizedSlider';
import DisplayParameter from '../AllProductsPage/components/displayParameter/DisplayParameter';
import MenuToggle from '../AllProductsPage/components/menuToggle/MenuToggle';
import Pagination from '../AllProductsPage/components/pagination/Pagination';
import {
  SelectSize,
  SelectSort,
  SelectColor,
  SelectMaterial,
} from '../../components/Select';
import axios from 'axios';


// import "../AllProductsPage/AllProductsPage.scss";


const WomanClothingPage = () => {
	// const dispatch = useDispatch();
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);
	const [itemsPerPage, setItemsPerPage] = useState(9);
	const [filters, setFilters] = useState({    
	  parentId: "woman-clothing",
	  size: null,
	  color: null,
	  material: null,
	});
	const [products, setProducts] = useState([]);
  
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
		const response = await axios.get('/api/catalog-filter', {
		  params: filters,
		});
		console.log(response.data);
		setProducts(response.data);
	  } catch (error) {
		console.error('Error fetching filtered catalog:', error);
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
  
	useEffect(() => {
	  applyFilters();
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters]);
	
	console.log("womanProducts",products);
	return (
		<>
		<h1>WomanClothingPage</h1>
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
            <SelectSize onChange={handleSizeChange} />
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
            <DisplayParameter onItemsPerPageChange={handleItemsPerPageChange} />
          </div>
          <div className="sorting-wrapper__price">
            <SelectSort />
          </div>
        </div>
        <div className="all-products-card">
          <Pagination 
          data={products} 
          itemsPerPage={itemsPerPage} 
          />
        </div>
      </section>
		</>
	 );
}
 
export { WomanClothingPage };