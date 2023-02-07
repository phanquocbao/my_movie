import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSearch,
  faBookBookmark,
  faEllipsisVertical,

} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

let x = "mr-2 text-lg";
const cx = classNames.bind(styles);

function Nav() {
  const [isShow, setIsShow] = useState();
  const handleOnShowMenuMobile = (e) => {
    setIsShow((prev) => !prev);
  };
  return (
    <div
      className={cx(
        "wrapper dark:bg-darkbluea bg-white min-h-[50px] flex items-center justify-center shadow-gray-600 shadow-md"
      )}
    >
      <div className={cx("container-main w-[1170px]")}>
        <nav>
          <div className={cx("flex sm:hidden justify-between")}>
            <button
              className={cx("mobile-menu-button text-lg pl-3")}
              onClick={handleOnShowMenuMobile}
            >
              <FontAwesomeIcon className={cx("")} icon={faList} />
            </button>
            <div className={cx("sm:block")}>
              <FontAwesomeIcon
                className={cx("mr-2 text-lg")}
                icon={faBookBookmark}
              />
              <FontAwesomeIcon className={cx("mr-2 text-lg")} icon={faSearch} />
              <FontAwesomeIcon className={cx("mr-2 text-lg")} icon={faEllipsisVertical} />
            </div>
          </div>
          <ul
            className={`menus mobile-menu items-center list-none text-sm flex-wrap sm:flex block ${
              isShow ? "" : "hidden"
            }`}
          >
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
