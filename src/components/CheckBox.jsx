import React from "react";

const CheckBox = React.memo(({ details, index, checked = false, onChange }) => {
  const { title } = details;

  return (
    <span key={index}>
      <input
        type="checkbox"
        key={index}
        name={title}
        className="orderCheckBox"
        onChange={onChange}
      />
      <label htmlFor="checkbox" className="checboxLabel">
        {title.slice(0, 8)}
      </label>
    </span>
  );
});

export default CheckBox;
