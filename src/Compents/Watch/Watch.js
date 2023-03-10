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
            className="w-[100%] sm:h-[650px] h-[300px]"
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
            <div className="sm:col-span-9 col-span-12">
              <div className="sever-movie p-4">
                <span></span>
                <span className="server-name dark:bg-black bg-slate-300 text-black dark:text-yellow-500">
                  <span className="hl-server"></span>
                  <FontAwesomeIcon icon={faServer} /> Server #1
                </span>
                <ul className="list-movie-eps bg-gray-300 dark:bg-black">
                  {data.results.reverse().map((result, index) => (
                    <li
                      className="movie-episode-item"
                      onClick={() => {
                        setActive_key(index);
                      }}
                    >
                      <a>
                      <span className="text-black bg-white dark:bg-slate-900 dark:text-white hover:bg-yellow-300 cursor-pointer text-xs">{index + 1}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="movie-notice">
                  <p>
                    - M???o t??m ki???m : th??m <strong>hh3d </strong>ph??a sau ????? ra
                    k???t qu??? t???t nh???t, v?? d??? :{" "}
                    <strong>dau la dai luc hh3d</strong>
                    <br />- ?????ng ti???c 1 comment b??n d?????i ????? ????nh gi?? phim
                  </p>
                </div>
                <div className="showtime_movies">
                  <p>PHIM CHI???U 1 T???P M???I TR??A TH??? 5 H??NG TU???N</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3 col-span-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
