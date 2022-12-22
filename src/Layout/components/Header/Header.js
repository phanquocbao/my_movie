import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Search from "../Search/Search";
import Nav from '../Nav/Nav'
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
        <div className="container-main w-[1170px]">
          <div className={cx("inner grid grid-cols-12")}>
            <div className={cx("logo col-span-1 col-start-1 col-end-2")}>Logo</div>
            <Search />
            <div className={cx('col-span-1 col-start-11 col-end-13 ')}>
                <div className={cx('get-bookmark flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-lg box-shadow leading-5 text-white px-3 py-1 rounded-2xl ')}>
                  <i class="hl-bookmark"></i>
                  <span> Phim yêu thích</span>
                  <span className={cx('count ml-2 px-1 text-xl pl-1 bg-red-600 rounded-2xl')}>0</span>
                </div>
              </div>
          </div>
        </div>
    </header>
    
  );
}

export default Header;
