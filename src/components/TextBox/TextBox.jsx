import React from "react";

const TextBox = ({ value, setValue }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="area"
      cols={5}
    ></textarea>
  );
};

export default TextBox;
