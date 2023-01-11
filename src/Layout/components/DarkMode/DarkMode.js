import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
function DarkMode(){
  const element = document.documentElement;
  const [theme, setTheme ] = useState('dark');
  const thememovie = localStorage.getItem('light-mode')
  localStorage.setItem('light-mode', 'dark' )
  
  const handleSetTheme = () => {
        element.classList.toggle('dark')
  }
    return(
        <div className="light-mode-button">
        <label className="light-mode">
          <FontAwesomeIcon icon={faMoon} />
        </label>
        <label class="switch">
          <input type="checkbox" onClick={handleSetTheme}/>
          <span class="slider round"></span>
        </label>
        <label className="light-mode">
          <FontAwesomeIcon icon={faSun} />
        </label>
      </div>
    )
}

export default DarkMode;