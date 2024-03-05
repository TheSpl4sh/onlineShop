import React, { useState } from "react";
// import CustomSlider from "./components/customSlider/CustomSlider";
import DisplayParameter from "./components/displayParameter/DisplayParameter";
import MenuToggle from "./components/menuToggle/MenuToggle";
import Pagination from "./components/pagination/Pagination";
import { Select } from "../../components/select/Select";
import { FaTimes } from "react-icons/fa";

import "./AllProductsPage.scss";

const AllProductsPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
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
          <Select
            className=""
            title="Розмір:"
            options={[
              { value: "size", label: "34(EU)" },
              { value: "size", label: "35(EU)" },
              { value: "size", label: "36(EU)" },
              { value: "size", label: "37(EU)" },
              { value: "size", label: "38(EU)" },
              { value: "size", label: "39(EU)" },
              { value: "size", label: "40(EU)" },
              { value: "size", label: "41(EU)" },
              { value: "size", label: "42(EU)" },
              { value: "size", label: "43(EU)" },
              { value: "size", label: "44(EU)" },
              { value: "size", label: "45(EU)" },
            ]}
          />
        </div>
        <div className="select-wrapper__item">
          
          {/* <CustomSlider
          //  title="Ціна:"
            // min={0}
            // max={1000}
            // onChange={({ min, max }) =>
            //   console.log(`min = ${min}, max = ${max}`)
            // }
          /> */}
        </div>
        <div className="select-wrapper__item">
          <Select
            className=""
            title="Колір:"
            options={[
              { value: "red", label: "червоний" },
              { value: "white", label: "білий" },
              { value: "black", label: "чорний" },
            ]}
          />
        </div>
        <div className="select-wrapper__item">
          <Select
            className=""
            title="Матеріал:"
            options={[
              { value: "material", label: "Дерматин" },
              { value: "material", label: "Тряпка" },
              { value: "material", label: "Плюш" },
            ]}
          />
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
          <Select
            className=""
            title="Сортування:"
            options={[
              { value: "increase", label: "ціна від дешевих" },
              { value: "decrease", label: "ціна від дорогих" },
              { value: "ordinary", label: "звичайна" },
            ]}
          />
        </div>
      </div>
      <div className="sort-out">
        <span></span>
      </div>
      <Pagination itemsPerPage={itemsPerPage} />
    </section>
  );
};

export default AllProductsPage;