import React, { useState, useEffect } from "react";
import CheckBoxGroup from "../components/CheckBoxGroup";
import DropDownGroup from "../components/DropDownGroup";

function FilterPanelContainer() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchFilterData() {
      const response = await fetch("https://xebiascart.herokuapp.com/filters");
      const filtersData = await response.json();
      setData(filtersData);
    }
    fetchFilterData();
  }, []);

  const multiselectFilters = () => {
    return (
      <>
        <CheckBoxGroup categoryFilter={data[1]} />
        <CheckBoxGroup categoryFilter={data[0]} />
      </>
    );
  };

  const multiDropDownFilters = () => {
    return <DropDownGroup categoryFilter={data[2]} />;
  };

  const renderFilters = () => {
    return data && data.length > 0 && (
      <>
      <div>{multiselectFilters()}</div>
      <div>{multiDropDownFilters()}</div>
      </>
    );
  };

  return (
    <div className="display-flex flex-column">
      <div className="text-size-md text-center">Filters</div>
      {renderFilters()}
    </div>
  );
}

export default FilterPanelContainer;
