import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Search from "../Search/Search";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_PATH } from "../../../Utils/constants";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
const getMovie = localStorage.getItem("movie");
const getList = JSON.parse(getMovie);

function Header() {
  const navigate = useNavigate();
  const [countMovie, setCountMovie] = useState(0);
  const handledeleteitemmovie = (res) => () => {
    const listmovieraw = localStorage.getItem("movie");
    let listmovie = [];
    listmovie = JSON.parse(listmovieraw);
    const checkmovie = listmovie.find((item) => item.id === res.id);
    console.log(1111, checkmovie);
    if (checkmovie) {
      checkmovie = [{}, ...listmovie];
    } else {
    }
    // listmovie = [
    //   ...listmovie,
    // ];
    localStorage.setItem("movie", JSON.stringify(listmovie));
  };

  const handledeleteallmovie = (a) => {
    localStorage.removeItem("movie");
  };

  useEffect(() => {
    if (getList) {
      setCountMovie(getList.length);
    } else {
    }
  }, []);

  return (
    <header
      className={cx(
        "wrapperheader flex justify-center items-center  bg-sky-400 h-[65px] dark:bg-slate-800"
      )}
    >
      <div className="container-main lg:w-[1170px] flex items-center justify-center">
        <div className={cx("inner grid sm:grid-cols-4 grid-cols-1 gap-1")}>
          <div className={cx("logo w-full")}>
            <Link to="/" className={cx("logo-link")} >
              <img
                className={cx("sm:w-[300px] w-[200px] h-auto")}
                src={IMAGE_PATH.logo}
                alt="Tiktok"
              />
            </Link>
          </div>
          <Search />
          <Tippy
            placement="bottom-end"
            interactive
            //  visible={true}
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                <div className="theme-box">
                  <div className="section-title flex justify-between">
                    <span className="">BOOKMARKS</span>
                    <button
                      className="remove-all-bookmark"
                      onClick={handledeleteallmovie}
                    >
                      x Remove all
                    </button>
                  </div>
                  <ul className="list-box">
                    {Array.isArray(getList) &&
                      getList.map((res) => (
                        <li className="box-item flex justify-between">
                          <Link to="#" className="flex justify-between">
                            <div className="img-box flex-1">
                              <img
                                width="45px"
                                height="auto"
                                src={res.src}
                                alt=""
                              />
                            </div>
                            <div className="info-box">
                              <span className="info-title">{res.name}</span>
                              <div className="flex justify-around">
                                <span className="info-date">{res.date}</span>
                                <span
                                  className="remove-bookmark"
                                  onClick={handledeleteitemmovie(res)}
                                >
                                  x
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          >
            <div className={cx("sm:block hidden")}>
              <div
                className={cx(
                  "get-bookmark inline-block py-0.375rem px-2.5 rounded-2xl text-white cursor-pointer text-base bg-blue-600 mr-3.5 mt-px"
                )}
              >
                <i className="hl-bookmark"></i>
                <span> Phim yêu thích</span>
                <span
                  className={cx(
                    "count bg-red-600 py-[3px] px-[6px] text-sm rounded-2xl ml-[10px]"
                  )}
                >
                  {countMovie}
                </span>
              </div>
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
