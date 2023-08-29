import React from "react";
import SwitchThemeBtn from "./components/SwitchThemeBtn/SwitchThemeBtn";
import "./header.scss";
export default function header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__logo">Where in the world?</h1>
        <SwitchThemeBtn />
      </div>
    </header>
  );
}