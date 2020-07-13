import React from "react";
import DropDown from "../components/DropDown";

const DropDownGroup = React.memo(({ categoryFilter }) => {
  const { type, values } = categoryFilter;

  const renderDropDowns = () => {
  const valuesReverse = [...values];

    return (
      <div className="display-flex flex-row">
        <DropDown values={values}/>
        <DropDown values={valuesReverse.reverse()}/>
      </div>
    );
  };

  return (
    <div className="margin-vertical-md">
      <div className="margin-vertical-sm padding-horizontal-md text-size-sm">{type}</div>
      {renderDropDowns()}
    </div>
  );
});

export default DropDownGroup;
