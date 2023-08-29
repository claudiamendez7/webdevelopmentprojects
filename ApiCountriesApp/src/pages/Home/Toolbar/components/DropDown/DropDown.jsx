import React from "react";
import useToggle from "@hooks/useToggle";
import DropDownList from "./components/DropDownList";
import DropDownToggle from "./components/DropDownToggle";
import "./DropDown.scss";

export default function DropDown() {
  const [isToggled, toggleDropDown] = useToggle();

  return (
    <div className="drop-down">
      <DropDownToggle isToggled={isToggled} toggleDropDown={toggleDropDown} />
      <DropDownList isToggled={isToggled} />
    </div>
  );
}