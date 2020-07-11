import React from "react";
import CheckBox from "../components/CheckBox";

const CheckBoxGroup = React.memo(({
  categoryFilter
}) => {

  const { type, values } = categoryFilter;

  const renderCheckBoxes = () => {
    const filters = values.slice(0, 20);
    
    return filters.length > 0 && filters.map((details, index) => {
        return (
          <li key={index}>
            <CheckBox key={index} details={details}/>
          </li>
        );
    });
  }

  return (
    <div className="margin-vertical-md">
      <div className="margin-vertical-sm">{type}</div>
      <div className="">
        <ul>
          {renderCheckBoxes()}
        </ul>
        {values.length > 30 && 
          <a 
            href="https://www.w3schools.com/js/js_string_methods.asp" 
            className="margin-vertical-md">See More...
          </a>
        }
      </div>
    </div>
  );
});

export default CheckBoxGroup;
