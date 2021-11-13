import React from "react";

const Input = ({ value, name, placeholder, type, onChange, onBlur }) => (
  <div className="row">
    <div className="input-field">
      <input
        type={type}
        value={value}
        name={name}
        className="input-field"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  </div>
);

export default Input;