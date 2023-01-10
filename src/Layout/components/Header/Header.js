import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../../../Utils/constants";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";


const cx = classNames.bind(styles);
const getMovie = localStorage.getItem("movie");
const getList = JSON.parse(getMovie);


function Header() {
  const [countMovie, setCountMovie] = useState(0);

  const handledeleteitemmovie = (res) => () =>{
 
    const listmovieraw = localStorage.getItem("movie"); 
    let listmovie  = [];
    listmovie = JSON.parse(listmovieraw);
    const checkmovie = listmovie.find((item)=> item.id === res.id)
    console.log(1111,checkmovie);
    if(checkmovie)
    {
      checkmovie = [{},
      ...listmovie,
      ];
    }
    else{

    }
    // listmovie = [
    //   ...listmovie,
    // ];
    localStorage.setItem("movie", JSON.stringify(listmovie));
  }

  const handledeleteallmovie = (a)  => {
    localStorage.removeItem('movie');
  }


  useEffect(()=>{
    if(getList){
      setCountMovie(getList.length)
    }
    else{}
  },[])

  return (
    <header className={cx("wrapper")}>
      <div className="container-main w-[1170px] flex items-center justify-center">
        <div className={cx("inner grid grid-cols-12")}>
          <div className={cx("logo w-full col-span-1 col-start-1 col-end-3")}>
            <Link to="" className={cx("logo-link")}>
              <img
                className={cx("w-[300px]")}
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
                    <button class="remove-all-bookmark" onClick={handledeleteallmovie}>x Remove all</button>
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
                                <span className="remove-bookmark" onClick={handledeleteitemmovie(res)}>x</span>
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
            <div className={cx("col-span-1 col-start-11 col-end-13 ")}>
              <div className={cx("get-bookmark")}>
                <i className="hl-bookmark"></i>
                <span> Phim yêu thích</span>
                <span className={cx("count")}>{countMovie}</span>
              </div>
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
