import Header from "../../Layout/components/Header/Header";
import Nav from "../../Layout/components/Nav/Nav";
import styles from "./DetailMovie.module.scss";
import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faServer,
  faPlay,
  faSortDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function DetailMovie() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="wrapper ">
        <div
          className="bg relative z-10"
          style={{
            backgroundImage: `URL(https://image.tmdb.org/t/p/original//s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg)`,
          }}
        >
          {/* {styles={backgroundImage: `url(../../Assets/Images/yIP9BQtvriiO43vwWERdoZJ6Uus.jpg)`}} */}
          {/* <img
            className="h-[600px] w-full"
            src="../../Assets/Images/yIP9BQtvriiO43vwWERdoZJ6Uus.jpg"
          /> */}

          <div className="single  absolute z-0 top-[100px] left-[100px] right-[100px] bottom-[100px]">
            <div className="flex justify-center justify-around">
              <div className="w-[1170px] main-content">
                <div className="original_header flex ">
                  <div className="poster-wrapper max-w-[300px] max-h-[450px]">
                    <div class="image_content w-full backdrop">
                      <img
                        class="poster max-w-[300px]  max-h-[450px]"
                        src="../../Assets/Images/esRxshmD2BY1UPkiUHt7Gn2mksl.jpg"
                      />
                    </div>
                  </div>
                  <div className="header_poster_wrapper pl-[40px] flex">
                    <div className="Header poster">
                      <div className="title ">
                        <h2 className="10 text-white">
                          <a href="/tv/36361-ulice" className="font-bold">
                            The Street
                          </a>
                          <span className="tag release_date">(2005)</span>
                        </h2>

                        <div className="facts flex text-sm justify-start">
                          <span className="certification  mr-4">TV-PG |</span>

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
                          <p>
                            Ulice is a Czech soap opera produced and broadcast
                            by Nova. In the Czech language Ulice means street.
                          </p>
                          <p></p>
                          <p>
                            The show describes the lives of the Farský, Jordán,
                            Boháč, Nikl, and Liška families and many other
                            people that live in Prague. Their daily battle
                            against real problems of living in a modern world
                            like divorce, love, betrayal and illness or disease.
                            Ulice often shows crime.
                          </p>
                        </div>
                      </div>
                      <div className="action-watch-box">
                        <div className="button-watch">
                          <button className="episode-movie">
                            <FontAwesomeIcon
                              className="icon"
                              icon={faAngleDown}
                            />{" "}
                            Tập phim
                          </button>
                          <button className="watch-movie">
                            <FontAwesomeIcon icon={faPlay} /> Xem phim
                          </button>
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
                  <div class="showtime_movies">
                    <p>PHIM CHIẾU 1 TẬP MỖI TRƯA THỨ 5 HÀNG TUẦN</p>
                  </div>
                  <div className="des-content-movie">
                     <div className="section-title"><span className="text-xl">Nội dung phim</span></div>
                     <p>Trong Cửu U Thế Giới, Tam công tử Kiếm Khí Sơn Trang – Thẩm Chấn Y lĩnh hội được môn võ học cổ xưa “Vạn Tàng Kiếm Kinh”, khiến quần hùng võ lâm giang hồ thèm muốn. Thủ lĩnh Ma tông – Thoa Y Nhân vì muốn tranh đoạt kiếm kinh nên đã so tài cao thấp với Thẩm Chấn Y, sau lần tỉ thí thì Tam Công Tử mai danh ẩn tích. Một năm sau, Kiếm Khí Sơn Trang mở lại sơn môn, Thẩm Chấn Y muốn thu đệ tử thân truyền và truyền thụ “Vạn Tàng Kiếm Kinh”! Quần hùng giang hồ lại dậy sóng. Nữ đệ tử Liệt Dương phủ – Sở Hỏa La, cơ duyên xảo hợp trở thành đồ đệ của Thẩm Chấn Y. Khi hai thầy trò cố gắng gỡ giải tình thế thì nguy hiểm tìm đến, cuối cùng khi âm mưu sắp được phơi bày, nguyên do của mọi chuyện đều hướng về một truyền thuyết cổ có tên ” Trảm Nguyện Phi tiên “</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
