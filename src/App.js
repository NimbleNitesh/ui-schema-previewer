import React, { useState } from 'react';
import Input from './components/Input';
import Radio from './components/Radio';
import Select from './components/Select';
import Group from './components/Group';

const App = () => {
  const data = [
    {
    "sort": 4,
    "label": "Pizza_type",
    "description": "",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "pizza_type",
    "uiType": "Group",
    "icon": "",
    "level": 0,
    "placeholder": "",
    "subParameters": [
      {
        "sort": 0,
        "label": "Pizza_type Type",
        "description": "",
        "validate": {
          "required": true,
          "options": [
            {
              "label": "Naples Style Pizza",
              "value": "naples",
              "description": "",
              "icon": ""
            },
            {
              "label": "New York Style Pizza",
              "value": "newyork",
              "description": "",
              "icon": ""
            }
          ],
          "defaultValue": "naples",
          "immutable": false
        },
        "jsonKey": "type",
        "uiType": "Radio",
        "icon": "",
        "level": 1,
        "placeholder": ""
      },
      {
        "sort": 10001,
        "label": "Naples Style Pizza",
        "description": "",
        "validate": {
          "required": true,
          "immutable": false
        },
        "jsonKey": "Naples",
        "uiType": "Ignore",
        "icon": "",
        "level": 1,
        "placeholder": "",
        "conditions": [
          {
            "jsonKey": "pizza_type.type",
            "op": "==",
            "value": "naples",
            "action": "enable"
          }
        ],
        "subParameters": [
          {
            "sort": 10000,
            "label": "Slices",
            "description": "",
            "validate": {
              "required": true,
              "options": [
                {
                  "label": "1",
                  "value": "1",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "2",
                  "value": "2",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "3",
                  "value": "3",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "4",
                  "value": "4",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "5",
                  "value": "5",
                  "description": "",
                  "icon": ""
                }
              ],
              "defaultValue": "1",
              "immutable": false
            },
            "jsonKey": "slices",
            "uiType": "Select",
            "icon": "",
            "level": 2,
            "placeholder": ""
          },
          {
            "sort": 10001,
            "label": "Type",
            "description": "",
            "validate": {
              "required": true,
              "pattern": "naples",
              "immutable": false
            },
            "jsonKey": "type",
            "uiType": "Input",
            "icon": "",
            "level": 2,
            "placeholder": "",
            "disable": true
          }
        ]
      },
      {
        "sort": 10002,
        "label": "New York Style Pizza",
        "description": "",
        "validate": {
          "required": true,
          "immutable": false
        },
        "jsonKey": "NewYork",
        "uiType": "Ignore",
        "icon": "",
        "level": 1,
        "placeholder": "",
        "conditions": [
          {
            "jsonKey": "pizza_type.type",
            "op": "==",
            "value": "newyork",
            "action": "enable"
          }
        ],
        "subParameters": [
          {
            "sort": 10000,
            "label": "Cheeseburst",
            "description": "",
            "validate": {
              "required": true,
              "defaultValue": false,
              "immutable": false
            },
            "jsonKey": "cheeseburst",
            "uiType": "Switch",
            "icon": "",
            "level": 2,
            "placeholder": ""
          },
          {
            "sort": 10001,
            "label": "Type",
            "description": "",
            "validate": {
              "required": true,
              "pattern": "newyork",
              "immutable": false
            },
            "jsonKey": "type",
            "uiType": "Input",
            "icon": "",
            "level": 2,
            "placeholder": "",
            "disable": true
          }
        ]
      }
    ]
  }
  ];

  const [responses, setResponses] = useState({});

  const handleChange = (e) => {
    console.log("hello123");;
    const { name, value } = e.target;
    setResponses({
      ...responses,
      [name]: value
    });
  };

  const handleGroupChange = (e) => {
    // Update the response state with only the necessary data
    const { name, value } = e.target;
    // console.log("hello");
    setResponses({
      ...responses,
      pizza_type: {
        [name]: value
      }
    });
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
          case 'input':
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
          case 'radio':
            return (
              <Radio
                key={index}
                label={item.label}
                options={item.options} // Assuming item has an options array for radio inputs
                handleChange={handleChange}
                name={item.jsonKey}
              />
            );
          case 'select':
            return (
              <Select
                key={index}
                label={item.label}
                options={item.options} // Assuming item has an options array for level inputs
                handleChange={handleChange}
                name={item.jsonKey}
              />
            );
          
          case 'Group':
            // console.log(item.subParameters);
            return (
              <Group
                key={index}
                label={item.label}
                subParameters={item.subParameters}
                handleChange={handleGroupChange}
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
