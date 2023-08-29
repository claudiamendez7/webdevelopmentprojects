import React, { useContext } from "react";
import ThemeContext from "@context/ThemeContext";
import { ReactComponent as DarkIcon } from "../../assets/images/icon-dark.svg";
import { ReactComponent as LighIcon } from "../../assets/images/icon-light.svg";
import "./switchThemeBtn.scss";

export default function SwitchThemeBtn() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const isThemeDark = theme == "Dark";
  return (
    <button
      className="switch-theme-btn"
      onClick={switchTheme}
      aria-label="Toggle light/dark mode"
      aria-pressed={isThemeDark ? "true" : "false"}
    >
      {isThemeDark ? (
        <LighIcon className="drop-down__icon" />
      ) : (
        <DarkIcon className="drop-down__icon" />
      )}
      {isThemeDark ? "Light" : "Dark"} Mode
    </button>
  );
}