import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MouseLeaveContext from "../MouseLeaveContext";

import "./Search.scss";

const Search = ({ 
  inputClassName, 
  resultsClassName,
  resultsItemClassName 
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleMouseLeave = useContext(MouseLeaveContext);
  

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
  
  return (
    <>
      <input
      className={`search-input ${inputClassName}`}
        type="search"
        placeholder="Пошук по каталогу товарів ..."
        value={searchQuery}
        onChange={onChange}
      />
      <div className={`search-results ${resultsClassName}`}>
        {searchQuery !== "" &&
          searchResults.map((result) => (
            <Link key={result.id} to={`/products/${result.id}`}>
              <div
              className={`search-result__item ${resultsItemClassName}`} 
               onClick={() => handleMouseLeave(false)}
              >{result.name}</div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Search;


