import React from "react";
import "../css/styles.css";

function Button({ value, setValues }) {
  return (
    <div>
      <button
        className={`button` + (value == "=" ? " equal-button" : "")}
        onClick={() => setValues(value)}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
