import React from "react";

const DropDown = React.memo(({ values }) => {
  const renderDropDown = () => {

    return values.length > 0 && values.map((details, index) => {
      const { displayValue, key} = details;

      return (
          <option key={index} value={key}>
            {displayValue}
          </option>
        );
    });
  }

  return (
    <div className="dropDown margin-horizontal-lg">
      <select className="margin-horizontal-sm padding-horizontal-sm padding-vertical-sm">
        {renderDropDown()}
      </select>
    </div>
  );
});

export default DropDown;
