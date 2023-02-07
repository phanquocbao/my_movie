import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

import {
  faServer,
  faPlay,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
import { FastAverageColor } from "fast-average-color";
import { useRef } from "react";

function MovieDetail({ res }) {
  const [active_key, setActive_key] = useState(0);
  const [mainColor, setMainColor] = useState("");

  const handleMovieFavourite = (val) => {
    const listmoviveRaw = localStorage.getItem("movie");
    let listMovies = [];
    if (!!listmoviveRaw) {
      listMovies = JSON.parse(listmoviveRaw);
    }
    const foundItemm = listMovies.find((item) => item.id === res.id);
    if (!!foundItemm) {
    } else {
      listMovies = [
        {
          id: res.id,
          name: res.original_title,
          src: `https://image.tmdb.org/t/p/original${res.poster_path}`,
          date: res.release_date,
        },
        ...listMovies,
      ];

      localStorage.setItem("movie", JSON.stringify(listMovies));
    }
  };

  const handleAfterLoadThumb = (e) => {
    const fac = new FastAverageColor();
    const color = fac.getColor(e.target);
    console.log("🚀 ~ file: MoveiDetail.js:45 ~ handleAfterLoadThumb ~ color", color)
    setMainColor(color.hex);
  };

  return (
    <>
      <div
        className="bg relative z-10"
        style={{
          backgroundImage: `URL(https://image.tmdb.org/t/p/original${res.backdrop_path})`,
        }}
      >
        <div className="single  absolute z-0 top-[100px] left-[100px] right-[100px] bottom-[100px]">
          <div className="flex justify-center">
            <div className="w-[1170px] main-content">
              <div className="original_header flex ">
                <div className="poster-wrapper max-w-[300px] max-h-[450px]">
                  <div className="image_content w-full backdrop">
                    <img
                      className="poster max-w-[300px]  max-h-[450px]"
                      src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                      alt={res.original_title}
                      onLoad={handleAfterLoadThumb}
                    />
                    <div
                      className="bookmark"
                      onClick={() => {
                        handleMovieFavourite(res.id);
                      }}
                    >
                      <img src="../../Assets/Images/bookmark-2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="header_poster_wrapper pl-[40px] sm:flex hidden">
                  <div className="Header poster">
                    <div className="title ">
                      <h2 className="10 text-white">
                        <a href="/tv/36361-ulice" className="font-bold">
                          {res.original_title}
                        </a>
                        <span className="tag release_date">(2005)</span>
                      </h2>

                      <div className="facts flex text-sm justify-start">
                        <span className="genres mr-4">
                          {res.genres.map((list) => (
                            <a className="mr-2" href="#/">
                              {`${list.name} |`}
                            </a>
                          ))}
                        </span>
                        <span className="runtime mr-4">
                          Runtime : {res.runtime}'
                        </span>
                      </div>
                    </div>
                    <div className="header_info">
                      <h3 className="my-2 text-white" dir="auto">
                        Overview
                      </h3>
                      <div className="overview text-white text-sm" dir="auto">
                        <p>{res.overview}</p>
                      </div>
                    </div>
                    <div className="action-watch-box">
                      <div className="button-watch">
                        <Link
                          className="episode-movie"
                          to={{
                            pathname: `/movie/${res.id}/watchmovie`,
                            state: { fromDashboard: true },
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleDown} /> Tập phim
                        </Link>
                        <Link
                          className="watch-movie"
                          to={{
                            pathname: `/movie/${res.id}/watchmovie`,
                            state: { fromDashboard: true },
                          }}
                        >
                          <FontAwesomeIcon icon={faPlay} /> Xem phim
                        </Link>
                        <div
                          className="w-6 h-6 "
                          style={{ backgroundColor: mainColor }}
                        >
                        </div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="ratingmovie taq-score">
                        <span className="total_votes">12,386</span>
                        <span className="vote-txt"> lượt xem</span>
                      </div>
                      <div className="liststarting">
                        <FontAwesomeIcon
                          className="startrating"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="startrating"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="startrating"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="startrating"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="startrating"
                          icon={faStar}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1170px] content">
          <div className="grid grid-cols-12 gap-1">
            <div className="sm:col-span-9 col-span-12">
              <div className="sever-movie p-4">
                <span className="server-name bg-gray-400 dark:bg-black">
                  <span className="hl-server text-black dark:text-yellow-500">
                    {" "}
                    Cast and Crew{" "}
                  </span>
                </span>
                <div className="grid sm:grid-cols-5 grid-cols-2 gap-4">
                  {res.credits.cast
                    .filter((_, index) => index < 5)
                    .map((list, index) => (
                      <div className="info-cast">
                        <img
                          src={`https://image.tmdb.org/t/p/w154/${list.profile_path}`}
                          alt=""
                          width="100%"
                        />
                        <div className="name-card">
                          <h4 className="card-movie-name">{list.name}</h4>
                          <h5 className="card-release-date">
                            {list.character}
                          </h5>
                        </div>
                      </div>
                    ))}
                </div>

                <span className="server-name dark:bg-black bg-slate-300 text-black dark:text-yellow-500">
                  <span className="hl-server"></span>
                  <FontAwesomeIcon icon={faServer} /> Server #1
                </span>
                <ul className="list-movie-eps bg-gray-300 dark:bg-black">
                  {res.videos.results.map((result, index) => (
                    <li
                      className="movie-episode-item"
                      onClick={() => {
                        setActive_key(index);
                      }}
                    >
                      <Link>
                        <span className="text-black bg-white dark:bg-slate-900 dark:text-white hover:bg-yellow-300 cursor-pointer text-sm sm:text-xs">
                          {index + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="movie-notice">
                  <p>
                    - Mẹo tìm kiếm : thêm <strong>hh3d </strong>phía sau để ra
                    kết quả tốt nhất, ví dụ :{" "}
                    <strong>dau la dai luc hh3d</strong>
                    <br />- Đừng tiếc 1 comment bên dưới để đánh giá phim
                  </p>
                </div>
                <div className="showtime_movies">
                  <p>PHIM CHIẾU 1 TẬP MỖI TRƯA THỨ 5 HÀNG TUẦN</p>
                </div>
                <div className="des-content-movie bg-slate-300 dark:bg-slate-900">
                  <div className="section-title">
                    <span className="text-xl">Nội dung phim</span>
                  </div>
                  <p className="dark:text-white text-black">{res.overview}</p>
                </div>
              </div>
            </div>
            {/* end col 9 */}
            <div className="sm:col-span-3 col-span-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
