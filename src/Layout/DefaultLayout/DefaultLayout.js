import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
//   const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  const handleSetTheme = () => {
    element.classList.toggle('dark')
  }

  console.log(element);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Nav />
      <div className={cx("flex justify-center z-10")}>
        <div className={cx("w-[1170px] content dark:bg-gray-900 bg-white")}>
          <div className={cx("grid grid-cols-12 gap-1")}>
            <div className={cx("col-span-9")}>{children}</div>
            <Sidebar />
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default DefaultLayout;
