// components/Group/index.js
import React from 'react';
import Radio from '../Radio';
import Input from '../Input';
import _ from 'lodash';
import Select from '../Select';

const checkCondition = (conditions, responses) => {
  // Loop through each condition
  for (let i = 0; i < conditions.length; i++) {
    const condition = conditions[i];
    const { jsonKey, op, value } = condition;
    // Access the value in the data object based on jsonKey
    // const newjsonKey = "responses." + jsonKey;
    // console.log(condition);
    const actualValue = _.get(responses, jsonKey);
    console.log(actualValue);
    
    // Perform comparison based on the operator
    switch (op) {
      case "==":
        if (actualValue === value)
          continue;
        else
          return false;
      // Add more cases for other operators as needed
      default:
        return false; // Default to false if operator is not recognized
    }
  }
  return true; // Return true if all conditions pass
};

const Index = ({ label, subParameters, handleChange, responses }) => {
  return (
    <div className="group-container">
      {/* <h2>{label}</h2> */}
      {subParameters.map((field, index) => {
        switch (field.uiType) {
          case 'Radio':
            console.log(field.validate.options);
            return (
              <Radio
                key={index}
                label={field.label}
                options={field.validate.options}
                handleChange={handleChange} // Pass the field.jsonKey and the selected value to handleChange
                name={field.jsonKey}
                defaultValue={field.validate.defaultValue}
              />
            );
          case 'Ignore':
            // Check conditions to determine if this section should be displayed
              if(checkCondition(field.conditions, responses) === true){
                console.log('true');
              } else {
                console.log('false');
              }

            return null;
          case 'Select':
            return (
              <Select
                key={index}
                label={field.label}
                options={field.validate.options}
                handleChange={handleChange}
                name={field.jsonKey}
                defaultValue={field.validate.defaultValue}
              />
            );
          case 'Input':
            return (
              <Input
                key={index}
                label={field.label}
                placeholder={field.placeholder}
                description={field.description}
                handleChange={handleChange}
                name={field.jsonKey}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Index;
