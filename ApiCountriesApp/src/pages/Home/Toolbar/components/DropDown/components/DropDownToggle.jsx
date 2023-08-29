import React from "react";
import { ReactComponent as ExpandIcon } from "../assets/images/icon-expand.svg";
import { ReactComponent as MinimizeIcon } from "../assets/images/icon-minimize.svg";

export default function DropDownToggle({ isToggled, toggleDropDown }) {
  return (
    <button
      aria-haspopup="listbox"
      aria-expanded={isToggled ? "true" : "false"}
      className="drop-down__toggle"
      onClick={toggleDropDown}
      onBlur={(e) => {
        isToggled && toggleDropDown();
      }}
    >
      Filter By A Region
      {isToggled ? (
        <MinimizeIcon className="drop-down__icon" />
      ) : (
        <ExpandIcon className="drop-down__icon" />
      )}
    </button>
  );
}