import React, { useState, useEffect } from 'react';

const Index = ({ label, options, handleChange, name, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    handleChange({ target: { name, value: defaultValue } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  const handleSelectChange = (e) => {
    setValue(e.target.value);
    handleChange(e);
  };

  return (
    <div className='select-container'>
      <label>{label}</label>
      <select
        value={value}  // Set the default value for the select element
        onChange={handleSelectChange}
        name={name}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Index;
