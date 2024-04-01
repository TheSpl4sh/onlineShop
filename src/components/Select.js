import { useState } from "react";
import Select from "react-select"

export const SelectSize = ({ onChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption);
    console.log("Обраний розмір:", selectedOption.label);
    onChange(selectedOption); 
  };

  const options = [
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
  ];
  return (
    <Select
      options={options}
      onChange={handleSizeChange}
      value={selectedSize} 
      placeholder="Розмір:"
    />
  );
};
// ===================================


export const SelectColor = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
    console.log("Обраний колір:", selectedOption.label);
    onChange(selectedOption); 
  };

  const options = [
    { value: "color", label: "білий" },
    { value: "color", label: "чорний" },
    { value: "color", label: "помаранчевий" },
    { value: "color", label: "синій" },
    { value: "color", label: "біжевий" },
    { value: "color", label: "сірий" },
    { value: "color", label: "червоний" },
  ];
  return (
  <Select 
  options={options}
   onChange={handleColorChange} 
   value={selectedColor}
   placeholder="Колір:" 
   />
   );
};
// ======================================

export const SelectMaterial = ({ onChange }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleMaterialChange = (selectedOption) => {
    setSelectedMaterial(selectedOption);
    console.log("Обраний матеріал:", selectedOption.label);
    onChange(selectedOption); 
  };


  const options = [
    { value: "material", label: "шкіра" },
    { value: "material", label: "синтетика" },
    { value: "material", label: "текстиль" },
    { value: "material", label: "трикотаж" },
    
  ];
  return (
    <Select 
    options={options} 
    onChange={handleMaterialChange}
    value={selectedMaterial} 
    placeholder="Матеріал:" 
    />
  );
};
// =======================

export const SelectSort = ({ onChange }) => {
  const options = [
    { value: "increase", label: "ціна від недорогих" },
    { value: "decrease", label: "ціна від дорогих" },
    { value: "ordinary", label: "звичайна" },
  ];

  return (
    <Select 
    options={options} 
    onChange={onChange} 
    placeholder="Сортування:"
    />
  );
};
// ========================

// ================================

// export const SelectDemiseason = ({ onChange }) => {
//   const options = [
//     { value: "season", label: "бігові" },
//     { value: "season", label: "повсякденні" },
//     { value: "season", label: "трекінгові" },
//     { value: "season", label: "шкіряні" },
//   ];

//   return (
//     <Select 
//     defaultValue={{ value: "season", label: "Демісезон" }} // Значення за замовчуванням
//     isMulti={false}
//     options={options} 
//     onChange={onChange} 
//     isSearchable={false} // Вимкнути можливість пошуку
//     autoFocus={false}
//     />
//   );
// };

// ===========================================

// export const SelectModels = ({ onChange }) => {
//   const options = [
//     { value: "name", label: "NIKE AIR FORCE 1" },
//     { value: "name", label: "NIKE AIR FORCE 1 LOW X AMBUSH" },
//     { value: "name", label: "NIKE SHOX TL W" },
//     { value: "name", label: "NIKE DUNK LOW 'POLAR BLUE'" },
//     { value: "name", label: "NIKE LDWAFFLE" },
//   ];

//   return (
//     <Select 
//     defaultValue={{ value: "name", label: "Моделі" }} 
//     isMulti={false}
//     options={options} 
//     onChange={onChange} 
//     isSearchable={false} 
//     autoFocus={false}
//     />
//   );
// };
// ======================