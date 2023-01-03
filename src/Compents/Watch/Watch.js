import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
import { useState } from "react";

function Watch({ data }) {
  const [active_key, setActive_key] = useState(0);

  console.log("watch render", data);
  return (
    <>
      <div className="video flex justify-center">
        <div className="w-[1170px] main-content">
          <iframe
            width="100%"
            height="650px"
            src={`https://www.youtube.com/embed/${data.results[active_key]?.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
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
                <ul className="list-movie-eps">
                  {data.results.reverse().map((result, index) => (
                    <li
                      className="movie-episode-item"
                      onClick={() => {
                        setActive_key(index);
                      }}
                    >
                      <a>
                        <span>{index + 1}</span>
                      </a>
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
              </div>
            </div>
            <div className="col-span-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
