import React from 'react';

const Index = ({ label, options, handleChange, name }) => {
  return (
    <div className='select-container'>
      <label>{label}</label>
      <select name={name} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Index;
