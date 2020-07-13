import React from "react";
import { connect } from "react-redux";
import CheckBox from "../components/CheckBox";

const CheckBoxGroup = React.memo(({ categoryFilter, updateListings }) => {
  const { type, values } = categoryFilter;

  const handleCheck = async event => {
    const query = "brand";
    const value = event.target.name;
    const response = await fetch(
      `https://xebiascart.herokuapp.com/products?${query}=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      }
    );
    updateListings(await response.json());
  };

  const renderCheckBoxes = () => {
    const filters = values.slice(0, 1000);

    return (
      filters.length > 0 &&
      filters.map((details, index) => {
        return (
          <li key={index}>
            <CheckBox
              index={index}
              details={details}
              onChange={event => handleCheck(event)}
            />
          </li>
        );
      })
    );
  };

  return (
    <div className="margin-vertical-md">
      <div className="margin-vertical-sm padding-horizontal-md text-size-sm">
        {type}
      </div>
      <div className="margin-horizontal-sm">
        <ul>{renderCheckBoxes()}</ul>
        {values.length > 30 && (
          <a
            href="https://www.w3schools.com/js/js_string_methods.asp"
            className="margin-vertical-md"
          >
            See More...
          </a>
        )}
      </div>
    </div>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    updateListings: data => {
      dispatch({ type: "FETCH_LISTINGS", payload: data });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckBoxGroup);
