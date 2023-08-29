import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DropDown from "./components/DropDown/DropDown";
import "./Toolbar.scss";
export default function Toolbar() {
  return (
    <div className="toolbar">
      <SearchBar />
      <DropDown />
    </div>
  );
}