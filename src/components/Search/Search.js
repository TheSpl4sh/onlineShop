import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Search.scss";

const Search = ({ handleMouseLeave }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(`/api/search?name=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Помилка при отриманні результатів пошуку: Search", error);
    }
  };
  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     fetchSearchResults();
  //   }
  // };
  // searchResults.forEach((result, index) => {
  //   console.log(`Результат ${index + 1}:`, result);
  // });
  return (
    <>
      <input
        className="search-input"
        type="search"
        placeholder="Пошук по каталогу товарів ..."
        value={searchQuery}
        onChange={onChange}
        //  onKeyDown={handleKeyDown}
      />
      <div className="search-results">
        {searchQuery !== "" &&
          searchResults.map((result, id) => (
            <Link key={result.id} to={`/products/${result.id}`}>
              <div 
              className="search-result__item"
               onClick={() => handleMouseLeave(false)}
              >{result.name}</div>
            </Link>

          ))}
      </div>
    </>
  );
};

export default Search;


