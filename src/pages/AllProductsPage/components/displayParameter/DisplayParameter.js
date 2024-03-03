

const ItemsPerPageSelector = ({ onSelect }) => {
  
  return (
    <> 
      <label>Показувати по:</label>
      <button onClick={() => onSelect(9)}>9</button>
      <button onClick={() => onSelect(12)}>12</button>
      <button onClick={() => onSelect(18)}>18</button>
      <button onClick={() => onSelect(24)}>24</button>
      {/* <button onClick={() => handleSelect(9)} className={itemsPerPage === 9 ? 'blackBorder' : ''}>9</button> */}
      {/* <button onClick={() => onSelect(9)} className={ === 9 ? 'blackBorder' : ''}>9</button> */}
    </>
  );
};

const DisplayParameter = ({ onItemsPerPageChange }) => {
  const handleItemsPerPageChange = (value) => {
    onItemsPerPageChange(value);
  };

  return (
    <>
      <ItemsPerPageSelector onSelect={handleItemsPerPageChange} />
    </>
  );
};


export default DisplayParameter;


