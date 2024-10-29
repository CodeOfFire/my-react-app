import React from "react";

const Button = ({ name, onclick, className, type }) => {
  return (
    <button type={type} onClick={onclick} className={className}>
      {name}
    </button>
  );
};

export default Button;
