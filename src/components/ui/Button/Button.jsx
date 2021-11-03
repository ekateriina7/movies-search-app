import React from "react";

function Button({ children, ...props }) {
  return (
    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.onClick}>
      {children}
    </button>
  );
}

export default Button;