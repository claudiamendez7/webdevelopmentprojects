import ThemeContext from "@context/ThemeContext";
import { useEffect, useState } from "react";
function getCurrentTheme() {
  if (localStorage.getItem("theme") == null) {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "Dark"
      : "Light";
    localStorage.setItem("theme", currentTheme);
  }
  return localStorage.getItem("theme");
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getCurrentTheme());
  function switchTheme() {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}