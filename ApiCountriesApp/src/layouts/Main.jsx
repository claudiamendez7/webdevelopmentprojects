import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import header from "@layouts/header/";
import ThemeContext from "@context/ThemeContext";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <header />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}