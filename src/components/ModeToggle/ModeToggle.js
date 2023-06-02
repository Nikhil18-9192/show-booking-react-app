import React, { useContext } from "react";
import "./ModeToggle.scss";
import GlobaleContext from "../Context/Createcontext";

function Modetoggle() {
  const { state, dispatch } = useContext(GlobaleContext);
  const is_dark = state.toggle;
  return (
    <div className="mode_toggle_container">
      <label className="switch">
        {/* mode switch toggle button */}
        <input
          type="checkbox"
          checked={is_dark}
          onChange={() => dispatch({ type: "toggle", payload: !is_dark })}
        />
        <span className="slider"></span>
      </label>
      <span className="mode_text">{is_dark ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
}

export default Modetoggle;
