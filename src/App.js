import React, { useState } from 'react';
import Input from './components/Input';
import Radio from './components/Radio';
import Select from './components/Select';
import Group from './components/Group';
import dt from './data/pizza.json';

const App = () => {
  const data = [dt[0], dt[1], dt[2], dt[3]];
  // console.log(data);

  const [responses, setResponses] = useState({});

  const handleChange = (e) => {
    // console.log("hello123");;
    const { name, value } = e.target;
    setResponses({
      ...responses,
      [name]: value
    });
  };

  const handleGroupChange = (e, key) => {
    // Update the responses state with only the necessary data
    const { name, value } = e.target;
    console.log(name, value, key);
    setResponses((responses) => {
      if (responses.hasOwnProperty(key)) {
        return {
          ...responses,
          [key]: {
            ...responses[key],
            [name]: value
          }
        };
      } else {
        return {
          ...responses,
          [key]: {
            [name]: value
          }
        };
      }
    });
    console.log(responses);
  };
  
  

  const handleSubmit = () => {
    console.log(responses);
    // Here you can perform further actions with the responses object, like sending it to an API or storing it somewhere.
  };

  return (
    <div>
      <h1>App</h1>
      {data.map((item, index) => {
        switch (item.uiType) {
          case 'Input':
            // console.log(item);
            return (
              <Input
                key={index}
                label={item.label}
                placeholder={item.placeholder}
                description={item.description}
                handleChange={handleChange}
                name={item.jsonKey}
              />
            );
          case 'Radio':
            return (
              <Radio
                key={index}
                label={item.label}
                options={item.options} // Assuming item has an options array for radio inputs
                handleChange={handleChange}
                name={item.jsonKey}
              />
            );
          case 'Select':
            // console.log(item);
            return (
              <Select
                key={index}
                label={item.label}
                options={item.validate.options} // Assuming item has an options array for level inputs
                handleChange={handleChange}
                name={item.jsonKey}
                defaultValue={responses[item.jsonKey] || item.validate.defaultValue}
              />
            );
          
          case 'Group':
            // console.log(item.subParameters);
            return (
              <Group
                key={index}
                label={item.label}
                subParameters={item.subParameters}
                handleChange={(e) => handleGroupChange(e, item.jsonKey)}
                responses={responses}
              />
            );
          default:
            return null;
        }
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
