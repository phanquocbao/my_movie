import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
function DarkMode() {
  const element = document.documentElement;
  const [theme, setTheme] = useState("dark");

  const handleSetTheme = () => {
    const val = theme ? "" : "dark"
    setTheme(val);
    localStorage.setItem("light-mode", val);
  };
  useEffect(() => {
    if (theme) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const val = localStorage.getItem("light-mode");
    setTheme(val || "");
  }, []);

  return (
    <div className="light-mode-button">
      <label className="light-mode">
        <FontAwesomeIcon icon={faMoon} />
      </label>
      <label class="switch">
        <input type="checkbox" onClick={handleSetTheme} />
        <span class="slider round"></span>
      </label>
      <label className="light-mode">
        <FontAwesomeIcon icon={faSun} />
      </label>
    </div>
  );
}

export default DarkMode;
