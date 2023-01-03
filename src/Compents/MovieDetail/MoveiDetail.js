import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import {
  faServer,
  faPlay,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
function MovieDetail({ res }) {

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
                    />
                  </div>
                </div>
                <div className="header_poster_wrapper pl-[40px] flex">
                  <div className="Header poster">
                    <div className="title ">
                      <h2 className="10 text-white">
                        <a href="/tv/36361-ulice" className="font-bold">
                          {res.original_title}
                        </a>
                        <span className="tag release_date">(2005)</span>
                      </h2>

                      <div className="facts flex text-sm justify-start">
                        <span className="certification  mr-4"> phim |</span>

                        <span className="genres mr-4">
                          <a
                            className="mr-2"
                            href="/genre/18-phim-chinh-k-ch/tv"
                          >
                            Phim Chính Kịch |
                          </a>
                          <a className="" href="/genre/35-phim-hai/tv">
                            Phim Hài |
                          </a>
                        </span>

                        <span className="runtime mr-4">50m</span>
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
                          <FontAwesomeIcon  icon={faAngleDown} /> Tập phim
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
            <div className="col-span-9">
              <div className="sever-movie p-4">
                <span></span>
                <span className="server-name">
                  <span className="hl-server"></span>
                  <FontAwesomeIcon icon={faServer} /> Server #1
                </span>
                <span className="server-name">
                  <span className="hl-server"></span>
                  <FontAwesomeIcon icon={faServer} /> Server #2
                </span>
                <span className="server-name">
                  <span className="hl-server"></span>
                  <FontAwesomeIcon icon={faServer} /> Server #3
                </span>
                <ul className="list-movie-eps">
                  <li className="movie-episode-item">
                    <Link>
                      <span>20</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>19</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>18</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>17</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>16</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>15</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>14</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>13</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>12</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>11</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>10</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>9</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>8</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>7</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>6</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>5</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>4</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>3</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>2</span>
                    </Link>
                  </li>
                  <li className="movie-episode-item">
                    <Link>
                      <span>1</span>
                    </Link>
                  </li>
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
                <div className="des-content-movie">
                  <div className="section-title">
                    <span className="text-xl">Nội dung phim</span>
                  </div>
                  <p>{res.overview}</p>
                </div>
              </div>
            </div>
            {/* end col 9 */}
            <div className="col-span-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
