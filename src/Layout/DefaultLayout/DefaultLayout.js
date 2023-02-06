import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import DarkMode from "../components/DarkMode/DarkMode";
import { useState } from "react";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {


  return (
    <div className={cx("wrapper")}>
      <Header />
      <Nav />
      <div className={cx("flex justify-center z-10")}>
        <div className={cx("lg:w-[1170px] content dark:bg-gray-900 bg-white shadow-gray-600 shadow-md")}>
          <div className={cx("grid lg:grid-cols-12 lg:gap-1 sm:grid-cols-12")}>
            <div className={cx("lg:col-span-9 sm:col-span-12")}>{children}</div>
            <Sidebar />
          </div>
        </div>
      </div>
     <DarkMode/>
    </div>
  );
}

export default DefaultLayout;
