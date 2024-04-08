import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./Search.scss"

const Search = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const searchGoods = e.target.value;
    setSearchItem(searchGoods);
  };

  const handleSearch = () => {
    onSearch(searchItem);
  };

  const handleIconClick = () => {
    if (searchItem.trim() !== "") {
      handleSearch();
    }
  };

  return (
    <div className="search-section">
      <div
        className="search-icon"
        onMouseEnter={() => setIsFormVisible(true)}
        onMouseLeave={() => setIsFormVisible(false)}
        onClick={handleIconClick}
      >
        <BsSearch />
      </div>
      {isFormVisible && (
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <input
            className="search-input"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Пошук по каталогу товарів ..."
            size={30}
          />
        </form>
      )}
    </div>
  );
};

export default Search;









// ==================================
// import { useState } from "react";
// import { BsSearch } from "react-icons/bs";

// import "./Search.scss"

// const Search = ({ onSearch }) => {
//   const [searchItem, setSearchItem] = useState("");
//   const [isHovered, setIsHovered] = useState(false);

//   const handleInputChange = (e) => {
//     const searchGoods = e.target.value;
//     setSearchItem(searchGoods);
//   };

//   const handleSearch = () => {
//     // Відправлення пошукового запиту до батьківського компонента
//     onSearch(searchItem);
//   };

//   const handleIconMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleIconMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="search-section">      
//       {isHovered && (
//         <form 
//         className="search-form"
//         onSubmit={(e) => { e.preventDefault(); handleSearch(); }} 
//         >
//           <input
//             className="search-input"
//             type="text"
//             value={searchItem}
//             onChange={handleInputChange}
//             placeholder="Пошук по каталогу товарів ..."
//             size={30}
//           />
//         </form>
//       )}
//       {/* <div
//         // className="search-icon"
       
        
//       > */}
//         <BsSearch
//          onMouseEnter={handleIconMouseEnter} 
//          onMouseLeave={handleIconMouseLeave}
//         onClick={handleSearch}
//         />
//       {/* </div> */}
//     </div>
//   );
// };

// export default Search;






// ===============================================
// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";

// import "./Search.scss";

// const Search = ({ onSearch }) => {
//   const [searchItem, setSearchItem] = useState("");
//   const [isInputVisible, setIsInputVisible] = useState(false);

//   const handleInputChange = (e) => {
//     const searchGoods = e.target.value;
//     setSearchItem(searchGoods);
//   };

//   const handleSearch = () => {
//     // Відправлення пошукового запиту до батьківського компонента
//     onSearch(searchItem);
//   };

//   const handleIconClick = () => {
//     setIsInputVisible(true);
//   };

//   const handleInputBlur = () => {
//     setIsInputVisible(false);
//   };

//   return (
//     <div>
//       <div className="search-icon" onClick={handleIconClick}>
//         <BsSearch />
//       </div>
//       {isInputVisible && (
//         <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
//           <input
//             className="search-input"
//             type="text"
//             value={searchItem}
//             onChange={handleInputChange}
//             onBlur={handleInputBlur}
//             placeholder="Пошук по каталогу товарів ..."
//             size="30"
//           />
//           {/* <BsSearch onClick={handleSearch} /> */}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Search;







// ================================2

// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";

// const Search = ({ onSearch }) => {
//   const [searchItem, setSearchItem] = useState("");

//   const handleInputChange = (e) => {
//     const searchGoods = e.target.value;
//     setSearchItem(searchGoods);
//   };

//   const handleSearch = () => {
//     // Відправлення пошукового запиту до батьківського компонента
//     onSearch(searchItem);
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
//         <input
//           className="search-input"
//           type="text"
//           value={searchItem}
//           onChange={handleInputChange}
//           placeholder="Пошук по каталогу товарів ..."
//         />
//         <BsSearch onClick={handleSearch} />
//       </form>
//     </div>
//   );
// };

// export default Search;


// ===============================
// import { useState } from "react";
// import { BsSearch} from "react-icons/bs";

// const Search = () => {
//   const [searchItem, setSearchItem] = useState("");

//   const handleInputChange = (e) => {
//     const searchGoods = e.target.value;
//     setSearchItem(searchGoods);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={searchItem}
//         onChange={handleInputChange}
//         placeholder="Яке взуття шукаєте?"
//       />
// 	  <BsSearch type="submit"/>
//     </div>
//   );
// };

// export default Search;
