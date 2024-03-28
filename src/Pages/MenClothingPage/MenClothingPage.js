import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
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

const MenClothingPage = () => {
  const dispatch = useDispatch();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [filters, setFilters] = useState({    
    parentId: "men-clothing",
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
  
  console.log("MenProducts",products);
  return (
    <>
      <h1>MenClothingPage</h1>
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
        {/* <div className="sort-out">
          <span></span>
        </div> */}
        <div className="all-products-card">
          <Pagination 
          data={products} 
          itemsPerPage={itemsPerPage} 
          />
        </div>
      </section>
    </>
  );
};

export { MenClothingPage };









// ==========================
// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import CustomSlider from '../AllProductsPage/components/customSlider/CustomSlider';
// import DisplayParameter from '../AllProductsPage/components/displayParameter/DisplayParameter';
// import MenuToggle from '../AllProductsPage/components/menuToggle/MenuToggle';
// import Pagination from '../AllProductsPage/components/pagination/Pagination';
// import {
//   SelectSize,
//   SelectSort,
//   SelectColor,
//   SelectMaterial,
// } from '../../components/select/Select';

// import axios from 'axios';

// const MenClothingPage = () => {
//   const dispatch = useDispatch();
//   const [isFiltersOpen, setIsFiltersOpen] = useState(false);
//   const [itemsPerPage, setItemsPerPage] = useState(9);
//   const [filters, setFilters] = useState({
//     size: null,
//     color: null,
//     material: null,
//   });
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const toggleFilters = () => {
//     setIsFiltersOpen(!isFiltersOpen);
//   };

//   const handleItemsPerPageChange = (value) => {
//     setItemsPerPage(value);
//   };

//   const clearFilters = () => {
//     setFilters({
//       size: null,
//       color: null,
//       material: null,
//     });
//   };

//   const applyFilters = async () => {
//     try {
//       const response = await axios.get('/api/catalog-filter', {
//         params: filters,
//       });
//       setFilteredProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching filtered catalog:', error);
//     }
//   };

//   const handleSizeChange = (selectedOption) => {
//     setFilters({ ...filters, size: selectedOption.label });
//   };

//   const handleColorChange = (selectedOption) => {
//     setFilters({ ...filters, color: selectedOption.label });
//   };

//   const handleMaterialChange = (selectedOption) => {
//     setFilters({ ...filters, material: selectedOption.label });
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters]);

//   return (
//     <>
//       <h1>MenClothingPage</h1>
//       <section className="catalog container">
//         <h1>Коллекция Air Max</h1>
//         <hr />
//         <div className="select-mobile">
//           <div className="select-mobile__button">
//             <MenuToggle
//               toggle={toggleFilters}
//               open={isFiltersOpen}
//               onClick={toggleFilters}
//             />
//             Показати фільтри
//           </div>
//         </div>
//         <div className="select-wrapper">
//           <div className="select-wrapper__item">
//             <SelectSize onChange={handleSizeChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <CustomSlider />
//           </div>
//           <div className="select-wrapper__item">
//             <SelectColor onChange={handleColorChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <SelectMaterial onChange={handleMaterialChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <button onClick={clearFilters}>
//               <FaTimes />
//               Скинути Фільтр
//             </button>
//           </div>
//         </div>
//         <hr />
//         <div className="sorting-wrapper">
//           <div className="sorting-wrapper__show">
//             <DisplayParameter onItemsPerPageChange={handleItemsPerPageChange} />
//           </div>
//           <div className="sorting-wrapper__price">
//             <SelectSort />
//           </div>
//         </div>
//         <div className="sort-out">
//           <span></span>
//         </div>
//         <div className="all-products-card">
//         <Pagination data={filteredProducts} itemsPerPage={itemsPerPage} />
//         </div>
//       </section>
//     </>
//   );
// };

// export { MenClothingPage };











// ====================================================
// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCatalog } from '../../redux/catalog/catalogSlice';
// import CustomSlider from '../AllProductsPage/components/customSlider/CustomSlider';
// import DisplayParameter from '../AllProductsPage/components/displayParameter/DisplayParameter';
// import MenuToggle from '../AllProductsPage/components/menuToggle/MenuToggle';
// import Pagination from '../AllProductsPage/components/pagination/Pagination';
// import {
//   SelectSize,
//   SelectSort,
//   SelectColor,
//   SelectMaterial,
// } from '../../components/select/Select';
// import Card from '../../components/Card/Card';
// import ProductsList from "../../components/Products/ProductsList";
// // import '../../AllProductsPage/AllProductsPage.scss';

// const MenClothingPage = () => {
  
//   const dispatch = useDispatch();
//   const catalog = useSelector((state) => state.catalog.items);
//   const [isFiltersOpen, setIsFiltersOpen] = useState(false);
//   const [itemsPerPage, setItemsPerPage] = useState(9);
//   const [filters, setFilters] = useState({
//     size: null,
//     color: null,
//     material: null,
//   });
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const toggleFilters = () => {
//     setIsFiltersOpen(!isFiltersOpen);
//   };

//   const handleItemsPerPageChange = (value) => {
//     setItemsPerPage(value);
//   };

//   const clearFilters = () => {
//     setFilters({
//       size: null,
//       color: null,
//       material: null,
//     });
//   };

//   const applyFilters = () => {
//     let filtered = catalog;
//     if (filters.size) {
//       filtered = filtered.filter((product) =>
//         product.size.includes(filters.size)
//       );
//     }
//     if (filters.color) {
//       filtered = filtered.filter((product) =>
//         product.color.includes(filters.color)
//       );
//     }
//     if (filters.material) {
//       filtered = filtered.filter((product) =>
//         product.material.includes(filters.material)
//       );
//     }
//     setFilteredProducts(filtered);
//   };

//   const handleSizeChange = (selectedOption) => {
//     setFilters({ ...filters, size: selectedOption.label });
//   };

//   const handleColorChange = (selectedOption) => {
//     setFilters({ ...filters, color: selectedOption.label });
//   };

//   const handleMaterialChange = (selectedOption) => {
//     setFilters({ ...filters, material: selectedOption.label });
//   };

//   useEffect(() => {
//     dispatch(fetchCatalog());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     applyFilters();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [filters, catalog]);

//   return (
//     <>
//       <h1>MenClothingPage</h1>
//       <section className="catalog container">
//         <h1>Коллекция Air Max</h1>
//         <hr />
//         <div className="select-mobile">
//           <div className="select-mobile__button">
//             <MenuToggle
//               toggle={toggleFilters}
//               open={isFiltersOpen}
//               onClick={toggleFilters}
//             />
//             Показати фільтри
//           </div>
//         </div>
//         <div className="select-wrapper">
//           <div className="select-wrapper__item">
//             <SelectSize onChange={handleSizeChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <CustomSlider />
//           </div>
//           <div className="select-wrapper__item">
//             <SelectColor onChange={handleColorChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <SelectMaterial onChange={handleMaterialChange} />
//           </div>
//           <div className="select-wrapper__item">
//             <button onClick={clearFilters}>
//               <FaTimes />
//               Скинути Фільтр
//             </button>
//           </div>
//         </div>
//         <hr />
//         <div className="sorting-wrapper">
//           <div className="sorting-wrapper__show">
//             <DisplayParameter onItemsPerPageChange={handleItemsPerPageChange} />
//           </div>
//           <div className="sorting-wrapper__price">
//             <SelectSort />
//           </div>
//         </div>
//         <div className="sort-out">
//           <span></span>
//         </div>
//         <div className="all-products-card">
//         <Pagination data={filteredProducts} itemsPerPage={itemsPerPage} />
//         {/* {filteredProducts.map((product) => (
//             <ProductsList key={product.id} product={product} />
//           ))} */}
//           {/* {filteredProducts.map((product) => (
//             <Card key={product.id} product={product} />
//           ))} */}
//         </div>
        
//       </section>
//     </>
//   );
// };

// export { MenClothingPage };

