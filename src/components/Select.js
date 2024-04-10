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
    <label >
      Розмір:
    <Select
      options={options}
      onChange={handleSizeChange}
      value={selectedSize} 
      placeholder="Розмір:"
    />
    </label>
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
    <label >
      Колір:
  <Select 
  options={options}
   onChange={handleColorChange} 
   value={selectedColor}
   placeholder="Колір:" 
   />
   </label>
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
    <label >
      Матеріал:
    <Select 
    options={options} 
    onChange={handleMaterialChange}
    value={selectedMaterial} 
    placeholder="шкіра" 
    />
    </label>
  );
};
// =======================

export const SelectSort = ({ onChange }) => {
  const options = [
    { value: "ordinary", label: "звичайна" },
    { value: "increase", label: "ціна від недорогих" },
    { value: "decrease", label: "ціна від дорогих" },
    
  ];

  return (
    <label className="select-sort">
      Сортування:
    <Select 
    options={options} 
    onChange={onChange} 
    placeholder="звичайна"
    // defaultValue="звичайна"
    />
    </label>
  );
};

// export const SelectSort = ({ onChange }) => {

//   return (
//     <label>
//       Сортування:
//       <select 
//       name="selectedSorted" 
//       // defaultValue="звичайна"
//       >
//         <option value="ordinary">звичайна</option>
//         <option value="increase">ціна від недорогих</option>
//         <option value="decrease">ціна від дорогих</option>
//       </select>
//     </label>
//   );
// }


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