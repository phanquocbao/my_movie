import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../../../Utils/constants";



const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className="container-main w-[1170px] flex items-center justify-center">
        <div className={cx("inner grid grid-cols-12")}>
          <div className={cx("logo w-full col-span-1 col-start-1 col-end-3")}>
            <Link to="" className={cx("logo-link")}>
              <img className={cx("w-[300px]")} src={IMAGE_PATH.logo} alt="Tiktok" />
            </Link>
          </div>
          <Search />
          <div className={cx("col-span-1 col-start-11 col-end-13 ")}>
            <div
              className={cx(
                "get-bookmark"
              )}
            >
              <i class="hl-bookmark"></i>
              <span> Phim yêu thích</span>
              <span
                className={cx(
                  "count"
                )}
              >
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
