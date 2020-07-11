import React from "react";

const CheckBox = React.memo(({ details, key }) => {
  const { title } = details;

  return (
    <span key={key}>
      <input
        type="checkbox"
        key={key}
        name="checkbox"
        className="orderCheckBox"
        // onChange={this.handleUserChange}
      />
      <label htmlFor="checkbox" className="checboxLabel">
        {title.slice(0, 8)}
      </label>
    </span>
  );
});

export default CheckBox;
