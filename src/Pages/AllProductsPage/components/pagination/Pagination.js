import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Card from "../../../../components/Card/Card";


const Pagination = ({ data, itemsPerPage }) => {
  const [page, setPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  const renderCards = () => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex).map((product) => (
      <Card 
        item={product}
        key={product.id}
      />
    ));
  };

  return (
    <ul className="product-pagination">
      <li className="product-pagination-list">
        {renderCards()}
      </li>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => handlePageChange(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        previousLabel={
          <IconContext.Provider value={{ color: "#000000", size: "22px" }}>
            <HiArrowLongLeft />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#000000", size: "22px" }}>
            <HiArrowLongRight />
          </IconContext.Provider>
        }
      />
    </ul>
  );
};

export default Pagination;
