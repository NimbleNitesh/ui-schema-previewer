import React from 'react';

const Input = ({ label, placeholder, description, handleChange, name }) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        description={description}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default Input;
