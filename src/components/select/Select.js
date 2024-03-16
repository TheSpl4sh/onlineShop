import Select from 'react-select'
// import data from '../../data.json';

export const SelectSize = ({ onChange }) => {
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
      onChange={onChange}
      placeholder="Розмір:"
    />
  );
};

export const SelectColor = ({onChange}) => {
  const options = [
  { value: "red", label: "червоний" },
  { value: "white", label: "білий" },
  { value: "black", label: "чорний" },
]
return (
  <Select
    options={options}
    onChange={onChange}
    placeholder="Колір:"
  />
);
};

export const SelectMaterial = ({onChange}) => {
  const options = [
    { value: "material", label: "Дерматин" },
    { value: "material", label: "Тряпка" },
    { value: "material", label: "Плюш" },
]
return (
  <Select
    options={options}
    onChange={onChange}
    placeholder="Матеріал:"
  />
);
};

export const SelectSort = ({ onChange }) => {
  const options = [
    { value: "increase", label: "ціна від дешевих" },
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






