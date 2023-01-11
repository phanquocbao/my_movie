import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const cx = classNames.bind(styles);
function Nav() {
  return (
    <div
      className={cx(
        "wrapper dark:bg-darkbluea bg-white min-h-[50px] flex items-center justify-center"
      )}
    >
      <div className={cx("container-main w-[1170px] ")}>
        <nav>
        <ul className="menus flex items-center list-none text-sm flex-wrap">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
