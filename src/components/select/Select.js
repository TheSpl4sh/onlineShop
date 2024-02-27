export function Select(props) {
    const { title, options, className } = props;
  
    return (
      <>
        <label>{title}</label>
        <select className={`custom-select ${className}`}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </>
    );
  }