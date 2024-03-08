import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

export default function Pagination({ itemsPerPage }) {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
     const n = 6;

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * itemsPerPage) && (index < (page + 1) * itemsPerPage);
      })
    );
  }, [page, itemsPerPage]);

  return (
    <div className="product-pagination">
      <ul className="product-pagination-list">
        {filterData && filterData.map((item, index) => <li key={index}>Item #{item}</li>)}
      </ul>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(data.length / n)}

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
    </div>
  );
}
