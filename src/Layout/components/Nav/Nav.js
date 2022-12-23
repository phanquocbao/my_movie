import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Dropdown from "./Dropdown";
const cx = classNames.bind(styles);
function Nav() {
  return (
    <div
      className={cx(
        "wrapper bg-darkbluea min-h-[50px] flex items-center justify-center"
      )}
    >
      <div className={cx("container-main w-[1170px] ")}>
        <nav>
          <ul className={cx("inner menu flex text-sm relative")}>
            {MenuItems.map((menu, index) => (
              <li className={cx("")} key={menu.id}>
                {" "}
                <Link
                  title={menu.title}
                  className={cx(
                    "text-white block transition ease-in-out delay-80 py-4 px-4 hover:bg-black hover:text-cyan-400"
                  )}
                  to={`/${menu.id}`}
                >
                  {menu.title}
                  <Dropdown />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
