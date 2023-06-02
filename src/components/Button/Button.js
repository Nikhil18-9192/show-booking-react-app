import React from "react";

function Button({ text, onClick }) {
  return (
    <div>
      <button className="theme_btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
