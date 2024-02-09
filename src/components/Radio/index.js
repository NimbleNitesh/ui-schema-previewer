import React from 'react'

const index = ({ label, options, description, handleChange, name }) => {
  const options_arr = options.map(option => option.label);
  return (
    <div className='radio-constainer'>
      <label>{label}</label>
      {options_arr.map((item, index) => (
        <div key={index}>
          <input
            type='radio'
            value={item}
            onChange={handleChange}
            name={name}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  )
}

export default index